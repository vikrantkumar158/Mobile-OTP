var otp=require('../models/otp');
var generate=require('../models/generate');

module.exports = (app)=>{
	
	app.get('/send',(req,res)=>{
		res.render('sendOtp.ejs');
	});

	app.post('/send',(req,res)=>{
		var x=generate.generateOtp();
		otp.send(req.body.phone,x,(err,data)=>{
			if(err)
				res.send(err);
			res.render('verifyOtp.ejs',{phone:req.body.phone});
		});
	});
};
