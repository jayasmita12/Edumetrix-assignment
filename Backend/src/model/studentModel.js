const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    place:{type:String, required:true},
    mobileno:{type:Number, required:true,unique:true},
    email:{type:String, required:true},
    pastcourse:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
})

const Student = mongoose.model("student",studentSchema)
module.exports=Student