const userModel = require('../Models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const captainModel = require('../Models/captainmodel');

const validateTokenAndBlacklist = async (token, blacklistModel) => {
  if (!token) {
    return { error: "Unauthorized", statusCode: 401 };
  }

  const isBlacklisted = await blacklistModel.findOne({ token });
  if (isBlacklisted) {
    return { error: "Unauthorized (Token Blacklisted)", statusCode: 401 };
  }

  return { success: true };
};

// Middleware for user authentication
module.exports.authuser = async (req, res, next) => {
  const token = req.cookies.token || (req.headers.authorization?.split(' ')[1]);

  try {
    const validation = await validateTokenAndBlacklist(token, userModel);
    if (!validation.success) {
      return res.status(validation.statusCode).json({ message: validation.error });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    if (!mongoose.Types.ObjectId.isValid(decoded._id)) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error during user authentication:", error.message);
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Middleware for captain authentication
module.exports.authcaptain = async (req, res, next) => {
  const token = req.cookies.token || (req.headers.authorization?.split(' ')[1]);

  try {
    const validation = await validateTokenAndBlacklist(token, captainModel);
    if (!validation.success) {
      return res.status(validation.statusCode).json({ message: validation.error });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    if (!mongoose.Types.ObjectId.isValid(decoded._id)) {
      return res.status(400).json({ message: "Invalid Captain ID" });
    }

    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(404).json({ message: "Captain not found" });
    }

    req.captain = captain;
    next();
  } catch (error) {
    console.error("Error during captain authentication:", error.message);
    res.status(401).json({ message: "Unauthorized" });
  }
};
