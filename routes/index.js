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

var person1 = new Person({email:"123456789@qq.com", password:"123"});

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
	// var person = new Person();

	// person.email = req.body.email;
	// person.password = req.body.password;

	var person = new Person(req.body);

	person.save(function(err, person){
		if (err) { return next(err); }
		res.json(person);
	});
});

module.exports = router;
