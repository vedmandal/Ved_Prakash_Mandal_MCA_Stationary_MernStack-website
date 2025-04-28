import fs from "fs"
import ProductModels from "../Models/ProductModels.js";
import slugify from "slugify";
import crypto from "crypto"

import { Order } from "../Models/OrderModel.js";
import { payment} from "../Models/PaymentModel.js";
import { instance } from "../server.js";







export  const CreateProductController=async(req,res)=>{
    try {
        const{name,description,price,category,quantity}=req.fields;
        const {photo}=req.files;
        if(!name){
            return res.status(500).send({message:'name is required'})
        }
        if(!description){
            return res.status(500).send({message:'description is required'})
        }
        if(!price){
            return res.status(500).send({message:'price is required'})
        }
        if(!quantity){
            return res.status(500).send({message:'quantity is required'})
        }
        if(!category){
            return res.status(500).send({message:'category is required'})
        } 
        if(!photo){
            return res.status(500).send({message:'photo is required'})
        } 

        const product= await  new ProductModels({...req.fields,slug:slugify(name)})
        if(photo){
            product.photo.data=fs.readFileSync(photo.path);
            product.photo.contentType=photo.type;
        }
       await  product.save()
       res.status(201).send({
        success:true,
        product,
        message:"product created succesfully"
       })
         
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in create PRODUCT controller"
        })
        
    }

}



export  const UpdateProductController=async(req,res)=>{
    try {
        const{name,description,price,category,quantity}=req.fields;
        const {photo}=req.files;
        if(!name){
            return res.status(500).send({message:'name is required'})
        }
        if(!description){
            return res.status(500).send({message:'description is required'})
        }
        if(!price){
            return res.status(500).send({message:'price is required'})
        }
        if(!quantity){
            return res.status(500).send({message:'quantity is required'})
        }
        if(!category){
            return res.status(500).send({message:'category is required'})
        } 
        if(!photo){
            return res.status(500).send({message:'photo is required'})
        } 

       const product=await ProductModels.findByIdAndUpdate(req.params.pid,{...req.fields,slug:slugify(name)},{new:true})
        if(photo){
            product.photo.data=fs.readFileSync(photo.path);
            product.photo.contentType=photo.type;
        }
       await  product.save()
       res.status(201).send({
        success:true,
        product,
        message:"product created succesfully"
       })
         
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in create PRODUCT controller"
        })
        
    }

}


export  const GetAllProductController=async(req,res)=>{
    try {
        const product=await ProductModels.find({}).select("-photo").populate('category').sort({createdAt:-1});
        
        
        res.status(200).send({
            success:true,
            product,
            message:" Got all products succesfully"
           })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in getting all PRODUCT controller"
        })
        
    }

}

export  const SingleProductController=async(req,res)=>{
    try {
        const product=await ProductModels.findOne({slug:req.params.slug}).select("-photo").populate("category");
        res.status(200).send({
            success:true,
           product,
            message:" Got single products succesfully"
           })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in getting single PRODUCT controller"
        })
        
    }

}

export const photoProductController=async(req,res)=>{

    try {
        const product=await ProductModels.findById(req.params.pid).select("photo");
        if(product.photo.data){
            res.set('content-type',product.photo.contentType);
            return res.status(200).send(product.photo.data)


        }

        res.status(200).send({
            success:true,
            photo,
            message:"succesfully got photo"

        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in getting photo PRODUCT controller"
        })
        
    }

}
export  const DeleteProductController=async(req,res)=>{
    try {
        const product=await ProductModels.findByIdAndDelete(req.params.pid).select("-photo");
        res.status(200).send({
            success:true,
           
            message:"  products  deleted succesfully"
           })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in deleting PRODUCT controller"
        })
        
    }

}
 export const FiltersController=async(req,res)=>{
    try {
     const {checked,radio}=req.body;
    let  args={};
    if(checked.length > 0) args.category=checked ;
    if(radio.length)  args.price={$gte:radio[0],$lte:radio[1]}
    const product=await ProductModels.find(args)
    res.status(200).send({
        success:true,
        product,
        message:"filtered successfully"
    })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in  filtering products controller"
        })
        
    }
    



}

export  const ProductCountController=async(req,res)=>{
    try {
        const count=await ProductModels.find().estimatedDocumentCount();
        res.status(200).send({
            success:true,
            count,
            message:" count successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in   products count controller"
        })
        
    }

} 
 

export const ProductListController=async(req,res)=>{
    try {
        const perpage=2;
    const page =req.params.page?req.params.page:1;
    const product=await ProductModels.find({}).select("-photo").skip((page-1)*perpage).limit(perpage).sort({createdAt:-1})

    res.status(200).send({
        success:true,
        product,
        message:"pagination done"

    })
     }
        
     catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in   products pagiantion controller"
        })
        
    }

    

} 

export const SearchController=async(req,res)=>{
    try {
        const {keyword}=req.params;
        const result=await ProductModels.find({
            $or:[
              {name:{$regex:keyword,$options:"i"}},
              {description:{$regex:keyword,$options:"i"}}
            ]
        }).select("-photo")
        res.json(result)

        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in   search controller"
        })
        
    }
}


export const CheckoutController=async(req,res)=>{
    try {

        const {cart}=req.body;
        let total=0;
        cart.map((i)=>{
            total=total+i.price;
        })

        const options={
            amount:Number(total*100),
            currency:"INR"
        };
        const order=await instance.orders.create(options);
        res.status(200).json({
            success:true,
            order
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            error
        })
        
    }
}

export const paymentVerification=async(req,res)=>{
    try {
        const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;

        const body= razorpay_order_id+ "|" +razorpay_payment_id;
        const expectedsignature=crypto.createHmac("sha256",process.env.RAZORPAY_SECRET_KEY)
                             .update(body.toString())
                             .digest("hex");

        const isauthentic=expectedsignature===razorpay_signature;

       

        if(isauthentic){
           await payment.create({
              razorpay_order_id,
               razorpay_payment_id,
              razorpay_signature,
             })
           res.redirect(`${process.env.REACT_PORT}/cart`);
         }else{
          res.status(500).json({
                success:false
              })

          }
        
        } catch (error) {
        console.log(error)
    }
}


export const OrderController=async(req,res)=>{
    try {

        const{cart}=req.body;
   

   const ans= await new Order({
        cart:cart,
        buyer:req.user._id,
        
    }).save();
    

    res.status(200).send({
        success:true,
        message:"order saved succesfully",
      

    })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"erroer in order saved"
            
        })
        
    }
    

}


export const GetOrderController=async(req,res)=>{
    try {
        const orders=await Order.find({buyer:req.user._id}).populate("cart","-photo").populate("buyer","name")
        res.json(orders);
        
    } catch (error) {
        console.log(error)
        console.log("Error in getting  orders")
        
    }

}
export const GetAllOrderController=async(req,res)=>{
    try {
        const orders=await Order.find({ }).populate("cart","-photo","product").populate("buyer","name")
        res.json(orders);
        
    } catch (error) {
        console.log(error)
        console.log("Error in getting all orders")
        
    }

}

export const orderStatusController=async(req,res)=>{
    try {
        const {orderid}=req.params;
        const {status}=req.body;
        const order=await Order.findByIdAndUpdate(orderid,{status},{new:true})
        res.json(order)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error while updating status",
            error
        })
        
    }

}