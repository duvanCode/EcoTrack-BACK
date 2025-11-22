const Tip = require('../models/Tip');

exports.getTips = async (req, res) => {
  try {
    const tips = await Tip.find().sort({ createdAt: -1 }).limit(10);
    res.json(tips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRandomTip = async (req, res) => {
  try {
    const count = await Tip.countDocuments();
    const random = Math.floor(Math.random() * count);
    const tip = await Tip.findOne().skip(random);
    res.json(tip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};