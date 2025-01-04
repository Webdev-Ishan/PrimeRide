import React from 'react';
import logo from '../assets/Ride.png';
import bg from '../assets/Homebg.webm';
import { useState ,useRef} from 'react';
import logo2 from '../assets/Homelogo.jpg';
import home2 from '../assets/Home2.jpg';
import Locationpanel from '../components/LocationPanel'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Home = () => {

  const  [pickup, setpickup] = useState('')
  const  [dropoff, setdropoff] = useState('')
  
  const [navpara, setnavpara] = useState(" Ensure a safe and secure ride with our trusted drivers and advanced tracking system.")

  const navparaMessages = [
    "Ensure a safe and secure ride with our trusted drivers and advanced tracking system.",
    "Experience comfort and convenience with our premium ride services.",
    "Get to your destination on time with our reliable and efficient rides.",
    "Enjoy affordable and transparent pricing with no hidden charges."
  ];



  useEffect(() => {
    // using useeffect to change the navpara message whenever the page is rendered
    let index= 0; 

    const interval = setInterval(() => {
      
// setinterval to change the navpara message every 5 seconds
// we have made list of messages in an arrray this is its index

index= (index+1)%navparaMessages.length; // we are incrementing the index by 1 and then taking the modulus of the length of the array so that the index does not exceed the length of the array

setnavpara(navparaMessages[index]); // setting up the value

    }, 1000);

return () => clearInterval(interval);
// clearing the interval
  },[])


  const submithandler = (e) => {
e.preventDefault();


  }

  const panelOpen= ()=>{
    const panel = document.getElementById('locationpanel')
    panel.classList.toggle('hidden')
  }
  


  return (
    <div className="w-full h-screen overflow-y-auto">

 <nav className="flex justify-between items-center p-2 bg-black">
  <Link to={'/'}>
        <div className="text-white flex gap-4 text-2xl font-bold">
         <span>PrimeRide</span> 
          <img className='w-8 h-4 rounded-lg border-2 border-pink-400 ' src={logo} alt="" />
        </div>

        </Link>


<div className='text-white'>

<p className='transition-opacity duration-500 sm:block hidden m-4'> {navpara}</p>
</div>

        <ul className="flex gap-6">
          <Link to={'/Userlogin'}>
          <button className='rounded-3xl bg-gradient-to-r from-pink-400 to-indigo-600 text-white p-2  border-white border-2'>
          <li className="text-white text-md hover:text-black  cursor-pointer font-extralight">UserLogin</li>
          </button>
          
          </Link>
         

         <Link to={'/Usersignup'}>
          
          <button className='rounded-3xl bg-gradient-to-r from-pink-400 to-indigo-600  p-2  border-white border-2'>
          <li className="text-white text-md hover:text-black font-extralight cursor-pointer  ">UserSignUp</li>
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

        <img src={logo} alt="Logo" className="absolute border-4 border-blue-800 top-4 left-4 w-12 rounded-3xl" />
        <p className="absolute bottom-10 left-1/2 mb-28 transform -translate-x-1/2 text-6xl
        bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent text-center  drop-shadow-lg font-bold">
        
          Ride With Us Ride With Style
        </p>
      </div>

      {/* Additional Content */}
      <div className="w-full bg-gradient-to-r from-gray-800 to-gray-300 pt-8">
        <div className='flex justify-center items-center gap-5 mb-6'>
        <h1 className="text-6xl font-bold text-pretty mb-4 bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent ml-6"
        >Find A Ride</h1>
        <img src={logo2} alt=""  className='w-24 h-16 rounded-xl border-4 border-black m-3  hover:border-yellow-500 duration-300'/>
        </div>
       

        {/* Form Section */}
        <form className="max-w-lg mx-auto bg-black p-6 rounded-lg shadow-md mb-8  border-white border-2 duration-300"
        onSubmit={(e) => 
          
          submithandler(e)

        }

        >
          <div className="mb-5">
            <label htmlFor="pickup" className="block mb-4 text-2xl font-medium text-gray-900 dark:text-white">Pickup Location</label>
            <input type="text" id="pickup" value={pickup} onChange={(e)=>{
              
              setpickup(e.target.value)
            }
          } 
           onClick={()=>{
                panelOpen();
              }}    
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter pickup location" required />
          </div>


          <div className="mb-5">
            <label htmlFor="dropoff" className="block mb-4 text-2xl font-medium text-gray-900 dark:text-white">Dropoff Location</label>
            <input type="text" id="dropoff" value={dropoff} onChange={(e)=>{
              setdropoff(e.target.value)
            }}
            
            onClick={()=>{
              panelOpen();
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter dropoff location" required />
          </div>

          <button type="submit" className="text-white bg-gradient-to-r from-rose-500 to-fuchsia-400 hover:opacity-80 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
       
        </form>








        <div className='w-full h-auto p-3 hidden duration-300' id='locationpanel'>
         <Locationpanel />
        </div>  

        {/* Additional Content to Enable Scrolling */}
        <div  className="text-lg   p-6  text-white bg-black w-full border-t-4 border-b-2 border-black" >
          <p className='font-bold text-center text-2xl  bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent'>
            Primeride Taxi App
          </p>
          <br />
          <p className='mb-2 font-light'>
            Primeride is a convenient taxi-hailing service that connects passengers with nearby drivers. With Primeride, you can easily request a ride using your smartphone, track the driver's location in real-time, and receive updates on their estimated arrival time. You can also view your ride history, save favorite pickup and drop-off locations, and even pay for your fares through the app. Whether you're heading to work, school, or just out for a night on the town, Primeride makes it easy to get where you need to go with a tap of your screen.
          </p>
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

<div className="text-lg h-96 pt-12 p-6 text-white bg-black w-full  ">
<h2 className="text-4xl font-bold mb-4 text-center  bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">Privacy Policy</h2>
          <p className="text-lg font-extralight mt-10 text-white">
            At Primeride, we are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our services. We collect personal information that you provide to us, such as your name, email address, and phone number, as well as information about your rides and payment details. We use this information to provide and improve our services, communicate with you, and ensure the safety and security of our platform. We do not share your personal information with third parties except as necessary to provide our services or as required by law. By using Primeride, you agree to the terms of this Privacy Policy.
          </p>
</div>
      
        
      </div>
    </div>
  );
};

export default Home;
