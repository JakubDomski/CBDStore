import mongoose from "mongoose";
const {Schema} = mongoose;
mongoose.Promise = global.Promise
const ProductSchema= new Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        description:{
            type:String,
            required:true,
            maxLength:250
        },
        img:{
            type:String,
            required:true,
            maxLength:50
        },
        prices:{
            type: [Number],
            required:true,
        },
        thc:{
            type: [Number],
            required:true,
        }
        },
    );

export default (mongoose.models && mongoose.models.Product
    ? mongoose.models.Product
    : mongoose.model('Product', ProductSchema));