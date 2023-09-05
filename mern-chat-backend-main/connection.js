const mongoose  = require("mongoose");

require("dotenv").config();
//connect mongoDB to our node app
mongoose.connect("mongodb+srv://shrutikumari220802:Shruti@cluster0.tk9fpe0.mongodb.net/?retryWrites=true&w=majority", (err)=>{
    if(err){
             console.log(err.message)
    }else{
              console.log('connected to mongodb')
    }
})