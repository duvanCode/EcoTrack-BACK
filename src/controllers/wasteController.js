const WasteRecord = require('../models/WasteRecord');
const WasteCategory = require('../models/WasteCategory');

exports.createRecord = async (req, res) => {
  try {
    const record = await WasteRecord.create({
      ...req.body,
      userId: req.user.id
    });
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await WasteRecord.find({ userId: req.user.id })
      .populate('categoryId')
      .sort({ date: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStats = async (req, res) => {
  try {
    const stats = await WasteRecord.aggregate([
      { $match: { userId: req.user._id } },
      { $group: {
        _id: '$categoryId',
        totalWeight: { $sum: '$weight' },
        count: { $sum: 1 }
      }}
    ]);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await WasteCategory.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};