const express = require('express');
const authController = require('../controllers/authController.js');
const authProtect = require('../middleware/authProtect.js');

const router = express.Router();
router
  .route('/login')
  .post(authController.login)

router
  .route('/signup')
	.post(authController.signup)
  
module.exports = router;