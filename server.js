const express = require('express')  
const app = express() //connect application to express server
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mainRoutes = require('./routes/main')
const uploadRoutes = require('./routes/upload')
const connectDB = require("./config/database");
const dotenv = require('dotenv')
dotenv.config({path: './config/.env'}) //database string

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();
 
//Using EJS for views
app.set("view engine", "ejs");

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Sessions
app.use(
    session({
      secret: process.env['DB_STRING'],
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env['DB_STRING'],
      
    })
    
})

);

app.use("/", mainRoutes);
app.use("/upload", uploadRoutes);


//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});