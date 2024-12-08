const express= require('express'); // require express..
const router= express.Router();
const usercontroller= require('../controller/usercontroller')

const {body}= require('express-validator')

router.post('/register',[

body('email').isEmail().withMessage("Invalid Email"),
body('fullname.firstname').isLength({min:3}).withMessage("Firstname should be ateast 3 character long"),
body('password').isLength({min:6}).withMessage("Password must be atleast 6 charcter long")


],
usercontroller.registerUser
)

module.exports= router;