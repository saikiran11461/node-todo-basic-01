const mongoose = require("mongoose");
require("dotenv").config()


const Connection = () =>{
    let mongUrl = process.env.MONGO_URL

    if(!mongUrl){
        return "mongodb url not found"
    }
    return mongoose.connect(mongUrl)
}


module.exports = Connection;