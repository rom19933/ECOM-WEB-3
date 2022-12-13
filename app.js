const {router} = require('express');
// קישור לספריית אקספרס
const express=require('express');

// יצירת מופע של  אקספרס
const app=express();

const Productrouter=require('./api/v1/routes/product');

app.use("/product", Productrouter);

module.exports=app;