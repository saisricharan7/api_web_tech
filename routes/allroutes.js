const router= require("express").Router();
const Product= require("../models/product_table");
const Customer=require("../models/customer_table");
const Order= require("../models/order_table");
const { findOneAndDelete } = require("../models/customer_table");
let orderid=0,customerid=0,productid=0

//-----get methods----//
router.get("/orders/:order_id",async(req,res)=>{
    try{
        const order= await Order.find({order_id:req.params.order_id});
        res.status(200).json({
            status:"success",
            data:order
        })
    }
    catch(e){
        res.status(404).json({
            status:"failed",
            message:e.message
        })
    }

})

router.get("product/:product_id",async(req,res)=>{
    try{
        const product= await Product.find({product_id:req.params.product_id});
        res.status(200).json({
            status:"success",
            data:product
        })
    }
    catch(e){
        res.status(404).json({
            status:"failed",
            message:e.message
        })
    }

})

router.get("/customer/:customer_id",async(req,res)=>{
    try{
        const customer= await Customer.find({customer_id:req.params.customer_id});
        res.status(200).json({
            status:"success",
            data:customer
        })
    }
    catch(e){
        res.status(404).json({
            status:"failed",
            message:e.message
        })
    }

})

router.get("/product/:product_type",async(req,res)=>{
    try{
        const product= await Product.find({product_type:req.params.product_type});
        res.status(200).json({
            status:"success",
            data:product
        })
    }
    catch(e){
        res.status(404).json({
            status:"failed",
            message:e.message
        })
    }

})

//-----post methods-----///

router.post("/orders",async(req,res)=>{
    try{
        const order= await Order.create(req.body);
        res.status(200).json({
            status:"success",
            data:order
        })
    }
    catch(e){
        res.status(404).json({
            status:"failed",
            message:e.message
        })
    }
})

router.post("/product",async(req,res)=>{
    try{
        const product= await Product.create(req.body);
        res.status(200).json({
            status:"success",
            data:product
        })
    }
    catch(e){
        res.status(404).json({
            status:"failed",
            message:e.message
        })
    }
    
})

router.post("/customer",async(req,res)=>{
    try{
        const customer= await Customer.create(req.body);
        res.status(200).json({
            status:"success",
            data:customer
        })
    }
    catch(e){
        res.status(404).json({
            status:"failed",
            message:e.message
        })
    }
    
})

//----put methods---//

router.put("/:product_name/:availableQuantity",async(req,res)=>{
    const product= await Product.find({product_name:req.params.product_name});
    const quantity= product[0].available_quantity
    if(quantity>=req.params.availableQuantity){
        const details=await Product.updateOne({product_name:req.params.product_name},{$set:{available_quantity:quantity-req.params.availableQuantity}});
        res.status(200).json({
            status:"success",
            detail:details
        })
    }
    else{
        res.status(400).json({
            status:"failed",
            message:"ITEM IS OUT OF STOCK"
        })
    }
})

router.put("/customer/:email/:costOfAnOrder",async(req,res)=>{
    try{
    const customer= await Customer.find({email:req.params.email},{balance:1});
    const amount= customer[0].balance
    if(req.params.costOfAnOrder<=amount){
      const detail=  await Customer.updateOne({email:req.params.email},{$set:{balance:amount-req.params.costOfAnOrder}});
        res.status(200).json({
            status:"success",
            balance:detail
        })
    }
    else{
        res.status(400).json({
            status:"failed",
            message:"INSUFFICIENT FUNDS"
        })
    }
}
catch(e){
    res.json({
        status:"failed"
    })
   

}
})

module.exports=router;

