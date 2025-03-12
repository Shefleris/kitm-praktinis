const express = require('express');
const categoryController = require('../controllers/categoryController.js');
const questionController = require('../controllers/questionController.js')

const authProtect = require('../middleware/authProtect.js');
const checkForAdmin = require('../middleware/checkForAdmin.js');

const router = express.Router();
router
  .route('/')
  .get(categoryController.getAll)
  .post(categoryController.create)

router
  .route('/:id')
  .get(questionController.getByCategory)
  
module.exports = router;