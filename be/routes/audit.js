const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

// Questa rotta è protetta e può essere accessibile solo dagli utenti loggati
router.get('/', auth, (req, res) => {
  res.json({ msg: 'Accesso consentito. Benvenuto alla pagina di audit!' });
});

module.exports = router;
