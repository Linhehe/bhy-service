/*
	在线留言
*/
var mongoose = require('mongoose');

var OnlineMessageSchema = new mongoose.Schema(
	{
		persons: [
			{type: mongoose.Schema.Types.ObjectId, ref: 'Person'} 
		], // 个人用户
		companys: [
			{type: mongoose.Schema.Types.ObjectId, ref: 'Company'}
		], // 企业用户
		time: String, // 留言的时间
		content: String // 内容
	});

OnlineMessageSchema.pre('remove', function(next){
	this.persons.forEach(function(c){
		mongoose.model('Person')
		.findById( c.id, function(res){
			res.remove();
		});
	})
	this.companys.forEach(function(c){
		mongoose.model('Company')
		.findById( c.id, function(res){
			res.remove();
		});
	})
	next();
})

mongoose.model('OnlineMessage', OnlineMessageSchema);