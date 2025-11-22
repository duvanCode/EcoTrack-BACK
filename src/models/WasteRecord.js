const mongoose = require('mongoose');

const wasteRecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'WasteCategory', required: true },
  description: { type: String, required: true },
  weight: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  image: String
});

module.exports = mongoose.model('WasteRecord', wasteRecordSchema);