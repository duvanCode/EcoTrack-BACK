const mongoose = require('mongoose');

const wasteCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  color: String,
  icon: String,
  tips: [String],
  examples: [String]
});

module.exports = mongoose.model('WasteCategory', wasteCategorySchema);