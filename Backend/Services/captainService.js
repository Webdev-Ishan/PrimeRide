const captainModel= require('../Models/captainmodel')

module.exports.createCaptain= async({
    firstname, lastname, email, password,
    color, capacity, vehicletype, plate

}) => {

if(!firstname ||  !email || !password || !color || !capacity || !plate || !vehicletype){
    throw new Error("All these informations are compulsory to fill")
}

const captain = captainModel.create({
    fullname:{
        firstname,
        lastname
    },
    email,
    password,
    vehicle:{
        color,
        plate,
        vehicletype,
        capacity
    }
})

return captain;


}