const mongoose = require("mongoose")

const agentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    place:{type:String, required:true},
    mobileno:{type:Number, required:true},
    email:{type:String, required:true},
    bankdetails:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
})

const Agent = mongoose.model("agent",agentSchema)
module.exports=Agent