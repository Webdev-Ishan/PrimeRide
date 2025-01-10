import React from 'react';
import logo from '../assets/Ride.png';
import bg from '../assets/Homebg.webm';
import { useState, useRef, useEffect } from 'react';
import logo2 from '../assets/Homelogo.jpg';
import home2 from '../assets/Home2.jpg';
import { Link,useNavigate } from 'react-router-dom';
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import taxi from '../assets/taxi.png'
import { gsap } from 'gsap';


const Home = () => {

  const [pickup, setpickup] = useState('');
  const [dropoff, setdropoff] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showLocationPanel, setShowLocationPanel] = useState(true);
  const [selectedRide, setSelectedRide] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [showConfirmRidePanel, setShowConfirmRidePanel] = useState(false);
  const [showFindingRider, setShowFindingRider] = useState(false);

const navigate= useNavigate();

  const navparaMessages = [
    "Ensure a safe and secure ride with our trusted drivers and advanced tracking system.",
    "Experience comfort and convenience with our premium ride services.",
    "Get to your destination on time with our reliable and efficient rides.",
    "Enjoy affordable and transparent pricing with no hidden charges."
  ];

  const [navpara] = useTypewriter({
    words: navparaMessages,
    loop: 0,
    typeSpeed: 50, // Faster typing speed
    deleteSpeed: 30, // Faster deleting speed
    delaySpeed: 500, // Shorter delay between words
  });

  

  const [typeeffect] = useTypewriter({
    words: ['Trends', 'Comfort', 'Trust', 'Dreams', 'Convenience', 'Amusement'],
    loop: 0, // Infinite loop
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 400,
  });




  const submithandler = (e) => {
    e.preventDefault();
    setShowForm(false);  // Hide form after submission
    setShowConfirmRidePanel(true); // Show confirm ride panel
  };

  const handleRideConfirm = () => {
    setShowConfirmRidePanel(false); // Hide confirm ride panel
    setShowFindingRider(true); // Show finding rider panel

    setTimeout(() => {
      navigate('/Rider')
    }, 5000);
  
  };



  const rides = [
    {
      type: 'Car',
      details: 'Comfortable and spacious car for your ride.',
      expense: '$20',
      image: 'https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?t=st=1736313729~exp=1736317329~hmac=2c50f04da52a07e4cc8e072eef770e633ee8413aed3201f83f44dc21cc76d947&w=900'
    },
    {
      type: 'Bike',
      details: 'Fast and convenient bike for your ride.',
      expense: '$10',
      image: 'https://img.freepik.com/free-vector/red-scooter_1308-82607.jpg?t=st=1736315478~exp=1736319078~hmac=4a650d81e03ed5f0290363e35ab4c2e5bfb3e88d0e4f1e64b1b8afbaa6388e8c&w=740'
    },
    {
      type: 'Auto',
      details: 'Affordable and reliable auto for your ride.',
      expense: '$15',
      image: 'https://img.freepik.com/premium-vector/realistic-rikshaw-vector-illustration-concept_1253202-34901.jpg?w=740'
    }
  ];




  return (
    <div className="w-full h-screen overflow-y-auto">

 <nav className="flex justify-between items-center p-2 bg-black">
  <Link to={'/'}>
        <div  className=" bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent flex gap-4 text-3xl font-semibold">
         <span>PrimeRide</span> 
         
        </div>

        </Link>


        <div className='text-white'>
          <p className="transition-opacity duration-500 sm:block hidden m-4">
            <span className="text-lg font-light bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">{navpara}</span>
            <Cursor cursorStyle="|" />
          </p>
        </div>

        <ul className="flex gap-6">

        <Link to={'/Userlogin'}>
            <button className='rounded-3xl hover:border-green-400 bg-gradient-to-r from-rose-500 to-fuchsia-400 text-white p-2 hover:bg-black hover:text-white border-white border-2'>
              <li className="text-black text-md font-semibold  cursor-pointer">UserLogin</li>
            </button>
          </Link>
         

          <Link to={'/Usersignup'}>
            <button className='rounded-3xl hover:border-green-400 bg-gradient-to-r from-rose-500 to-fuchsia-400 text-white p-2 hover:bg-black hover:text-white border-white border-2'>
              <li className="text-black text-md font-semibold  cursor-pointer">UserSignUp</li>
            </button>
          </Link>

        </ul>
      </nav>
    

      {/* Background Section */}
      <div className="w-full h-screen relative overflow-hidden border-4 border-black">
     
    

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={bg}
          autoPlay
          loop
          muted
        />

        <img src={logo} alt="Logo" className="absolute border-4 border-rose-400 top-4 left-4 w-12 rounded-3xl" />


        
        <p style={{ WebkitTextStroke: "2px black" }} className="absolute bottom-10 left-1/2 mb-36 transform -translate-x-1/2 text-6xl bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent text-center drop-shadow-lg font-bold">
          Ride With Us Ride With Comfort
        </p>
      </div>

      {/* Heading Content Section */}
      <div 
  className="w-full bg-contain bg-center pt-8" 
  style={{ 
    backgroundImage: `url(${taxi})`, 
  }}
>
        <div className='flex justify-center relative w-full h-auto p-3  items-center gap-5 mb-6'>
          <h1 className="text-6xl font-bold text-pretty mb-4 bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent ml-6"
            style={{ WebkitTextStroke: "3px black" }}
          >
            Find A Ride
          </h1>
          <img src={logo2} alt="" className='w-16 h-12 rounded-3xl border-4 border-black m-3 hover:border-green-500 duration-300' />
        </div>
       
      
        <div className="relative">
  {/* Form Section */}
  <form
    className={`w-full max-w-lg mx-auto bg-black p-6 rounded-lg shadow-md mb-8 border-white border-2 duration-300 transition-all ${showForm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    onSubmit={submithandler}
  >
    <div className="mb-5">
      <label
        htmlFor="pickup"
        className="block mb-4 text-2xl font-medium text-gray-900 dark:text-white"
      >
        Pickup Location
      </label>
      <input
        type="text"
        id="pickup"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter pickup location"
        required
        value={pickup}
        onChange={(e) => setpickup(e.target.value)}
      />
    </div>

    <div className="mb-5">
      <label
        htmlFor="dropoff"
        className="block mb-4 text-2xl font-medium text-gray-900 dark:text-white"
      >
        Dropoff Location
      </label>
      <input
        type="text"
        id="dropoff"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter dropoff location"
        required
        value={dropoff}
        onChange={(e) => setdropoff(e.target.value)}
      />
    </div>

    <button
      type="submit"
      className="text-white bg-gradient-to-r from-rose-500 to-fuchsia-400 hover:opacity-80 duration-300 font-bold border-2 border-white rounded-lg text-2xl w-full px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </form>

  {/* Ride Price Section */}
  <div
    className={`w-full h-auto p-3 duration-300 transition-all ${showConfirmRidePanel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
  >
    {showConfirmRidePanel && (
      <div className="w-full h-auto p-3 flex flex-col items-center">
        <div className="mt-4 p-4 border-2 border-white bg-black flex flex-col gap-5 text-white rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent font-bold text-center">
            Ride Details
          </h2>
          <img className="w-auto h-auto border-2 border-green-500 rounded-xl" src="https://img.freepik.com/free-vector/man-with-camera-take-photo-driver-car_107791-8883.jpg?ga=GA1.1.677472336.1735643290&semt=ais_hybrid" alt="" />
          <p className="mt-2 text-center bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">Travel Expense: <span className='text-white'>$50</span></p>
          <p className="mt-2 text-center bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">From: <span className='text-white'>{pickup}</span></p>
          <p className="mt-2 text-center bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">To: <span className='text-white'>{dropoff}</span></p>
          <button
            className="mt-4 border-2 text-center border-white bg-gradient-to-r from-rose-500 to-fuchsia-400 text-white px-4 py-2 rounded-lg hover:opacity-80 duration-300"
            onClick={handleRideConfirm}
          >
            Confirm Ride
          </button>
        </div>
      </div>
    )}
  </div>

  {/* Finding Rider Section */}
  <div
    className={`w-full h-auto p-3 flex flex-col items-center justify-center duration-300 transition-all ${showFindingRider ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
  >
    {showFindingRider && (
      <div className="mt-4 p-4 flex flex-col gap-2 border-2 border-white bg-black text-white rounded-lg shadow-lg w-full max-w-md text-center">
        <img className="w-auto h-auto rounded-xl border-2 border-blue-600" src="https://img.freepik.com/free-vector/people-with-selected-folder-icon_53876-26651.jpg?ga=GA1.1.677472336.1735643290&semt=ais_hybrid" alt="" />
       
       
        
<div class="flex-col gap-4 w-full flex items-center justify-center">
  <div class="w-16 h-16 border-8 bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-pink-700 rounded-full">
   
  </div>
</div>
       
        <h2 className="text-3xl bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent font-bold">
          Finding the Rider
        </h2>
        <p className="mt-2 text-center">Please wait while we connect you with the nearest rider.</p>
      </div>
    )}
  </div>


</div>


    

        {/* Additional Content to Enable Scrolling */}
        <div  className="text-lg mt-16  p-6 flex flex-col gap-5  text-white bg-black w-full border-t-4 border-b-2 border-black" >
          <p className='font-normal  text-center text-5xl  bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent'>
            Primeride Taxi App
          </p>
          <br />
          
           <span className='mb-2 font-light  text-xl'>Primeride is a convenient taxi-hailing service that connects passengers with nearby drivers.</span> 
           <span className='mb-2 font-light  text-xl'> With Primeride, you can easily request a ride using your smartphone, track the driver's location in real-time, and receive updates on their estimated arrival time. </span> 
     <span className='mb-2 font-light  text-xl'>You can also view your ride history, save favorite pickup and drop-off locations, and even pay for your fares through the app. Whether you're heading to work, school, or just out for a night on the town, Primeride makes it easy to get where you need to go with a tap of your screen.</span>
          
          <br />
          <br />
          <br />
         
         
        </div>






        <div className='w-full  flex justify-center items-center'>

  <img className='w-full h-1/2' src="https://imgs.search.brave.com/2y5dNhXAYC0OYZlG75n1c3iS06mu26DX8VBwxVt2iAQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/dmVjdG9yLWltYWdl/cy5zMy5hbWF6b25h/d3MuY29tL3VwbG9h/ZHMvdmVjdG9yL3By/ZXZpZXcvMzkzNjAv/MzkzNjAucG5n" alt="" />
</div>




<div className='w-full  flex justify-center flex-col items-center bg-black  p-12 text-white'>

<h1 className='text-5xl font-semibold  mb-20 bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent'>Why Choose PrimeRide?</h1>

<p className='mb-16 text-2xl font-light '> Ensure a safe and secure ride with our trusted drivers and advanced tracking system.</p>  
  
<p className='mb-16 text-2xl font-light'>Experience comfort and convenience with our premium ride services.</p> 
  
<p className='mb-16 text-2xl font-light'> Get to your destination on time with our reliable and efficient rides.</p> 
    
  
<p className='mb-16 text-2xl font-light'> Enjoy affordable and transparent pricing with no hidden charges.</p>

<p className='mb-16 text-2xl font-light'>Get where you need to go with a tap of your screen.</p>


</div>




        <img src={home2} alt="" className='w-full h-full  ' />

<div className="text-lg h-full pt-12 flex flex-col gap-10 items-center p-6 text-white bg-black w-full  ">
<h2 className="text-4xl font-light mb-4 text-center  bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">Privacy Policy</h2>
          
           <p className="text-lg font-extralight gap-10  text-white">At Primeride, we are committed to protecting your privacy.</p>
           <p className="text-lg font-extralight gap-10  text-white">This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our services.</p> 
             <p className="text-lg font-extralight gap-10  text-white">We collect personal information that you provide to us, such as your name, email address, and phone number, as well as information about your rides and payment details.</p>
             <p className="text-lg font-extralight gap-10  text-white"> We use this information to provide and improve our services, communicate with you, and ensure the safety and security of our platform.</p> 
             <p className="text-lg font-extralight gap-10  text-white"> We do not share your personal information with third parties except as necessary to provide our services or as required by law. </p>
              <p className="text-lg font-extralight gap-10  text-white">By using Primeride, you agree to the terms of this Privacy Policy.</p>
          
</div>
      
 
      </div>
    </div>
  );
};

export default Home;
