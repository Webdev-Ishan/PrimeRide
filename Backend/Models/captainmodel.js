const mongoose= require('mongoose');
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')



const captainSchema= new mongoose.Schema({

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
        },

        status:{
            type:String,
            enum:['active','inactive'],
            default:'inactive'
        },
        vehicle:{

            color:{
                type:String,
                required:true,
                minLength:[3,"color should be atleast 3 charcter"]
            },

            plate:{
                type:String,
                required:true,
                minLength:[3,"plate should be atleast 3 charcter"]

            },

            capacity:{
                type:Number,
                required:true,
                minLength:[1,"color should be atleast 1"]
            },

            vehicletype:{
                type:String,
                required:true,
                enum:['car', 'bike', 'auto']
            }
        },

    location:{
lat:{
    type:Number
},

long:{
    type:Number
}

    }    
    
})

// some methods for it
captainSchema.methods.generateAuthtoken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_key,{expiresIn:'24h'}); // from .env
    return token;
}

// compare password for login
captainSchema.methods.comparepassword= async function(password){
    return await bcrypt.compare(password,this.password);
}

// hashing the password for not directly storing it unprotected
captainSchema.statics.hashpassword= async function(password){
    return await bcrypt.hash(password , 10);
}


module.exports= mongoose.model('captain',captainSchema);