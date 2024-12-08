const mongoose= require('mongoose') // require mongoose
const bcrypt = require('bcrypt') // require bcrypt for password hashing
const jwt = require('jsonwebtoken') // for authentication and authorisation

const userSchema= new mongoose.Schema({
// userschema
fullname:{
    firstname:{
        type:String,
        required:true,
        minLength:[3,"The firstname should be atleast 3 character long"],
    },

    
    lastname:{
        type:String,
        minLength:[3,"The lastname should be atleast 3 character long"],
    }
},
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:[5,"The email should be atleast 5 character long"],
    },
    password:{
        type:String,
        required:true,
        select:false, // for not sending this as response
        minLength:[6,"The password should be atleast 6 character long"],
    },

    socketID:{
        type:String // for socket.io use
    }


})

// function for generating authentication token using jwt.sign
userSchema.methods.generateAuthtoken= ()=>{
    const token= jwt.sign({id:this._id}, process.env.JWT_key); // from .env
    return token;
}

// compare password for login
userSchema.methods.comparepassword= async function(password){
    return await bcrypt.compare(password,this.password);
}

// hashing the password for not directly storing it unprotected
userSchema.statics.hashpassword= async function(password){
    return await bcrypt.hash(password , 10);
}

module.exports= mongoose.model('user', userSchema); // export this 
