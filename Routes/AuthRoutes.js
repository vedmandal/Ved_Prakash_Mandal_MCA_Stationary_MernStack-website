import express from "express"
import {  ForgotPassword,  loginController,registerController, testController, updateProfile } from "../Controllers/AuthController.js";
import { RequireSignIn, isAdmin } from "../middleware/AuthMiddleware.js";


const router=express.Router();

router.post("/register",registerController)
router.post("/login",loginController);
router.get("/test",RequireSignIn,testController)
router.post("/forgot-password",ForgotPassword)
router.get("/user-auth",RequireSignIn,(req,res)=>{
    res.status(200).send({ok:true});

})
router.get("/admin-auth",RequireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});

})
router.put("/update-profile",RequireSignIn,updateProfile)


    


export default router