const express = require('express');
const router = express.Router();
const { getChatbotResponse } = require('../controllers/chatbotController');
const auth = require('../middleware/auth');

// @route   POST /api/chatbot
// @desc    Get medical chatbot response
// @access  Protected
router.post('/', auth, getChatbotResponse);

module.exports = router;
