//הפעלת פונקציה מתוך ספריית אי אן וי שטוענת את ההגדרות מקובץ דוט אי אן וי
require('dotenv').config();
const {router} = require('express');
// קישור לספריית אקספרס
const express=require('express');

// יצירת מופע של  אקספרס
const app=express();

const Productrouter=require('./api/v1/routes/product');

app.use("/product", Productrouter);

module.exports=app;