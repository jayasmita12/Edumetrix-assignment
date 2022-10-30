 const mongoose=require("mongoose")

 const loginSchema = new mongoose.Schema({
    email:{type:String , required:true},
    password:{type:String , required:true}
 },{
   versionKey:false,
   timestamps:true
 })

 const User = mongoose.model("user",loginSchema)
 module.exports=User


