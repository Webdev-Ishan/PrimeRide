// Install Tailwind CSS and React if not already done.
// Tailwind CSS can be installed and configured using the Tailwind documentation.

import React, { useState,useRef } from "react";
import gsap from 'gsap';

const RidePanel = ({setvehcilepanel,setpanel}) => {
  const [activeTab, setActiveTab] = useState("Car");

  const rides = {
    Car: [
      { id: 1, name: "Sedan", price: "$15", eta: "5 mins", img:"https://img.freepik.com/free-vector/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg?ga=GA1.1.677472336.1735643290&semt=ais_hybrid"},
      { id: 2, name: "SUV", price: "$20", eta: "8 mins", img:"https://img.freepik.com/free-vector/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg?ga=GA1.1.677472336.1735643290&semt=ais_hybrid"} ,
    ],
    Bike: [
      { id: 1, name: "Scooter", price: "$8", eta: "3 mins", img:"https://img.freepik.com/free-psd/stylish-blue-motorcycle-transparent-background_84443-27683.jpg?ga=GA1.1.677472336.1735643290&semt=ais_tags_boosted" },
      { id: 2, name: "Motorbike", price: "$10", eta: "4 mins" , img:"https://img.freepik.com/free-psd/stylish-blue-motorcycle-transparent-background_84443-27683.jpg?ga=GA1.1.677472336.1735643290&semt=ais_tags_boosted"},
    ],
    Auto: [
      { id: 1, name: "Standard Auto", price: "$7", eta: "6 mins", img:"https://img.freepik.com/free-psd/3d-illustration-transportation-vehicle-icon_23-2149975019.jpg?ga=GA1.1.677472336.1735643290&semt=ais_tags_boosted" },
      { id: 2, name: "Shared Auto", price: "$5", eta: "10 mins", img:"https://img.freepik.com/free-psd/3d-illustration-transportation-vehicle-icon_23-2149975019.jpg?ga=GA1.1.677472336.1735643290&semt=ais_tags_boosted" },
    ],
  };

const vehcilePanelRef = useRef(null);
const handleBackClick = () => {
  setvehcilepanel(false);
  setpanel(true)
};
  return (
    <div ref={vehcilePanelRef} className="min-h-screen  bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-2xl p-4 bg-slate-900 border-2 border-white rounded-lg shadow-lg">
      <img
      onClick={ handleBackClick}
      className="w-16 h-6 rounded-xl border-2 hover:border-green-400 " src="https://media.istockphoto.com/id/2185704131/photo/arrow-line-arrow-vector-flat-style-symbol-arrow-on-a-white-background-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=taGR268zRzIsdZ14liYuMgPuB-PtM3h5qe_qtT8TvZo=" alt="" />
        <h1 style={{ WebkitTextStroke: "2px black" }}  className="text-4xl font-bold text-center m-4 bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent mb-4">Choose Your Ride</h1>
        {/* Tabs */}
        <div className="flex justify-around mb-4">
          {["Car", "Bike", "Auto"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold border-black border-2 rounded ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Ride Details */}
        <div className="space-y-4">
          {rides[activeTab].map((ride) => (
            <div
              key={ride.id}
              className="flex justify-between items-center p-3 border-2 hover:border-yellow-400 bg-black rounded-lg"
            >
              <div>
                <p className="font-bold">{ride.name}</p>
                <p className="text-gray-400">ETA: {ride.eta}</p>
              </div>
              <img className="w-20 h-14 rounded-2xl border-2 border-pink-500" src={ride.img}  alt="" />
              <p className="font-bold">{ride.price}</p>
            </div>
          ))}
        </div>
        {/* Confirm Button */}
        <div className="text-center mt-6">
          <button className="px-6 py-2 text-white bg-gradient-to-r from-rose-500 to-fuchsia-400 font-semibold border-2 rounded border-black hover:border-white duration-300 ">
            Confirm Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePanel;
