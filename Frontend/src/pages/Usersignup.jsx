import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import background from '../assets/Usersignupbackground.jpg'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {setemail, setpassword,setfullname ,setuser,reset} from '../Features/userSlice'
import axios from 'axios';
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Usersignup = () => {
 const dispatch = useDispatch()
  const [email, setEmailState]= useState('');
  const [password, setPasswordState]= useState('');
 const [userdata, setuserdata]= useState({});
  const [Firstname, setFirstname]= useState('');
  const [Lastname, setLastname]= useState('');
 const navigate= useNavigate();

 const [navpara] = useTypewriter({
    words:['LUXURY','COMFORT','SAFETY','SECURITY','PRIVACY','FREEDOM'] ,
    loop: 0,
    typeSpeed: 200, // Faster typing speed
    deleteSpeed: 100, // Faster deleting speed
    delaySpeed: 500, // Shorter delay between words
  });

  const submithandeler= async (e)=>{
e.preventDefault();

dispatch(setemail(email));
dispatch(setpassword(password));
dispatch(setfullname({firstname:Firstname,lastname:Lastname}));

const newUser={
  fullname:{
    firstname:Firstname,
    lastname:Lastname
  },
    email:email,
    password:password,
    isloggedin:true
}

try {

  const response= await axios.post(`${import.meta.env.VITE_Base_URL}/users/register`,newUser);

  if(response.status===201){
    const data= response.data;
  localStorage.setItem('token', response.data.token);
   dispatch(setuser(data));
   navigate('/Home')
  
  }
} catch (error) {
  console.log(error)
}



dispatch(reset());

setEmailState('')
setPasswordState('')
setFirstname('')
setLastname('')


  }
  return (
    <div
    className="bg-cover bg-center bg-black"
  >
    <div className="text-white w-full h-screen flex justify-center items-center p-4">
      <p className="bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent font-light text-5xl  w-2/3 md:w-1/3 mr-4 hidden md:block">
     BECOME A USER AND FEEL THE JOY OF RIDING WITH <span className='text-white font-normal'>{navpara}</span>  <Cursor className="text-white" cursorStyle="|" />
      </p>
      <form
        onSubmit={submithandeler}
        className="w-11/12 md:w-1/3 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg border-2 border-b-4 border-white p-4 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">
          Prime
          <p className="text-white inline-block">Ride . . .</p>
        </h1>
  
        <div className="mb-3">
          <label
            htmlFor="text"
            className="block mb-1 text-sm md:text-base font-medium bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent"
          >
            Your Name Please
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="Firstname"
              value={Firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className="bg-gray-800 border border-gray-700 text-white text-sm md:text-base rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="Lastname"
              value={Lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              className="bg-gray-800 border border-gray-700 text-white text-sm md:text-base rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
  
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block mb-1 text-sm md:text-base font-medium bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmailState(e.target.value);
            }}
            className="bg-gray-800 border border-gray-700 text-white text-sm md:text-base rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2"
            placeholder="Enter Your Email"
            required
          />
        </div>
  
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block mb-1 text-sm md:text-base font-medium bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent"
          >
            Your Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPasswordState(e.target.value);
            }}
            className="bg-gray-800 border border-gray-700 text-white text-sm md:text-base rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2"
            placeholder="Enter Your Password"
            required
          />
        </div>
  
        <button
          type="submit"
          className="text-white bg-black hover:bg-gray-800 hover:border-fuchsia-400 border-2 focus:ring-4 focus:outline-none focus:ring-fuchsia-500 font-medium rounded-lg text-sm w-full px-4 py-2 transition duration-200 ease-in-out"
        >
          SignUp as User
        </button>
  
        <p className="text-center mt-3 text-xs text-gray-400">
          Already have an Account?
          <Link
            className="text-blue-600 px-2 py-1 rounded-lg "
            to={"/Userlogin"}
          >
            Login to Account
          </Link>
        </p>
        <p className="text-gray-400 text-xs text-center hover:text-gray-300 mt-2">
          © 2024 PrimeRide Technologies Inc.
        </p>
      </form>
    </div>
  </div>
  
  
  );
}

export default Usersignup
