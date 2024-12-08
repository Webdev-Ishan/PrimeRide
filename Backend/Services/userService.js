const userModel= require('../Models/usermodel')

module.exports.createUser= async({
    firstname, lastname, email, password

}) => {

if(!firstname ||  !email || !password){
    throw new Error("All these informations are compulsory to fill")
}

const user = userModel.create({
    fullname:{
        firstname,
        lastname
    },
    email,
    password
})

return user;


}