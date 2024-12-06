const express= require('express');
const dotenv= require('dotenv');
dotenv.config();
const cors= require('cors');

const app= express();

app.use(cors)


module.exports= app;