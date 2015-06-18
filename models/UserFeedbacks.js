/*
	用户反馈
*/
var mongoose = require('mongoose');

var UserFeedbackSchema = new mongoose.Schema(
	{
		mobilePhone: String,
		content: String
	});

mongoose.model('UserFeedback', UserFeedbackSchema);