const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  categoryName: {
		type:String,
    unique:[true, 'This category already exists'],
    required:[true,'Category name is required']
  },
  createdAt:{
    type:Date,
    default:Date.now(),
    immutable:true
  },
	modifiedAt:{
		type:Date,
		default:Date.now(),
		select:false,
	},
});

const Category = mongoose.model('Categories', categorySchema);
module.exports = Category;