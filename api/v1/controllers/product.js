//יצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות
//המטרה שכל הלוגיקה תשב בקובץ הנוכחי
module.exports={

    getAllProducts:(req,res)=>{
        return res.status(200).json({"msg":"My Ecommerce Api router"});
    },
    getProductByID:(req,res)=>{
        return res.status(200).json({"msg":"Product by ID" + req.params.id});
    },
    getProduct:(req,res)=>{
        return res.status(200).json({"msg":"Update Product by ID" + req.params.id});
    },
    UpdateProducts:(req,res)=>{
        return res.status(200).json({"msg":"Add Product"});
    },
    DeleteProducts:(req,res)=>{
        return res.status(200).json({"msg":"Delete Product by ID" + req.params.id});
    }
    };