const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));