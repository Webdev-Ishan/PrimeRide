import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setemail, setpassword, setfullname, setcaptain, reset, setvehcile } from '../Features/captainSlice';
import axios from 'axios';
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Captainsignup = () => {
  const dispatch = useDispatch();
  const [email, setEmailState] = useState('');
  const [password, setPasswordState] = useState('');
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Color, setColor] = useState('');
  const [Capacity, setCapacity] = useState('');
  const [Plate, setPlate] = useState('');
  const [Vehicletype, setVehicletype] = useState('');
  const navigate = useNavigate();

const [navpara] = useTypewriter({
    words:['WAY','ROAD','RIDE','JOURNEY','DESTINATION','DIRECTION'] ,
    loop: 0,
    typeSpeed: 200, // Faster typing speed
    deleteSpeed: 100, // Faster deleting speed
    delaySpeed: 500, // Shorter delay between words
  });


  const submithandeler = async (e) => {
    e.preventDefault();

    dispatch(setemail(email));
    dispatch(setpassword(password));
    dispatch(setfullname({ firstname: Firstname, lastname: Lastname }));
    dispatch(setvehcile({ color: Color, capacity: Capacity, plate: Plate, vehicletype: Vehicletype }));

    const newcaptain = {
      fullname: {
        firstname: Firstname,
        lastname: Lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: Color,
        capacity: Capacity,
        plate: Plate,
        vehicletype: Vehicletype
      },
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_Base_URL}/captains/register`, newcaptain);

      if (response.status === 201) {
        const data = response.data;
        localStorage.setItem('token', data.token); // Store token in local storage
        dispatch(setcaptain(data)); // Dispatch action to set captain data in Redux state
        //console.log(data);
        navigate('/CaptainHome'); // Navigate to Home page on successful registration
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }

    dispatch(reset()); // Reset Redux state
    setEmailState(''); // Clear email input field
    setPasswordState(''); // Clear password input field
    setFirstname(''); // Clear firstname input field
    setLastname(''); // Clear lastname input field
    setColor(''); // Clear color input field
    setCapacity(''); // Clear capacity input field
    setPlate(''); // Clear plate input field
    setVehicletype(''); // Clear vehicletype input field
  };

  return (
<div className='bg-cover bg-center p-10 bg-black'>
  <div className='text-white w-full h-screen flex justify-center items-center p-4'>
    <p className='bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent font-light duration-300 text-4xl w-3/4 sm:w-1/2 mr-10 hidden sm:block'>
       A CAPTAIN LEADS THE <span className='text-white font-normal'>{navpara}</span>
    </p>
    <form
      onSubmit={submithandeler}
      className="max-w-xs sm:max-w-sm w-full bg-gray-950 border-white border-b-4 border-2 pl-4 pr-4 pt-2 pb-2 rounded-lg shadow-lg mt-6 mb-6"
    >
      <h1 className="text-2xl  mb-3 text-center bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent font-bold">
        Prime<p className=' inline-block'>Ride . . .</p>
      </h1>

      <div className="mb-3">
        <label htmlFor="text" className="block mb-1 text-sm bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent  font-medium">
          Your Name Please
        </label>
        <div className='flex gap-2'>
          <input
            type="text"
            id="Firstname"
            value={Firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2"
            placeholder="Enter Your FirstName"
            required
          />
          <input
            type="text"
            id="Lastname"
            value={Lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2"
            placeholder="Enter Your LastName"
            required
          />
        </div>
      </div>

      <label htmlFor="text" className="block text-sm bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent  font-medium">
        Your Vehicle Details Please
      </label>
      <div className='flex gap-2'>
        <input
          type="text"
          id="Color"
          value={Color}
          onChange={(e) => setColor(e.target.value)}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2"
          placeholder="Enter Color of vehicle"
          required
        />
        <select
          id="vehicletype"
          value={Vehicletype}
          onChange={(e) => setVehicletype(e.target.value)}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          required
        >
          <option value="" disabled>Select Vehicle</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="auto">Auto</option>
        </select>
      </div>

      <div className='flex gap-2 mt-4'>
        <input
          type="number"
          id="Capacity"
          value={Capacity}
          onChange={(e) => setCapacity(e.target.value)}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2"
          placeholder="Enter Capacity"
          required
        />
        <input
          type="number"
          id="plate"
          value={Plate}
          onChange={(e) => setPlate(e.target.value)}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          placeholder="Plate No."
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="block mb-1 text-sm font-medium bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent ">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmailState(e.target.value)}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          placeholder="Enter registered email"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="block mb-1 text-sm font-medium bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent ">
          Your Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPasswordState(e.target.value)}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          required
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-rose-500 to-fuchsia-400 hover:text-black border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-4 py-2 transition duration-200 ease-in-out"
      >
        SignUp as Captain
      </button>

      <p className='text-center mb-2'>
        Already have an Account? 
        <Link className='text-blue-700' to={'/Captainlogin'}>Login to Account</Link>
      </p>
      <p className='text-yellow-400 text-xs text-center hover:text-yellow-300'>
        © 2024 PrimeRide Technologies Inc.
      </p>
    </form>
  </div>
</div>


  );
};

export default Captainsignup;