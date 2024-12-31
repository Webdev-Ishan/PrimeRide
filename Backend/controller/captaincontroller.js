const captainModel = require('../Models/captainmodel');
const captainservice = require('../Services/captainService');
const { validationResult } = require('express-validator');
const blacklisttoken = require('../Models/blacklist.model');

module.exports.registerCaptain = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const iscaptainalreadyexist = await captainModel.findOne({ email });

  if (iscaptainalreadyexist) {
    return res.status(400).json({ message: 'Captain already exists' });
  }

  try {
    const hashpassword = await captainModel.hashpassword(password);

    const captain = await captainservice.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashpassword,
      color: vehicle.color,
      capacity: vehicle.capacity,
      plate: vehicle.plate,
      vehicletype: vehicle.vehicletype
    });

    const token = captain.generateAuthtoken();

    res.status(201).json({ token, captain });
  } catch (err) {
    console.error('Error during captain registration:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const captain = await captainModel.findOne({ email }).select('+password');

    if (!captain) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await captain.comparepassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = captain.generateAuthtoken();
    res.cookie('token', token);
    res.status(200).json({ token, captain });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.getCaptainprofile = async (req, res, next) => {
  res.status(200).json(req.captain);
};

module.exports.logoutcaptain = async (req, res, next) => {
  res.clearCookie('token');
  const token = req.cookies.token || (req.headers.authorization?.split(' ')[1]);

  try {
    await blacklisttoken.create({ token });
    res.status(200).json({ message: "Logged out successfully!!" });
  } catch (error) {
    console.error('Error during logout:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};