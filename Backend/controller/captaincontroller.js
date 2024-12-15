const captainModel= require('../Models/captainmodel')
const captainservice= require('../Services/captainService')
const { validationResult } = require('express-validator');
const blacklisttoken= require('../Models/blacklist.model')
module.exports.registerCaptain= async (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() }); // Return 400 for validation errors
    }

   // console.log('Request Body:', req.body);

    const { fullname, email, password,vehicle } = req.body;

    const iscaptainalreadyexist= await captainModel.findOne({email});

if(iscaptainalreadyexist){
    return res.status(400).json({ message: 'Captain already exist' });
}
    try {
        // Handle fullname split if it's a single string
        
        
        // Hash password (ensure it's awaited if the function is asynchronous)
        const hashpassword = await captainModel.hashpassword(password);

        // Create user
        const captain = await captainservice.createCaptain({
            firstname:fullname.firstname,
            lastname:fullname.lastname,
            email,
            password: hashpassword,
            color:vehicle.color,
            capacity:vehicle.capacity,
            plate:vehicle.plate,
            vehicletype:vehicle.vehicletype
        });

    

        // Generate auth token (ensure method exists)
        const token = captain.generateAuthtoken();

        // Send response
        res.status(201).json({ token, captain });
    } catch (err) {
        console.error('Error during user registration:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



module.exports.loginCaptain= async (req,res,next)=>{

const error= validationResult(req);

if(!error.isEmpty()){
    return res.status(400).json({ errors: error.array() });
}

const {email,password} = req.body;

try {
    
    const captain= await captainModel.findOne({email:email}). select('+password');

    if(!captain){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const isexist= await captain.comparepassword(password);

    if(!isexist){
        res.status(401).json({ error: 'Either email or password is incorrect' });
    }



    const token =  captain.generateAuthtoken();
    res.cookie('token', token);

    res.status(201).json({ token, captain });
    
} catch (error) {

    console.error('Error during user registration:', error.message);
        res.status(500).json({ error: 'Either email or password is incorrect' });
}

}

module.exports.getCaptainprofile= async(req, res, next)=>{

    res.status(200).json(req.captain);
}

module.exports.logoutcaptain= async (req ,res,next)=>{
    res.clearCookie('token');
    const token = req.cookies.token || (req.headers.authorization?.split(' ')[1]);

    await blacklisttoken.create({token});
    res.status(200).json({message:"Logged out sucessfully!!"})
}