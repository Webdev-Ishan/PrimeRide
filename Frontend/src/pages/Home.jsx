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
import {useGSAP} from '@gsap/react'
import Locationpanel from '../components/LocationPanel'
import RidePanel from '../components/Ridepanel';



const Home = () => {

  const [pickup, setpickup] = useState('');
  const [dropoff, setdropoff] = useState('');
  const [panelopen, setpanelopen]= useState(false);
  const panelref =useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showLocationPanel, setShowLocationPanel] = useState(true);
  const [selectedRide, setSelectedRide] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [showConfirmRidePanel, setShowConfirmRidePanel] = useState(false);
  const [showFindingRider, setShowFindingRider] = useState(false);



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

  




  const handleMouseEnter = () => {
    gsap.to(".scrolleffect", {
      transform: "translateX(-100%)",
      duration: 3,
      

    });
  };


 const handleMouseLeave = () => {
  gsap.to(".scrolleffect", {
    transform: "translateX(0)",
    duration: 3,
  });
};


useGSAP(()=>{
gsap.from(".heading",{
  opacity:0,
  duration:2,
  delay:1,
  rotate:360,
  scale:1
})


},[])




const handleappname= ()=>{

  gsap.to(".appname .hp",{
    opacity:1,
    duration:0.5,
    delay:0.5,
    
  })
}


const handleappname2= ()=>{

  gsap.from(".appname h1",{
    x:1000,
    duration:0.5,
    delay:0.5,
    rotate:360,
  })
}

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



  const submithandeler= (e)=>{
    e.preventDefault()
  }

  useGSAP(function(){
if(panelopen){
  
  gsap.to(panelref.current,{
    height:'70%',
    duration:6,
    delay:0.5,

   })
}

  },[panelopen])

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden">

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
      <div className="w-full h-screen relative overflow-x-hidden text-white border-4 border-black">
     
    

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={bg}
          autoPlay
          loop
          muted
        />

        <img src={logo} alt="Logo" className="absolute border-4 border-rose-400 top-4 left-4 w-12 rounded-3xl" />


        
        <p style={{ WebkitTextStroke: "2px black" }} className="heading absolute bottom-10 left-1/2 mb-36 transform -translate-x-1/2 text-7xl bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent text-center drop-shadow-lg font-bold">
          Ride With Us Ride With Comfort
        </p>
      </div>

      {/* Heading Content Section */}
      <div 
  className="w-full bg-contain bg-center bg-black " 
  
>
            {/*  Text Effect section */}
            <div style={{ WebkitTextStroke: "2px black" }} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className='w-full scrolleffect border-b-2 border-t-2  border- h-auto '>

<h1 className='text-white font-bold text-[250px] w-full h-full'>PRIMERIDETAXIS</h1>

        </div>
       
   <div className='w-full h-auto bg-black flex flex-col  justify-center  text-white border-b-2 border-white p-10'>


         <h1 className='text-6xl text-center bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent font-mono'>Find A Ride</h1>
        <form>
      <div className="relative mb-6">
        <label className="flex items-center mb-2 text-white text-sm font-medium">
          PickUp Location
          <svg
            width="7"
            height="7"
            className="ml-1"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
              fill="#EF4444"
            />
          </svg>
        </label>
        <input
          type="text"
          id="pickup"
          value={pickup}
          onClick={()=>{
            setpanelopen(!panelopen)
          }}
          onChange={(e)=>{
            setpickup(e.target.value)
          }}
          className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
          placeholder="Enter the PickUp Location"
          required
        />
      </div>

      <div className="relative mb-6">
        <label className="flex items-center mb-2 text-white text-sm font-medium">
          DropOff Location
          <svg
            width="7"
            height="7"
            className="ml-1"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
              fill="#EF4444"
            />
          </svg>
        </label>
        <input
          type="text"
          id="dropoff"
          onClick={()=>{
            setpanelopen(!panelopen)
          }}
          value={dropoff}
          onChange={(e)=>{
            setdropoff(e.target.value)
          }}
          className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
          placeholder="Enter the DropOff Location"
          required
        />

       
      </div>

      <button
        type="submit"
        onSubmit={()=>{submithandeler(e)}}
        className="w-52 h-14 font-light border-2 border-green-400 hover:opacity-65 rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-400 transition-all duration-700 p-4 shadow-xs text-white  text-xl leading-6 mb-6"
      >
        Submit
      </button>
    </form>


{/* Suggestions tab */}
<div ref={panelref} className='bg-black text-white h-0 overflow-hidden  transition-height duration-300'>

 <Locationpanel/>

</div>


{/* Ride Details tab */}
<div className='bg-black text-white h-auto overflow-hidden transition-height duration-300'>

 <RidePanel/>

</div>

    </div>

        {/* Additional Content to Enable Scrolling */}
        <div onMouseEnter={handleappname}  className=" appname text-lg mt-16  p-6 flex flex-col gap-5  text-white bg-black w-full border-t-4 border-b-2 border-black" >
          <p className='font-normal hp opacity-0 text-center text-5xl  bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent'>
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




<div onMouseEnter={handleappname2} className='w-full  flex justify-center appname flex-col items-center bg-black  p-12 text-white'>

<h1 className='text-5xl font-semibold  mb-20 bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent'>Why Choose PrimeRide?</h1>

<p className='mb-16 text-2xl font-light '> Ensure a safe and secure ride with our trusted drivers and advanced tracking system.</p>  
  
<p className='mb-16 text-2xl font-light'>Experience comfort and convenience with our premium ride services.</p> 
  
<p className='mb-16 text-2xl font-light'> Get to your destination on time with our reliable and efficient rides.</p> 
    
  
<p className='mb-16 text-2xl font-light'> Enjoy affordable and transparent pricing with no hidden charges.</p>

<p className=' text-2xl font-light'>Get where you need to go with a tap of your screen.</p>


</div>


 {/*  Text Effect section */}
 <div style={{ WebkitTextStroke: "2px black" }} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className='w-full scrolleffect border-t-2 border-b-2 h-auto '>

<h1 className='text-white font-bold text-[250px] w-full h-full'>CONVENIENCE</h1>

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
