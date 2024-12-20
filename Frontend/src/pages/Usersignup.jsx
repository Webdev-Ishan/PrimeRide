import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import background from '../assets/Usersignupbackground.jpg'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {setemail, setpassword,setfullname ,setuser,reset} from '../Features/userSlice'
import axios from 'axios';

const Usersignup = () => {
 const dispatch = useDispatch()
  const [email, setEmailState]= useState('');
  const [password, setPasswordState]= useState('');
 // const [userdata, setuserdata]= useState({});
  const [Firstname, setFirstname]= useState('');
  const [Lastname, setLastname]= useState('');
 const navigate= useNavigate();

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
    password:password
}

try {

  const response= await axios.post("http://localhost:4000/users/register",newUser);

  if(response.status===201){
    const data= response.data;
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
    <div className= ' bg-cover bg-center   '
    style={{ backgroundImage: `url(${background})` }}
  >
      
    
      <div className=' text-white w-full h-screen flex flex-col justify-around items-center'>
      <form  onSubmit={submithandeler} className="max-w-md w-full bg-slate-800 border-black border-b-4 border-2 p-6 rounded-lg shadow-lg ">
        <h1 className="text-4xl font-bold mb-6 text-center text-yellow-400">Prime<p className='text-black inline-block'>Ride . . .</p> </h1>


        <div className="mb-4 ">
          
          <label htmlFor="text" className="block mb-2 text-lg font-medium text-yellow-400">Your Name Please</label>
          <div className='flex gap-3 '>
          <input 
            type="text" 
            id="Firstname" 
            value={Firstname}
            onChange={(e)=>{
              setFirstname(e.target.value)
            }}
            className="bg-gray-700 border border-gray-600 text-white text-lg rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder="Enter Your FirstName" 
            required 
          />


          <input 
            type="text" 
            id="Lastname" 
            value={Lastname}
            onChange={(e)=>{
              setLastname(e.target.value)
            }}
            className="bg-gray-700 border border-gray-600 text-white text-lg rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder="Enter Your LastName" 
            required 
          />
</div>
        </div>





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
          className="text-white mb-5 bg-black hover:opacity-70 hover:border-yellow-400 border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full px-5 py-3 transition duration-200 ease-in-out"
        >
          SignUp as User
        </button>

<p className='text-center mb-3'>Already have an Account ?<Link className='text-blue-700' to={'/Userlogin'}> Login to Account</Link></p>
      <p className='text-white text-sm text-center hover:text-slate-300 '>
      © 2024 PrimeRide Technologies Inc.
      </p>

      </form>
      </div>

      
     
    </div>
  );
}

export default Usersignup
