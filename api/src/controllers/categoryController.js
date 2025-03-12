const Category = require('../models/categorySchema.js');
const APIFeatures = require('../utilities/apiFeatures.js')

exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json({
      data:{
        categories
      }
    })
  } catch (err){
    res.status(404).json({
      status:'Failed',
      message:err.message
    })
  };
};


// exports.getComplaintsByCategory = async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id)


//     res.status(200).json({
//       status:'Success',
//       data:{
//         category
//       }
//     })
//   } catch (err){
//     res.status(400).json({
//       status:'Failed',
//       message: err.message
//     })
//   };
// };

exports.create = async (req, res) =>{
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({
      status: 'Success',
      data: newCategory
    });
  } catch (err){
    res.status(400).json({
      status: 'Failed',
      message: err.message
    });
  };
};

// exports.update = async (req, res) => {
//   try {
//     const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });
    
//     if (!updatedCategory) {
//       return res.status(404).json({
//         status: 'Failed',
//         message: 'Category not found'
//       });
//     };
    
//     res.status(200).json({
//       status: 'Success',
//       data: {
//         updatedCategory
//       }
//     });
//   } catch (err){
//     res.status(400).json({
//       status: 'Failed',
//       message: err.message
//     });
//   };
// };

exports.delete = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
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