const mongoose  = require("mongoose");


const todoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    status:{type:String,enum:["pending","success"],default:"pending",required:false}
},
{
    timestamps:true,
    versionKey:false
})

const todoModel = mongoose.model("todo", todoSchema)

module.exports = todoModel;