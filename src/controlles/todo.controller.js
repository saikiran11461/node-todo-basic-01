
const todoModel = require("../models/todo.model");


const todoController = {
    getTodos : async(req,res)=>{
        try {
            let data = await todoModel.find();
            if(!data){
                return "data not found"
            }
           return res.status(200).send({message:"get todo success" ,data})
        } catch (error) {
            return res.status(500).send({message:error.message})
        }
    },

    getSingleTodos : async(req,res)=>{
        try {
            if(!req.params.id){
                return "id not found"
            }
            let data = await todoModel.findById(req.params.id);
            if(!data){
                return "data not found"
            }
           return res.status(200).send({message:"get todo success" ,data})
        } catch (error) {
            return res.status(500).send({message:error.message})
        }
    },

    createTodos : async(req,res)=>{
        try {
            let body = req.body;
            if(!body){
                return "data not found"
            }
            let data = await todoModel.create(body);
           return res.status(200).send({message:"create todo success" ,data})
        } catch (error) {
            return res.status(500).send({message:error.message})
        }
    },

    patchTodos : async(req,res)=>{
        try {
            if(!req.params.id){
                return "id not found"
            }
            if(!req.body){
                return "body not found"
            }
            let data = await todoModel.findByIdAndUpdate(req.params.id, req.body,{new:true});
            if(!data){
                return "data not found"
            }
           return res.status(200).send({message:"patch todo success" ,data})
        } catch (error) {
            return res.status(500).send({message:error.message})
        }
    },

    deleteTodos : async(req,res)=>{
        try {
            if(!req.params.id){
                return "id not found"
            }
            let data = await todoModel.findByIdAndDelete(req.params.id);
            if(!data){
                return "data not found"
            }
           return res.status(200).send({message:"Delete todo success" ,data})
        } catch (error) {
            return res.status(500).send({message:error.message})
        }
    }
}

module.exports = todoController;