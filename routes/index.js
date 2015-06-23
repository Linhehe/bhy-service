var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bhy');
require('../models/Persons');
require('../models/Companys');
require('../models/Orders');
require('../models/UserFeedbacks');
require('../models/Coupons');
require('../models/OnlineMessages');
var Person = mongoose.model('Person');
var Company = mongoose.model('Company');
var Order = mongoose.model('Order');
var UserFeedback = mongoose.model('UserFeedback');
var Coupon = mongoose.model('Coupon');
var OnlineMessage = mongoose.model('OnlineMessage');


Person.remove().exec();

var person1 = new Person({email:"123456789@qq.com", password:"123", sex: 'girl'});

person1.save();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 登陆
router.get('/sessions', function(req, res, next) {
	Person.findOne({email:req.query.email, password:req.query.password}, function(err, doc) {
			if (err != null) 
				next(err);
			else {
				res.json(doc);
			}
		});
	// if (req.query.usertype == '个人') 
	// {
	// 	Person.findOne({email:req.query.email, password:req.query.password}, function(err, doc) {
	// 		if (err != null) { next(err); }
	// 		else {
	// 			res.json(doc);
	// 		}
	// 	});
	// }
	// if (req.query.usertype == '企业') 
	// {
	// 	Company.findOne({email:req.query.email, password:req.query.password}, function(err, doc) {
	// 		if (err != null) { next(err); }
	// 		else {
	// 			res.json(doc);
	// 		}
	// 	});
	// }
});

// 注册
router.post('/sessions', function(req, res, next) {

	Person.findOne({email: req.body.email}, function(err,doc){
		if(err != null){
			next(err);
		}
		else{
			if(doc != null){
				console.log('find!!');
				// 找到，不能注册
				res.send('error');
			}else{
				console.log('no find!!');
				// 找不到，可以注册
				var user = new Person({email: req.body.email, password: req.body.password});

				user.save(function(err, user){
					if(err){ return next(err); }

					res.json(user);
					console.log(req.body);
					console.log(req.body.email);
				});
			}
		}
	});
});

// 取数据
router.get('/show', function(req, res, next){
	Person.findOne({email: req.query.email}, function (err, doc) {
		if(err != null){
			next(err);
		}
		else{
			res.json(doc);
		}
	});
	console.log(req.query.email);
});

module.exports = router;
