const express = require('express');
const { createRecord, getRecords, getStats, getCategories } = require('../controllers/wasteController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/records', protect, createRecord);
router.get('/records', protect, getRecords);
router.get('/stats', protect, getStats);
router.get('/categories', getCategories);

module.exports = router;