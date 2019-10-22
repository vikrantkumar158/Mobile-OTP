var otp=require('../models/otp');

module.exports = (app)=>
{
	app.post('/resend',(req,res)=>{
		otp.retry(req.body.phone,(err,data)=>{
			if(err)
				res.send(err);
			res.send(data);
		});
	});
}