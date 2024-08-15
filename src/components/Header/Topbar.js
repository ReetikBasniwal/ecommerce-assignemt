import React from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'

const Topbar = () => {
  return (
    <div className="bg-[#2874f0] text-white p-2 flex items-center justify-between border-solid px-52">
      <div className="flex items-center">
        <h1 className="text-xl font-bold mr-2">Flipkart</h1>
      </div>
      
      <div className="flex-grow mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="smart watch"
            className="w-full py-2 px-4 rounded-sm text-black"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="bg-white text-[#2874f0] px-4 py-1 rounded-sm font-semibold">
          Login
        </button>
        <div className="flex items-center">
          <FaShoppingCart className="mr-2" />
          <span>Cart</span>
        </div>
      </div>
    </div>
  )
}

export default Topbar
