const express= require('express'); // require express..
const router= express.Router();
const captaincontroller= require('../controller/captaincontroller')
const {body}= require('express-validator')

router.post('/register',[

    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("Firstname should be ateast 3 character long"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 charcter long"),
    body('vehicle.color').isLength({min:3}).withMessage('color must be atleast 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be atleast 3 characters'),
    body('vehicle.capacity').isLength({min:1}).withMessage('capacity must be atleast 1 '),
    body('vehicle.vehicletype').isIn(['car','bike','auto']).withMessage('Invalid vehicle type')
    ],
    captaincontroller.registerCaptain
    )


module.exports= router;