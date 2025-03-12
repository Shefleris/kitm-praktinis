const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
	title:{
		type:String,
		minlenghth:8,
		required:[true, 'Complaint title is required'],
	},
	description:{
		type:String,
		required:[true, 'Complaint description is required'],
	},
	status:{
		type:'string',	
		default:'pateiktas',
		enum:['pateiktas', 'svarstomas', 'išsprestas']
	},
	categoryId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Categories',
		required:[true,'categoryId is required'],
	},
	userId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Users',
		immutable:true,
		required:[true,'UserId is required'],
	},
	createdAt:{
		type:Date,
		default:Date.now(),
		immutable:true
	},
	modifiedAt:{
		type:Date,
		default:Date.now(),
		select:false
	},
})

const Question = mongoose.model('Questions', questionSchema);
module.exports = Question;