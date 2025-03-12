const Comment = require('../models/commentSchema.js');
const APIFeatures = require('../utilities/apiFeatures.js')

exports.getById = async (req, res) => {
  try {
    const comments = await Comment.findById(req.params.id)
  
    if (!comments || comments.lenght === 0) {
      return res.status(404).json({
        status:'Failed',
        message:'Comment not found'
      })
    }
    res.status(200).json({
      status: 'Success',
      data: comments
    });
  } catch (err){
    res.status(400).json({
      status: 'Failed',
      message: err.message
    });
  };
};

exports.getByQuestion = async (req, res) => {
    try {
      const comments = await Comment.where(questionId).equals(req.params.id)
    
      if (!comments || comments.lenght === 0) {
        return res.status(404).json({
          status:'Failed',
          message:'Comment not found'
        })
      }
      res.status(200).json({
        status: 'Success',
        data: comments
      });
    } catch (err){
      res.status(400).json({
        status: 'Failed',
        message: err.message
      });
    };
  };

exports.create = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json({
      status: 'Success',
      data: newComment
    });

  } catch (err){
    res.status(400).json({
      status: 'Failed',
      message: err.message
    });
  };
};

exports.update = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!updatedComment) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Question not found'
      });
    };
    
    res.status(200).json({
      status: 'Success',
      data: {updatedComment}
    });

  } catch (err){
    res.status(400).json({
      status: 'Failed',
      message: err.message
    });
  };
};

exports.delete = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'Success',
      data: null
    });
    
  } catch (err){
    res.status(400).json({
      status: 'Failed',
      message: err.message
    });
  };
};