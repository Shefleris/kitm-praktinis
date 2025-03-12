const express = require('express');
const authController = require('../controllers/authController.js');

const router = express.Router();
router
  .route('/')
  .post(authController)
  
module.exports = router;