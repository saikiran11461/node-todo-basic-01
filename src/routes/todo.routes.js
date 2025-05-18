const express  = require("express");
const todoController = require("../controlles/todo.controller");

const todoRouter = express.Router();


todoRouter.get("/", todoController.getTodos);
todoRouter.get("/:id", todoController.getSingleTodos);
todoRouter.post("/create", todoController.createTodos);
todoRouter.patch("/:id",todoController.patchTodos);
todoRouter.delete("/:id",todoController.deleteTodos)


module.exports  = todoRouter