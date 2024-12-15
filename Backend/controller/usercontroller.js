const userModel = require('../Models/usermodel'); // Acquire the user model
const userService = require('../Services/userService');
const { validationResult } = require('express-validator');
const blacklisttoken= require('../Models/blacklist.model')


module.exports.registerUser = async (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() }); // Return 400 for validation errors
    }

   // console.log('Request Body:', req.body);

    const { fullname, email, password } = req.body;
    const ifuseralreadyexist= await userModel.findOne({email});
    if(ifuseralreadyexist){
        return res.status(400).json({ message: "User already exist" });
    }

    try {
        // Handle fullname split if it's a single string
        
        
        // Hash password (ensure it's awaited if the function is asynchronous)
        const hashpassword = await userModel.hashpassword(password);

        // Create user
        const user = await userService.createUser({
            firstname:fullname.firstname,
            lastname:fullname.lastname,
            email,
            password: hashpassword,
        });

        console.log('User Created:', user);

        // Generate auth token (ensure method exists)
        const token = user.generateAuthtoken();

        // Send response
        res.status(201).json({ token, user });
    } catch (err) {
        console.error('Error during user registration:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




module.exports.loginuser = async(req, res , next) =>{
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() }); // Return 400 for validation errors
    }

   // console.log('Request Body:', req.body);

    const { email, password } = req.body;


try {


    const user= await userModel.findOne({email:email}). select('+password');

    if(!user){
        res.status(401).json({ error: 'Either email or password is incorrect' });
    }
    
    const ismatch= await user.comparepassword(password);


    
    if(!ismatch){
        res.status(401).json({ error: 'Either email or password is incorrect' });
    }


  // Generate auth token (ensure method exists)
  const token = user.generateAuthtoken();
  
  res.cookies('token', token);

  // Send response
  res.status(201).json({ token, user });



} catch (error) {
     console.error('Error during user registration:', error.message);
        res.status(500).json({ error: 'Either email or password is incorrect' });
}


}


module.exports.getuserprofile= async (req, res, next)=>{

// but we want to ensure that the data of profile will only visible to the person who is
// currently logged in and not to someone else so we will set up a middle ware in the
// middleware folders
res.status(200).json(req.user);


}

module.exports.logoutuser= async (req, res,next)=>{


    res.clearCookie('token');
    const token = req.cookies.token || (req.headers.authorization?.split(' ')[1]);

    await blacklisttoken.create({token});
    res.status(200).json({message:"Logged out sucessfully!!"})
}