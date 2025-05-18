const express = require('express');
const cors = require("cors");
const todoRouter = require("./src/routes/todo.routes");
const Connection = require('./src/config/db');
require("dotenv").config()
const app = express();

app.use(express.json());
app.use(cors())


app.use("/todo", todoRouter)



app.listen(process.env.PORT,async()=>{
    try {
      await  Connection()
        console.log(`Connected running on PORT ${process.env.PORT}`)
    } catch (error) {
        console.log("error in db", error)
    }
})