const express = require("express");
const allroutes= require("./routes/allroutes");
const app= express();

app.use(express.json());
app.use("/",allroutes);

module.exports= app;