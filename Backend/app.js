const express= require('express'); // express
const dotenv= require('dotenv'); // for using .env as  source file
dotenv.config(); // cofiguring it
const cors= require('cors'); // cors
const dbconnect= require('./DB/DB') // exporting the function to connect the db to this code
const userRoutes= require('./Routes/userroutes');
const cookieParser = require('cookie-parser');
const captainRoutes= require('./Routes/captainroutes')

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  };


dbconnect(); // calling the function so the db automatically connects always

const app= express(); // initializin express

app.use(cors(corsOptions)) // currently it will recieve request from any website
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/users',userRoutes)
app.use('/captains',captainRoutes)

module.exports= app; // exporting this express server