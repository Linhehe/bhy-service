/*
	优惠劵
*/
var mongoose = require('mongoose');

var CouponSchema = new mongoose.Schema(
	{
		couponNumber: String // 优惠码/礼卷号
	});

mongoose.model('Coupon', CouponSchema);