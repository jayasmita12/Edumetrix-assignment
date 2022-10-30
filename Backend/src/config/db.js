const mongoose = require("mongoose")

const connect = ()=>{
    return mongoose.connect("mongodb+srv://jayasmita:jaya12@cluster0.2oy0oeb.mongodb.net/?retryWrites=true&w=majority")
}

module.exports=connect