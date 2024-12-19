import React from 'react';
import background from '../assets/loginbackground.jpg'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {setemail, setpassword} from '../Features/userSlice'

const Userlogin = () => {
const dispatch= useDispatch()
  const [email, setEmailState]= useState('');
  const [password, setPasswordState]= useState('');
  const [userdata, setuserdata]= useState({})

  const submithandeler=(e)=>{
e.preventDefault();

dispatch(setemail(email));
dispatch(setpassword(password));
 
setuserdata({
  email:email,
  password:password
})

setEmailState('')
setPasswordState('')

  }
  return (
    <div className= ' bg-cover bg-center '
    style={{ backgroundImage: `url(${background})` }}
  >
      
    
      <div className=' text-white w-full h-screen flex flex-col justify-around items-center'>
      <h1 className='text-4xl text-white  font-bold'>Signin/Signup</h1>
      <form  onSubmit={submithandeler} className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg ">
        <h1 className="text-4xl font-bold mb-6 text-center text-yellow-300">Prime<p className='text-orange-700 inline-block'>Ride . . .</p> </h1>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-lg font-medium">Your Email</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e)=>{
              setEmailState(e.target.value)
            }}
            className="bg-gray-700 border border-gray-600 text-white text-lg rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder="Enter registered email" 
            required 
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-lg font-medium">Your Password</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e)=>{
              setPasswordState(e.target.value)
            }}
            className="bg-gray-700 border border-gray-600 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            required 
            placeholder='Password'
          />
        </div>

        <div className="flex items-start mb-5">
          {/* You can add a checkbox for "Remember me" or other options here if needed */}
        </div>

        <button 
          type="submit" 
          className="text-white mb-5 bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full px-5 py-3 transition duration-200 ease-in-out"
        >
          Signin as User
        </button>

<p className='text-center mb-3'>New Rider? <Link className='text-blue-600' to={'/Usersignup'}> Create New Account</Link></p>
        <Link 
        to={'/Captainlogin'}
          type="submit" 
          className="text-black flex justify-center items-center bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full px-5 py-3 transition duration-200 ease-in-out"
        >
          Sign in as Captain
        </Link>

      </form>
      </div>

      
     
    </div>
  );
}

export default Userlogin;