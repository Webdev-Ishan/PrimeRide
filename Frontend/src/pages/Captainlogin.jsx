import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import background from '../assets/captainbackground.jpg'
import {useDispatch} from 'react-redux'
import {setemail, setpassword} from '../Features/userSlice'
const Captainlogin = () => {
    
  const dispatch = useDispatch();
  const [email, setEmailState]= useState('');
  const [password, setPasswordState]= useState('');
  const [captaindata, setcaptaindata]= useState({})

  const submithandeler=(e)=>{
e.preventDefault();

dispatch(setemail(email));
dispatch(setpassword(password));

setcaptaindata({
  email:email,
  password:password
})


setEmailState('')
setPasswordState('')

  }
  return (
    <div className= 'bg-cover bg-center'
    style={{ backgroundImage: `url(${background})` }}
    
  >
      
    
      <div className=' text-white w-full h-screen flex flex-col justify-around items-center'>
      <h1 className='text-5xl text-orange-500  font-bold'>Signin/Signup</h1>
      <form  onSubmit={submithandeler} className="max-w-md w-full border-2 border-white bg-gradient-to-r from-slate-800 to-zinc-500 p-6 rounded-lg shadow-lg ">
        <h1 className="text-4xl font-bold mb-6 text-center text-orange-500">Prime<p className='text-white inline-block'>Ride . . .</p> </h1>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg font-medium text-yellow-400">Your Email</label>
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

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-lg font-medium text-yellow-400">Your Password</label>
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
          className="text-black mb-3 border-2 bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full px-5 py-3 transition duration-200 ease-in-out"
        >
          Signin as Captain
        </button>

<p className='text-center mb-4'>Join the Batalian? <Link className='text-blue-600' to={'/Captainsignup'}> Became a Captain</Link></p>
        <Link 
        to={'/Userlogin'}
          type="submit" 
          className="text-white mb-5 bg-gradient-to-r border-2 hover:border-orange-500 from-fuchsia-600 to-blue-500 flex justify-center items-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full px-5 py-3 transition duration-200 ease-in-out"
        >
          Sign in as User
        </Link>

      </form>
      </div>

      
     
    </div>
  );

}

export default Captainlogin


