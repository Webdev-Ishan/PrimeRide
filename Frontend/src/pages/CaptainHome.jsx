import React,{useEffect} from 'react';
import logo from '../assets/Ride.png';
import bg from '../assets/Ride.mp4';
import logo2 from '../assets/Homelogo.jpg';
import home2 from '../assets/Home2.jpg';
import { Link,useNavigate } from 'react-router-dom';
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const CaptainHome = () => {

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

    gsap.from(".appname p",{
      x:1000,
      duration:0.5,
      delay:0.5,
      rotate:360,
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

        <Link to={'/Captainlogin'}>
            <button className='rounded-3xl hover:border-green-400 bg-gradient-to-r from-rose-500 to-fuchsia-400 text-white p-2 hover:bg-black hover:text-white border-white border-2'>
              <li className="text-black text-md font-semibold  cursor-pointer">CaptainLogin</li>
            </button>
          </Link>
         

          <Link to={'/Captainsignup'}>
            <button className='rounded-3xl hover:border-green-400 bg-gradient-to-r from-rose-500 to-fuchsia-400 text-white p-2 hover:bg-black hover:text-white border-white border-2'>
              <li className="text-black text-md font-semibold  cursor-pointer">CaptainSignUp</li>
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


        
        <p style={{ WebkitTextStroke: "2px black" }} className=" heading absolute bottom-10 left-1/2 mb-36 transform -translate-x-1/2 text-6xl bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent text-center drop-shadow-lg font-bold">
          Lead The Way Become A Captain
        </p>
      </div>

      {/* Heading Content Section */}
      <div 
  className="parent w-full bg-pink-100 overflow-x-hidden  " 
 
>
        {/*  Text Effect section */}
        <div style={{ WebkitTextStroke: "2px black" }} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}  className=' scrolleffect w-full h-auto'>

<h1 className='text-black scroll font-bold text-[250px] w-full  h-full'>PRIMERIDETAXIS</h1>

        </div>
       

           
   <div className='w-full h-auto bg-black text-white border-b-2 border-white p-10'>

<form>
<div className="relative mb-6">
<label className="flex items-center mb-2 text-white text-sm font-medium">
  Username
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
  id="username"
  className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
  placeholder=""
  required
/>
</div>

<div className="relative mb-6">
<label className="flex items-center mb-2 text-white text-sm font-medium">
  Password
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
  type="password"
  id="password"
  className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
  placeholder=""
  required
/>


</div>

<button
type="submit"
className="w-52 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6 mb-6"
>
Sign in
</button>
</form>

</div>
        

        {/* Additional Content to Enable Scrolling */}
        <div onMouseEnter={handleappname} className="text-lg appname  p-6 flex flex-col gap-5  text-white bg-black w-full border-t-4 border-b-2 border-black" >
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




<div onMouseEnter={handleappname2} className='w-full appname  flex justify-center flex-col items-center bg-black  p-12 text-white'>

<h1 className='text-5xl font-semibold  mb-20 bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent'>Why Choose PrimeRide?</h1>

<p className='mb-16 text-2xl font-light '> Ensure a safe and secure ride with our trusted drivers and advanced tracking system.</p>  
  
<p className='mb-16 text-2xl font-light'>Experience comfort and convenience with our premium ride services.</p> 
  
<p className='mb-16 text-2xl font-light'> Get to your destination on time with our reliable and efficient rides.</p> 
    
  
<p className='mb-16 text-2xl font-light'> Enjoy affordable and transparent pricing with no hidden charges.</p>

<p className='mb-16 text-2xl font-light'>Get where you need to go with a tap of your screen.</p>


</div>



{/*  Text Effect section */}
<div style={{ WebkitTextStroke: "2px black" }} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className='scrolleffect w-full h-auto '>

<h1 className='text-white scroll font-bold border-t-2 border-t-white text-[250px] bg-black w-full h-full'>PREMIUMRIDES</h1>

        </div>


        <img src={home2} alt="" className='w-full h-full  ' />



{/*  Text Effect section */}
<div style={{ WebkitTextStroke: "2px black" }} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className='scrolleffect w-full h-auto '>

<h1 className='text-white scroll font-bold border-t-2 border-t-white text-[250px] bg-pink-600 w-full h-full'>USERCENTRIC</h1>

        </div>

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

export default CaptainHome;

