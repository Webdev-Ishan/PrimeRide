import React from 'react'
import logo from '../assets/Ride.png'
import { Link } from 'react-router-dom'
import bg from '../assets/homebackground.jpg'
import start from '../assets/startlogo.webp'
const Start = () => {
  return (
    <div>
      <div className='w-full border-b-black border-b-2 bg-cover bg-center pt-8 h-screen  flex justify-between flex-col '
      
      style={{ backgroundImage: `url(${bg})` }}
      >
         <div className='flex flex-col p-3'>
          <img className='w-12 h-12 rounded-3xl  border-4 border-black ' src={logo} alt="loading.." />
          <div className='text-white hover:text-black text-3xl font-bold mt-2 hover:text- duration-300'>PrimeRide</div>
          <div className='text-white text-center text-6xl hover:text-black font-bold mt-2 hover:text- duration-300'>RIDE  
            
            <span className='text-black hover:text-white duration-300'> WITH US</span> RIDE 
             <span className='text-black duration-300 hover:text-white'> WITH</span> STYLE</div>
        </div>

        <div className='bg-gradient-to-r border-4 border-black from-purple-400 to-indigo-600 py-4 px-4 pb-5'>
          <h2 className='text-black text-2xl font-bold'>Get going with PrimeRide</h2>
          <Link to={'/Userlogin'} className='w-full flex font-bold items-center justify-center bg-black text-white text-3xl py-3 rounded-lg mt-5  hover:text-yellow-300  duration-300 '>
          
          <img className='w-8 h-8 rounded-3xl border-2 border-yellow-400 mr-4' src={start} alt="loading.." /> Continue The Ride . . . .</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Start
