const userModel = require('../Models/usermodel'); // Acquire the user model
const userService = require('../Services/userService');
const { validationResult } = require('express-validator');
const blacklisttoken = require('../Models/blacklist.model');

module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  const { fullname, email, password } = req.body;
  const ifuseralreadyexist = await userModel.findOne({ email });
  if (ifuseralreadyexist) {
    return res.status(400).json({ message: "User already exists" });
  }

  try {
    const hashpassword = await userModel.hashpassword(password);

    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashpassword,
    });

    const token = user.generateAuthtoken();

    res.status(201).json({ token, user });
  } catch (err) {
    console.error('Error during user registration:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.loginuser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await user.comparepassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = user.generateAuthtoken();
    res.status(200).json({ token, user });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.getuserprofile = async (req, res, next) => {
  res.status(200).json(req.user);
};

module.exports.logoutuser = async (req, res, next) => {
  const token = req.cookies.token || (req.headers.authorization?.split(' ')[1]);

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    // Add the token to the blacklist database
    await blacklisttoken.create({ token });

    // Clear the token from cookies
    res.clearCookie('token', { httpOnly: true, secure: true });

    return res.status(200).json({ message: "Logged out successfully!!" });
  } catch (error) {
    console.error('Error during logout:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
