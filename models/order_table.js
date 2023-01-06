const mongoose= require("mongoose");
const order_schema= new mongoose.Schema({
    order_id:String,
    customer_id:String,
    product_id:String,
    quantity:Number
})
const Order= mongoose.model("orders",order_schema);
module.exports= Order;