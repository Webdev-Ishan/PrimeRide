const express= require('express'); // require express..
const router= express.Router();
const usercontroller= require('../controller/usercontroller')
const authmiddleware= require('../Middleware/authmiddleware')

const {body}= require('express-validator')

router.post('/register',[

body('email').isEmail().withMessage("Invalid Email"),
body('fullname.firstname').isLength({min:3}).withMessage("Firstname should be ateast 3 character long"),
body('password').isLength({min:6}).withMessage("Password must be atleast 6 charcter long")


],
usercontroller.registerUser
)


router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 charcter long")

],
usercontroller.loginuser

)



router.get('/profile',authmiddleware.authuser, usercontroller.getuserprofile)

module.exports= router;