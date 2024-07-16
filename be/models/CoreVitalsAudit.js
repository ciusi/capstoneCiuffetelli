// models/CoreVitalsAuditResult.js
const mongoose = require('mongoose');

const CoreVitalsAuditResultSchema = new mongoose.Schema({
  url: { type: String, required: true },
  device: { type: String, required: true },
  results: { type: Object, required: true },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const CoreVitalsAuditResult = mongoose.model('CoreVitalsAuditResult', CoreVitalsAuditResultSchema);

module.exports = CoreVitalsAuditResult;
