import mongoose from "mongoose";

const OrderSchema= new mongoose.Schema({
    customer:{
        type:String,
        required:true,
        maxLength:50
    },
    adres:{
        type:String,
        required:true,
        maxLength:250
    },
    total:{
        type:Number,
        required:true,
        maxLength:50
    },
    status:{
        type: Number,
        default:0,
    },
    method:{
        type: Number,
        required:true,
    },

}, {timestamps:true})
export default mongoose.model.Order || mongoose.model("Order",OrderSchema)