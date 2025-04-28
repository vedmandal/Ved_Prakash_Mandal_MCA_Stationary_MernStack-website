import mongoose from "mongoose";
const OrderSchema=new mongoose.Schema({
    cart:[
        {
            type:mongoose.ObjectId,
            ref:"product"
        }
    ],
    buyer:{
        type:mongoose.ObjectId,
        ref:"user"
    },
    status:{
        type:String,
        default:'Not process',
        enum:["Not process","processing","shipping","delivered","cancel"]
    }
},{timestamps:true})
export const Order=mongoose.model("order",OrderSchema);