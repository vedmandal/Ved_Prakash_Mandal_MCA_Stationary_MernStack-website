import express from "express"
import { CheckoutController, CreateProductController, DeleteProductController, FiltersController, GetAllOrderController, GetAllProductController, GetOrderController, OrderController, ProductCountController, ProductListController, SearchController, SingleProductController, UpdateProductController,  orderStatusController,  paymentVerification,  photoProductController } from "../Controllers/ProductController.js";
import formidable from "express-formidable";
import { RequireSignIn, isAdmin } from "../middleware/AuthMiddleware.js";

const router=express.Router();

router.post("/create-product",formidable(),CreateProductController)
router.put("/update-product/:pid",formidable(),UpdateProductController)
router.get("/get-product",GetAllProductController)
router.get("/single-product/:slug",SingleProductController)
router.get("/photo-product/:pid",photoProductController)
router.delete("/delete-product/:pid",DeleteProductController)
router.post("/filter-product",FiltersController)
router.get('/count-product',ProductCountController)
router.get("/product-list/:page",ProductListController)
router.get("/search/:keyword",SearchController);
router.post("/checkout",CheckoutController);
router.get("/get-key",(req,res)=>{
    res.status(200).json({key:process.env.RAZORPAY_API_KEY});
})

router.post("/verify-payment",paymentVerification);
router.post("/orders",RequireSignIn,OrderController);
router.get("/get-order",RequireSignIn,GetOrderController)
router.get("/all-order",RequireSignIn,isAdmin,GetAllOrderController)
router.put("/status/:orderid",RequireSignIn,isAdmin,orderStatusController)


export default router