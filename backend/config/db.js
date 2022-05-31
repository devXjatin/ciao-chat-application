const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config({path:"backend/config/config.env"});

const connectDB = ()=>{
  mongoose.connect(process.env.MONGO_URI,
     {
  }).then((con)=>{
     console.log(`Database Connected ${con.connection.host}`);
 }).catch((err)=>{
     console.log(`Databse is not connected ${err}`);
 })
}
module.exports = connectDB;
