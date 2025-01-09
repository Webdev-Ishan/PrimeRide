import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from '../Features/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import taxi from '../assets/taxi.png'
const Userlogin = () => {
  const dispatch = useDispatch();
  const [email, setEmailState] = useState('');
  const [password, setPasswordState] = useState('');
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);


const [navpara] = useTypewriter({
    words:['Enter the PrimeRide..','Enjoy the PrimeRide..','PrimeRide is the Best..','PrimeRide is the Fastest..','PrimeRide is the Safest...'] ,
    loop: 0,
    typeSpeed: 100, // Faster typing speed
    deleteSpeed: 50, // Faster deleting speed
    delaySpeed: 300, // Shorter delay between words
  });


  const submithandeler = async (e) => {
    e.preventDefault();

    const userdata = {
      email: email,
      password: password,
    };

    try {
      const resultAction = await dispatch(loginuser(userdata));
      if (resultAction.meta.requestStatus === 'fulfilled') {
        navigate('/Home');
      } else {
        console.error('Login failed:', resultAction.payload);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='bg-cover border-4 border-black  bg-center w-full  pt-8 min-h-screen flex items-center justify-center ' 
    
    style={{ 
      backgroundImage: `url(${taxi})`, 
    }}
  >
    <div className='w-full max-w-4xl p-6  bg-opacity-75 rounded-lg shadow-lg flex flex-col md:flex-row md:gap-5 justify-between items-center'>
    <h1 className=' text-light text-5xl bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent font-mono'>{navpara}</h1>
    <form onSubmit={submithandeler} className="max-w-sm w-10/12 bg-gray-900 border-2 border-white p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">
        Prime
        <p className='inline-block text-white font-mono'>Ride . . .</p>
      </h1>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-400">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmailState(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2"
          placeholder="Enter registered email"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-400">Your Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPasswordState(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2"
          required
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mb-4  bg-gradient-to-r from-rose-500 to-fuchsia-400 text-white  text-transparent focus:ring-4 focus:outline-none focus:ring-fuchsia-500 font-light rounded-lg text-sm w-full px-4 py-2 transition duration-200 ease-in-out"
      >
        {loading ? 'Logging in...' : 'Sign in as User'}
      </button>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <p className='text-center mb-2 text-sm text-gray-400'>
        New Rider? <Link className='text-blue-600 px-2 py-1 rounded-lg ' to={'/Usersignup'}>Create New Account</Link>
      </p>
      <Link
        to={'/Captainlogin'}
        className="flex justify-center border-2 border-white items-center bg-black hover:bg-slate-800 text-white focus:ring-4 focus:outline-none focus:ring-fuchsia-500 font-light rounded-lg text-sm w-full px-4 py-2 transition duration-200 ease-in-out"
      >
        Sign in as Captain
      </Link>
    </form>
  </div>
</div>

  
  );
};

export default Userlogin;