const express=require('express');

const app=express();
app.get("/",(req,res)=>{
res.status(200).json({"Message":"hello from Ecommerce web api"});

});
module.exports=app;