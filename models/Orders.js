/*
	订单信息
*/
var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema(
	{
		waitPay: [ // 等待支付
			{time: String, payState: String, combo: String} // time(预约时间) paystate(支付状态) combo(优惠套餐)
		],
		paid: [], // 已完成
		cancel: [] // 已取消
	});

mongoose.model('Order', OrderSchema);