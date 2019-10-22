"use strict";

var sendOtp=require('sendotp');
var sendOtp=new sendOtp('AuthKey','Otp for your order is {{otp}}, please do not share it with anybody');
sendOtp.setOtpExpiry('5');

exports.send = (phone,otp,cb)=>
{
	sendOtp.send(phone,"RidezNow",otp,(err,data)=>{
		if(err)
			cb(err);
		cb(null,data);
	});
}

exports.retry = (phone,cb)=>
{
	sendOtp.retry(phone,false,(err,data)=>{
		if(err)
			cb(err);
		cb(null,data);
	});	
}

exports.verify = (phone,otp,cb)=>
{
	sendOtp.verify(phone,otp,(err,data)=>{
		if(err)
			cb(err);
		if(data.type=='success')
			cb(null,'true');
		cb(null,'false');
	});
}