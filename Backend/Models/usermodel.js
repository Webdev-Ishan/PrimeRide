const mongoose= require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema= new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
        minLength:[3,"The firstname should be atleast 3 character long"],
    },

    
    lastname:{
        type:String,
        minLength:[3,"The lastname should be atleast 3 character long"],
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
        select:false
    },

    socketID:{
        type:String
    }


})

userSchema.methods.generateAuthtoken= ()=>{
    const token= jwt.sign({id:this_id}, process.env.JWT_key);
    return token;
}

userSchema.methods.comparepassword= async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashpassword= async function(password){
    return await bcrypt.hash(password , 10);
}

module.exports= mongoose.model('user', userSchema);
