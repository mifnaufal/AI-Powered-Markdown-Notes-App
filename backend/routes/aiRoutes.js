const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const aiLimiter = require('../config/rateLimit');
const validateInput = require('../middleware/validateInput'); 

router.post('/summarize', aiLimiter, validateInput, aiController.summarize);
router.post('/rewrite', aiLimiter, validateInput, aiController.rewrite);

module.exports = router;