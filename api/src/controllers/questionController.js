const Question = require('../models/questionSchema.js');
const APIFeatures = require('../utilities/apiFeatures.js')

exports.getAll = async (req, res) => {
  try {
    const questionData = new APIFeatures(Question.find(), req.query)
      .filter()
      .sort()

    const questions = await questionData.query;

    if (!questions || questions.lenght === 0) {
      return res.status(404).json({
        status:'Failed',
        message:'Questions not found'
      })
    }

    res.status(200).json({
      status: 'Success',
      data: questions
    });

  } catch (err){
    res.status(400).json({
      status: 'Failed',
      message: err.message
    });
  };
};

exports.getById = async (req, res) => {
  try {
    const questions = await Question.findById(req.params.id)
  
    if (!questions || questions.lenght === 0) {
      return res.status(404).json({
        status:'Failed',
        message:'Question not found'
      })
    }
    res.status(200).json({
      status: 'Success',
      data: questions
    });
  } catch (err){
    res.status(400).json({
      status: 'Failed',
      message: err.message
    });
  };
};


exports.getByCategory = async (req, res) => {
  try {
    const categoryQuestions = await Question.find({'categoryId':req.params.id})
    if (!categoryQuestions || categoryQuestions.lenght === 0) {
      return res.status(404).json({
        status:'Failed',
        message:'Question not found'
      })
    }
    
    res.status(200).json({
      status:'Success',
      data:{
        categoryQuestions
      }
    })
  } catch (err){
    res.status(400).json({
      status:'Failed',
      message: err.message
    })
  };
};

exports.create = async (req, res) => {
  try {
    const newQuestion = await Question.create(req.body);
    res.status(201).json({
      status: 'Success',
      data: newQuestion
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
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!updatedQuestion) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Question not found'
      });
    };
    
    res.status(200).json({
      status: 'Success',
      data: {updatedQuestion}
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
    await Question.findByIdAndDelete(req.params.id)
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