import React from 'react';
import location from '../assets/location.png';

const LocationPanel = ({ onLocationClick }) => {
  const locations = [
    '123 Main St, Springfield, IL',
    '456 Elm St, Shelbyville, IL',
    '789 Oak St, Capital City, IL',
    '101 Maple St, Ogdenville, IL',
    '202 Pine St, North Haverbrook, IL'
  ];

  return (
    <div className='w-full h-auto overflow-y-auto p-10 text-white  bg-black shadow-lg rounded-lg'>
      <ul className='flex flex-col t gap-8'>
        {locations.map((elem, index) => (
          <li
            key={index}
            onClick={() => onLocationClick(elem)}
            className='flex items-center hover:bg-pink-200 gap-4 p-4 bg-white border-4 border-transparent active:border-yellow-400 text-black rounded-3xl transition duration-500 cursor-pointer'
          >
            <img className='w-8 h-8' src={location} alt="Location Icon" />
            <span className='font-light'>{elem}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationPanel;
