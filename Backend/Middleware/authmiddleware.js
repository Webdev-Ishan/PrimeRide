const userModel= require('../Models/usermodel')
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken') 
const mongoose = require('mongoose')

module.exports.authuser= async(req, res, next)=>{
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
console.log(token);
if(!token){

    return res.status(401).json({message:"Unauthorised"});
}

try { 
    
    const decode = jwt.verify(token, process.env.JWT_key);
    console.log("Decoded Token:", decode);

const user = await userModel.findById(objectId(decode._id));
console.log("User  Found:", user);

req.user= user;

return next();

} catch (error) {
    
    return res.status(401).json({message:"Unauthorised"});


}


}