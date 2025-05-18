const express  = require("express");
const todoController = require("../controlles/todo.controller");
const  {todoValidator}= require("../validators/validators");
const {validateRequest} = require("../middlewares/validateRequest")
const todoRouter = express.Router();


todoRouter.get("/", todoController.getTodos);
todoRouter.get("/:id", todoController.getSingleTodos);
todoRouter.post("/create",todoValidator, validateRequest, todoController.createTodos);
todoRouter.patch("/:id",todoController.patchTodos);
todoRouter.delete("/:id",todoController.deleteTodos)


module.exports  = todoRouter