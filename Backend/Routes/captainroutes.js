const express = require('express'); // require express..
const router = express.Router();
const captaincontroller = require('../controller/captaincontroller');
const { body } = require('express-validator');
const authmiddleware = require('../Middleware/authmiddleware');

// Validation for registering a captain
router.post('/register', [
  body('email').isEmail().withMessage("Invalid Email"),
  body('fullname.firstname').isLength({ min: 3 }).withMessage("Firstname should be at least 3 characters long"),
  body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters'),
  body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters'),
  body('vehicle.capacity').isLength({ min: 1 }).withMessage('Capacity must be at least 1'),
  body('vehicle.vehicletype').isIn(['car', 'bike', 'auto']).withMessage('Invalid vehicle type')
], captaincontroller.registerCaptain);




router.post('/login', [
  body('email').isEmail().withMessage("Invalid Email"),
  body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
], captaincontroller.loginCaptain);



router.get('/profile', authmiddleware.authcaptain, captaincontroller.getCaptainprofile);

router.post('/logout', authmiddleware.authcaptain, captaincontroller.logoutcaptain);

module.exports = router;