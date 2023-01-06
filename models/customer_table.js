const mongoose= require("mongoose");
const customer_schema= new mongoose.Schema({
    customer_id:String,
    customer_name:String,
    email:{type:String,unique:true},
    balance:Number
})

const Customer= mongoose.model("customers",customer_schema)
module.exports= Customer;