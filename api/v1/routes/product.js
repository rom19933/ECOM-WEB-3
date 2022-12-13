//נגדיר אוביקט מסוג ראוטר
const router=require('express').Router();
const ProductController=require('../controllers/product')

//ברגע שמשתמשים בשיטה זאת אז מוחקים את "ProductController."
//const {AddProduct,getAllProducts,getProductByID,UpdateProducts,DeleteProducts}=require('../controllers/product');



//הגדרות ניתןב - נקודת קצה בשיטת גט לנתיב של מוצר
router.get("/",ProductController.getAllProducts);
//שליפת מוצר לפי קוג מוצר
router.get("/:id",ProductController.getProductByID);

//עדכון מוצר לפי קוד מוצר
router.put("/:id",ProductController.getProduct);

//הוספת מוצר חדש
router.post("/",ProductController.UpdateProducts);

//מחיקת מוצר לפי קוד מוצר
router.delete("/:id",ProductController.DeleteProducts);

module.exports=router;