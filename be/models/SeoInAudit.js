// models/SeoInAudit.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeoInAuditSchema = new Schema({
  url: { type: String, required: true },
  results: { type: Object, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SeoInAudit', SeoInAuditSchema);
