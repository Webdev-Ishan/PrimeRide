import React, { useEffect } from 'react'
import logo from '../assets/Ride.png'
import { Link } from 'react-router-dom'
import taxi from '../assets/taxi.png'
import start from '../assets/startlogo.webp'
import {gsap} from 'gsap'

const Start = () => {

  


  return (
    <div>
      <div className='w-full border-black border-2 bg-cover bg-center pt-8 h-screen  flex justify-between flex-col '
      
       style={{ 
            backgroundImage: `url(${taxi})`, 
          }}
      >
         <div className='flex flex-col p-3'>
          <img className='w-12 h-12 rounded-3xl  border-4 border-rose-800 ' src={logo} alt="loading.." />
          <div className='bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent text-3xl font-light mt-2 hover:text- duration-300'>PrimeRide</div>
          <div  style={{ WebkitTextStroke: "3px black" }} className='bg-gradient-to-r  from-rose-500 to-fuchsia-400 bg-clip-text text-transparent text-center text-6xl  font-bold mt-2 duration-200' id='headline'>RIDE WITH US RIDE WITH STYLE</div>
          
        </div>

        <div className='text-white bg-gradient-to-r from-rose-500 to-fuchsia-600 border-4 border-black py-4 px-4 pb-5'>
          <h2 className='text-black text-2xl font-bold'>Get going with PrimeRide</h2>
          <Link to={'/Userlogin'} className='w-full flex font-light items-center justify-center bg-black text-white text-3xl py-3 rounded-lg mt-5  hover:text-pink-600  duration-300 '>
          
          <img className='w-8 h-8 rounded-3xl border-2 border-yellow-400  mr-4' src={start} alt="loading.." /> Continue The Ride . . . .</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Start;
