const captainModel= require('../Models/captainmodel')
const captainservice= require('../Services/captainService')
const { validationResult } = require('express-validator');

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