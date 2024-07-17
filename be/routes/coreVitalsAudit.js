const express = require('express');
const axios = require('axios');
const router = express.Router();
const auth = require('../middleware/auth');
const CoreVitalsAuditResult = require('../models/CoreVitalsAudit');

// Route to run the analysis and save the results
router.post('/run', auth, async (req, res) => {
  const { url, device } = req.body;
  const strategy = device === 'desktop' ? 'desktop' : 'mobile';

  try {
    const response = await axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&key=${process.env.PAGESPEED_API_KEY}`);

    const newAuditResult = new CoreVitalsAuditResult({
      url,
      device,
      results: response.data,
      user: req.user.id
    });

    await newAuditResult.save();

    res.json(newAuditResult);
  } catch (error) {
    console.error('Error fetching Core Web Vitals:', error);
    res.status(500).send('Server error');
  }
});

// Route to retrieve saved results
router.get('/results', auth, async (req, res) => {
  try {
    const results = await CoreVitalsAuditResult.find({ user: req.user.id }).sort({ date: -1 });
    res.json(results);
  } catch (error) {
    console.error('Error fetching audit results:', error);
    res.status(500).send('Server error');
  }
});

// Route to update results
router.post('/refresh', auth, async (req, res) => {
  const { url, device } = req.body;
  const strategy = device === 'desktop' ? 'desktop' : 'mobile';

  try {
    const response = await axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&key=${process.env.PAGESPEED_API_KEY}`);

    const updatedAuditResult = await CoreVitalsAuditResult.findOneAndUpdate(
      { url, user: req.user.id },
      { results: response.data, date: Date.now() },
      { new: true, upsert: true }
    );

    res.json(updatedAuditResult);
  } catch (error) {
    console.error('Error refreshing Core Web Vitals:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
