const express= require('express'); // require express..
const router= express.Router();
const captaincontroller= require('../controller/captaincontroller')
const {body}= require('express-validator')
const authmiddleware= require('../Middleware/authmiddleware')

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

    router.post('/login', [
        body('email').isEmail().withMessage("Invalid Email"),
        body('password').isLength({min:6}).withMessage("Password must be atleast 6 charcter long")
    
    ],
    captaincontroller.loginCaptain
    
    )

 router.get('/profile',authmiddleware.authcaptain,captaincontroller.getCaptainprofile)

router.get('/logout',authmiddleware.authcaptain, captaincontroller.logoutcaptain)

module.exports= router;