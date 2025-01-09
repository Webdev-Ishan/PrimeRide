import React from 'react';
import taxi from '../assets/taxi.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Waitingforcaptain() {
  const [text] = useTypewriter({
    words: ['Riders', 'Drivers', 'Taxis Nearby'],
    loop: 0, // Infinite loop
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 500,
  });

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${taxi})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute w-full  inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center h-full relative z-10">
        {/* Image Section */}
        <div className="p-4 bg-opacity-80 bg-gray-800 border border-gray-700 shadow-2xl rounded-lg max-w-md w-11/12">
          <img
            className="w-full h-auto border-4 border-green-500 rounded-3xl shadow-lg"
            src="https://media.istockphoto.com/id/1089511684/vector/taxi-service-mobile-application-carpool-late-night-male-passenger-waiting-for-a-car-flat.jpg?s=612x612&w=0&k=20&c=DKuU9vlF-CltxQ9HP4KXi8kqI3Va-Xx1c9j6x_lMOEY="
            alt="Waiting for taxi"
          />
        </div>

        {/* Animated Text */}
        <p className="mt-6 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-5xl font-extrabold animate-pulse">
          Finding Nearby <br />
          <span className="text-yellow-400">
            {text}
            <Cursor />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Waitingforcaptain;

