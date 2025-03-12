const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
	comment:{
		type:String,
		required:[true, 'Comment is required'],
	},
	questionId:{
		type:mongoose.Schema.Types.ObjectId,
		ref: 'Complaints',
		required:[true, 'The comment needs to include complaintId'],
	},
	userId:{
		type:mongoose.Schema.Types.ObjectId,
		ref: 'Users',
		required:[true,'The comment needs to include a userId'],
		immutable:true,
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

const Comment = mongoose.model('Comments', commentSchema);
module.exports = Comment;