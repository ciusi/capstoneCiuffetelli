const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

// This route is protected and can only be accessed by logged in users
router.get('/', auth, (req, res) => {
  res.json({ msg: 'Accesso consentito. Benvenuto alla pagina di audit!' });
});

module.exports = router;
