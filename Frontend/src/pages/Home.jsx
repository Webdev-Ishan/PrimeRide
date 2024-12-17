import React from 'react'
import logo from '../assets/Ride.png'
import { Link } from 'react-router-dom'
import bg from '../assets/homebackground.jpg'
const Home = () => {
  return (
    <div>
      <div className='w-full  bg-cover bg-center pt-8 h-screen bg-blue-900 flex justify-between flex-col '
      
      style={{ backgroundImage: `url(${bg})` }}
      >
         <div className='flex flex-col p-3'>
          <img className='w-12 h-12 rounded-3xl  border-4 border-black ' src={logo} alt="loading.." />
          <div className='text-white hover:text-black text-3xl font-bold mt-2 hover:text- duration-300'>PrimeRide</div>
        </div>

        <div className='bg-gradient-to-r from-purple-400 to-indigo-600 py-4 px-4 pb-7'>
          <h2 className='text-black text-2xl font-bold'>Get going with PrimeRide</h2>
          <Link to={'/Userlogin'} className='w-full flex items-center justify-center bg-black text-white text-3xl py-3 rounded-lg mt-5  hover:text-yellow-300  duration-300 '>Continue The Ride . . . .</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Home
