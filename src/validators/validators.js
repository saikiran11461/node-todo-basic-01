const {body} = require("express-validator");


exports.todoValidator =[
    body("title").notEmpty().withMessage("title required"),
    body("status").optional().isIn(["pending", "success"]).withMessage("Status must be pending or completed")
]