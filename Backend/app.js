const express= require('express'); // express
const dotenv= require('dotenv'); // for using .env as  source file
dotenv.config(); // cofiguring it
const cors= require('cors'); // cors
const dbconnect= require('./DB/DB') // exporting the function to connect the db to this code
const userRoutes= require('./Routes/userroutes');
const cookieParser = require('cookie-parser');




dbconnect(); // calling the function so the db automatically connects always

const app= express(); // initializin express

app.use(cors()) // currently it will recieve request from any website
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/users',userRoutes)

module.exports= app; // exporting this express server