import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {logincaptain} from '../Features/captainSlice'
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Captainlogin = () => {
    
  const dispatch = useDispatch();
  const [email, setEmailState]= useState('');
  const [password, setPasswordState]= useState('');
  const navigate = useNavigate();
  const {loading, error} = useSelector((state)=> state.captain);



 const [navpara] = useTypewriter({
    words:['LUXURY','COMFORT','SAFETY','SECURITY','PRIVACY','FREEDOM'] ,
    loop: 0,
    typeSpeed: 200, // Faster typing speed
    deleteSpeed: 100, // Faster deleting speed
    delaySpeed: 500, // Shorter delay between words
  });


  const submithandeler= async (e)=>{
e.preventDefault();

const captaindata={
  email:email,
  password:password
}

setEmailState('')
setPasswordState('')

try {
  
const resultAction= await dispatch(logincaptain(captaindata))

if(resultAction.meta.requestStatus=== 'fulfilled'){
  navigate('/Captainhome')}
  else{
    console.log('Login failed: ', resultAction.payload)
  }

} catch (error) {
  console.log("Error during login: ", error)
}

  }
  return (
<div className="bg-black">
  <div className="text-white w-full h-screen flex justify-center items-center p-4">
    <p className="bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent font-light text-6xl  w-2/3 md:w-1/3 mr-4 hidden md:block">
      Enter the World of Rides and <span className='text-white font-normal'>{navpara}</span>
    </p>
    <form
      onSubmit={submithandeler}
      className="w-11/12 md:w-1/3 bg-gradient-to-b from-black to-gray-900 border-2 border-gray-700 p-5 rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-extrabold mb-4 text-center bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">
        Prime<span className="text-white">Ride</span>
      </h1>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-1 text-sm md:text-base font-medium bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmailState(e.target.value)}
          className="bg-black border border-gray-700 text-white text-sm md:text-base rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-1 text-sm md:text-base font-medium bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPasswordState(e.target.value)}
          className="bg-black border border-gray-700 text-white text-sm md:text-base rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-rose-500 to-fuchsia-400 font-normal rounded-md text-sm w-full px-4 py-2 mb-3 transition duration-300"
      >
        {loading ? "Logging in..." : "Sign in as Captain"}
      </button>

      <p className="text-center text-sm text-gray-400">
        Join the community? {""}
        <Link className="text-blue-600" to="/Captainsignup">
          Become a Captain
        </Link>
      </p>

      <Link
        to="/Userlogin"
        className="bg-gradient-to-r from-rose-500 to-fuchsia-400 font-normal rounded-md text-sm w-full px-4 py-2 mt-3 transition duration-300 flex justify-center items-center"
      >
        Sign in as User
      </Link>
    </form>
  </div>
</div>


  );

}

export default Captainlogin


