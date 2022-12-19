module.exports={
    getAllProducts:(req,res)=>{
        return res.status(200).json({"msg":"My Ecommerce Api router"});
    },
    getAllProductByID:(req,res)=>{
        return res.status(200).json({"msg":"Product by ID" + req.params.id});
    },
    getProduct:(req,res)=>{
        return res.status(200).json({"msg":"Update Product By ID" + req.params.id})
    },
    updateProducts:(req,res)=>{
        return res.status(200).json({"msg":"Add Product"})
    },
    deleteProducts:(req,res)=>{
        return res.status(200).json({"msg":"Delete Products By ID" + req.params.id})
    }
};