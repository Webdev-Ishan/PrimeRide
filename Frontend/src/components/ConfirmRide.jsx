import React from 'react'

const ConfirmRide = () => {
  return (
    <div className="max-w-sm  border border-gray-200 rounded-lg shadow bg-black">
    <a href="#">
        <img className="rounded-t-lg"  src="https://img.freepik.com/premium-vector/realistic-rikshaw-vector-illustration-concept_1253202-34901.jpg?w=740" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent">Confirm Your Ride Here!!</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Travel Expense : $23</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-lg font-mono hover:bg-pink-100 rounded-xl text-center text-black bg-white">
          Confirm Ride
            
        </a>
    </div>
</div>
  )
}

export default ConfirmRide



