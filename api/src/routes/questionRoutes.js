const express = require('express');
const authProtect = require('../middleware/authProtect.js');
const questionController = require('../controllers/questionController.js');
const checkForAdmin = require('../middleware/checkForAdmin.js');
const commentsController = require('../controllers/commentsController.js')

const router = express.Router();
router
  .route('/')
  .get(questionController.getAll)

router
  .route('/:id')
  .get(questionController.getById)
  .post(questionController.create)
  .patch(authProtect.protect, questionController.update)

router
  .route('/:id/comments')
  .get(commentsController.getByQuestion)
  .post(authProtect.protect, questionController.create)

module.exports = router;