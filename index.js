const app= require("./app");
const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost/orders",{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(3000, () => console.log('Server running......'));