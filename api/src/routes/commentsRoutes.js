const express = require('express');
const authProtect = require('../middleware/authProtect.js');
const commentsController = require('../controllers/commentsController.js');
const { checkForAdmin } = require('../middleware/checkForAdmin.js');

const router = express.Router();
router
  .route('/:id')
  .get(commentsController.getById)
  .patch(authProtect.protect, commentsController.update)
  .delete(authProtect.protect, commentsController.delete)
  
module.exports = router;