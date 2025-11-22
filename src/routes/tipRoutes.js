const express = require('express');
const { getTips, getRandomTip } = require('../controllers/tipController');
const router = express.Router();

router.get('/', getTips);
router.get('/random', getRandomTip);

module.exports = router;