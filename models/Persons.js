/*
	个人信息
*/
var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema(
	{
		name: String, // 姓名
		sex: String, // 性别
		portrait: String, // 头像
		mobilePhone: String, // 手机号码
		address: String, // 所在地(待修改)

		email: String, // 邮箱(用于登陆)
		password: String // 密码(用于登陆)
	});

mongoose.model('Person', PersonSchema);
