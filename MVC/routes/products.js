const router=require('express').Router();
const ProductController=require('../controllers/products')

router.get("/",ProductController.getAllProducts);
router.get("/:id",ProductController.getAllProductByID);
router.put("/:id",ProductController.getProduct);
router.post("/",ProductController.updateProducts);
router.delete("/:id",ProductController.deleteProducts);

module.exports=router;


