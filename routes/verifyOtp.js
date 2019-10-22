var otp=require('../models/otp');

module.exports = (app)=>
{
	app.post('/verify',(req,res)=>{
		otp.verify(req.body.phone,req.body.otp,(err,data)=>{
			if(err)
				res.send(err);
			if(data=='true')
				res.send("Success");
			else
				res.send("Failed");
		});
	});
}