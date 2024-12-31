import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from '../Features/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import background from '../assets/loginbackground.jpg';

const Userlogin = () => {
  const dispatch = useDispatch();
  const [email, setEmailState] = useState('');
  const [password, setPasswordState] = useState('');
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

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
    <div className='bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
      <div className='text-white w-full h-screen flex flex-col justify-around items-center'>
        <h1 className='text-4xl text-white font-bold'>Signin/Signup</h1>
        <form onSubmit={submithandeler} className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-yellow-300">Prime<p className='text-orange-700 inline-block'>Ride . . .</p></h1>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-lg font-medium">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmailState(e.target.value)}
              className="bg-gray-700 border border-gray-600 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              onChange={(e) => setPasswordState(e.target.value)}
              className="bg-gray-700 border border-gray-600 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              placeholder='Password'
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="text-white mb-5 bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full px-5 py-3 transition duration-200 ease-in-out"
          >
            {loading ? 'Logging in...' : 'Sign in as User'}
          </button>

          {error && <p className="text-red-500">{error}</p>}

          <p className='text-center mb-3'>New Rider? <Link className='text-blue-600' to={'/Usersignup'}> Create New Account</Link></p>
          <Link
            to={'/Captainlogin'}
            className="text-black flex justify-center items-center bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full px-5 py-3 transition duration-200 ease-in-out"
          >
            Sign in as Captain
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Userlogin;