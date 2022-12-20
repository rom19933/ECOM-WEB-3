const express=require('express');
const app=express();
const morgan=require('morgan')
const ProductControllers=require('./MVC/controllers/products');
app.use(morgan('dev'));
app.use(function(req,res,next)
{
    const myip=req.socket.controllersAddress;
    console.log('connection form IP' + req.socket.controllersAddress);
    next();
});
app.get("/",(req,res)=>{
res.status(200).json({"Message":"hello from Ecommerce web api"});

});
app.use('/product',ProductControllers);

module.exports=app;