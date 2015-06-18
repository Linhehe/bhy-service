/*
	企业信息
*/
var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema(
	{
		name: String, // 公司名
		phone: String, // 联系方式
		address: String, // 公司坐所在地
		license: String, // 营业执照

		email: String, // 邮箱(用于登陆)
		password: String // 密码(用于登陆)
	});

mongoose.model('Company', CompanySchema);
