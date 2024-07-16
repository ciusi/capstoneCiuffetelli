//be\routes\seoOffAudit.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const SeoOffAudit = require('../models/SeoOffAudit');

// @route   POST /seo-off
// @desc    Salva le risposte e calcola il punteggio
// @access  Private
router.post('/', auth, async (req, res) => {
  const { answers } = req.body;

  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ msg: 'Invalid answers format' });
  }

  // Calcola il punteggio totale
  const score = answers.reduce((total, answer) => total + answer, 0);

  try {
    const seoOffAudit = new SeoOffAudit({
      userId: req.user.id,  
      score,
    });

    await seoOffAudit.save();
    res.json(seoOffAudit);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


// @route   GET /seo-off
// @desc    Ottiene i risultati di SeoOffAudit per l'utente corrente
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const audits = await SeoOffAudit.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(audits);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
