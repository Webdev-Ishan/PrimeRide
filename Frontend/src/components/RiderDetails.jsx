import React from 'react';
import vehcile from '../assets/Homelogo.jpg'
import {Link} from 'react-router-dom'

function RiderDetails() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center py-12">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-green-500">
            Meet your driver: <span className="bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">John Doe</span>
          </h1>
          <p className="mt-3 text-lg text-gray-700 dark:text-neutral-400">
            A professional driver dedicated to providing a safe and reliable ride.
          </p>
        </div>

        {/* Driver Info Section */}
        <div className="mt-10 ml-44 grid md:grid-cols-2 gap-8">
          {/* Driver's Profile Picture & Basic Info */}
          <div className="flex justify-center md:justify-start items-center">
            <img
              src="https://imgs.search.brave.com/KgKSH2ZqmrTP9Lkv7H5PDVhOnZC_Vw9N6EPJXZHhKto/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/MzUwMjMxMy9waG90/by9wb3J0cmFpdC1v/Zi1hLW1hdHVyZS1t/YWxlLWRyaXZlci1p/bi10aGUtY2FyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1s/b2QzeUFqNVNjcl9Q/UjJFbVJlczQydTlk/b0YyQUlud0xpd1F3/Z19wNTZjPQ"
              alt="Driver Profile"
              className="rounded-full w-48 h-48 hover:border-green-600 duration-300 border-4 border-blue-600"
            />
            <div className="ml-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">John Doe</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">Driver | PrimeRide</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">Experience: 5 years</p>
            </div>
          </div>

          {/* Driver Details */}
          <div>
            <h3 className="text-3xl mb-3 font-semibold bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">Vehicle Details</h3>
            <img className='w-40 h-20 mb-5 border-2 border-green-600 hover:opacity-70 duration-300 rounded-lg' src={vehcile} alt="" />
            <ul className="mt-4 text-lg font-light text-gray-600 dark:text-neutral-400">
              <li>Vehicle Model: Toyota Prius</li>
              <li>License Plate: ABC1234</li>
              <li>Year: 2020</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <Link
            to={'/Home'}
            className="py-3 px-6 hover:opacity-75 duration-300 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-gradient-to-r from-rose-500 to-fuchsia-400 text-white focus:outline-none"
          >
            Back To Home
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
          <Link
            to={'/Getgoing'}
            className="py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border bg-white text-gray-800 hover:bg-gray-100 focus:outline-none"
          >
            Continue
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Driver Ratings</h3>
          <div className="mt-4 flex justify-center items-center gap-x-2">
            {/* Star Rating */}
            <svg className="text-yellow-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.688 3.75 1.125-6.563L.75 6.25l6.75-.563L10 0l2.813 5.125 6.75.563-4.687 6.937 1.125 6.563L10 15z" />
            </svg>
            <svg className="text-yellow-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.688 3.75 1.125-6.563L.75 6.25l6.75-.563L10 0l2.813 5.125 6.75.563-4.687 6.937 1.125 6.563L10 15z" />
            </svg>
            <svg className="text-yellow-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.688 3.75 1.125-6.563L.75 6.25l6.75-.563L10 0l2.813 5.125 6.75.563-4.687 6.937 1.125 6.563L10 15z" />
            </svg>
            <svg className="text-yellow-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.688 3.75 1.125-6.563L.75 6.25l6.75-.563L10 0l2.813 5.125 6.75.563-4.687 6.937 1.125 6.563L10 15z" />
            </svg>
            <svg className="text-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.688 3.75 1.125-6.563L.75 6.25l6.75-.563L10 0l2.813 5.125 6.75.563-4.687 6.937 1.125 6.563L10 15z" />
            </svg>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            4.6 / 5 from 12,000 reviews
          </p>
        </div>
      </div>
    </div>
  );
}

export default RiderDetails;
