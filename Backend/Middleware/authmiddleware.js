const userModel = require('../Models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

module.exports.authuser = async (req, res, next) => {
    // Extract the token from cookies or authorization header
    const token = req.cookies.token || (req.headers.authorization?.split(' ')[1]);
    console.log("Token:", token);

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isblacklisted= await userModel.findOne({token:token});
    if(isblacklisted){
        return res.status(400).json({message:'Unauthorised'})
    }

    try {
        // Verify the token
        const decode = jwt.verify(token, process.env.JWT_key);
        console.log("Decoded Token:", decode);

        // Validate the ObjectId
        if (!mongoose.Types.ObjectId.isValid(decode._id)) {
            return res.status(400).json({ message: "Invalid User ID" });
        }

        // Query the database to find the user
        const user = await userModel.findById(decode._id);
        console.log("User Found:", user);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Attach the user to the request object
        req.user = user;

        // Proceed to the next middleware
        return next();
    } catch (error) {
        console.error("Error during authentication:", error.message);
        return res.status(401).json({ message: "Unauthorized" });
    }
};
