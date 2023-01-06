const mongoose = require('mongoose');
const product_schema= new mongoose.Schema({
    product_id:String,
    product_type:String,
    product_name:String,
    product_price:Number,
    available_quantity:Number
})
const Product = mongoose.model("products",product_schema);
module.exports= Product