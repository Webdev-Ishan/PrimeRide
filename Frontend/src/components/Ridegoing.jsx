import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/Ride.mp4';

function Ridegoing() {
  const navigate = useNavigate();

  const handlePaymentRedirect = () => {
    navigate('/payment'); // Replace '/payment' with your actual payment route
  };

  return (
    <div className="w-full h-screen overflow-y-auto">
      <div className="w-full h-screen relative overflow-hidden border-4 border-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={bg}
          autoPlay
          loop
          muted
        />
        <p
          style={{ WebkitTextStroke: '2px black' }}
          className="absolute bottom-10 left-1/2 mb-36 transform -translate-x-1/2 text-6xl bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent text-center drop-shadow-lg font-bold"
        >
          Ride is Here For You
        </p>



        <p
          className="absolute bottom-10 mb-20 left-1/2  transform -translate-x-1/2 text-2xl text-white text-center drop-shadow-lg font-light"
        >
          Just wait for a sec...
        </p>


        <button
          onClick={handlePaymentRedirect}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 text-lg font-mono bg-gradient-to-r from-rose-500 to-fuchsia-400 border-4 hover:border-green-700 duration-300 border-black text-white rounded-md shadow-lg "
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default Ridegoing;

