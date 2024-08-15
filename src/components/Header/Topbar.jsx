import React, { useState } from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { api_request } from '../../utils/Functions/API_Layesr';
import { BASE_URL } from '../../config/global_config';
import { cartActions } from '../../redux/Reducers/cartReducer';

const Topbar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();


  const handleSearch = () => {
    const url = `${BASE_URL}/products/search?q=${searchText}`;
    api_request(url, "GET").then(res => {
      dispatch(cartActions.setProductList(res.data.products));
    }).catch(e => console.error("Error in searching item", e.message))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="bg-[#2874f0] text-white p-3 flex items-center justify-between border-solid px-52 fixed top-0 w-full z-10">
      <div className="flex items-center">
        <h1 className="text-xl font-bold mr-2">Flipkart</h1>
      </div>
      
      <div className="flex-grow mx-4">
        <div className="relative border">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full py-2 px-4 rounded-sm text-black outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className='absolute p-2 right-1 top-1/2 transform -translate-y-1/2' onClick={handleSearch}>
            <FaSearch color='#2874F1' />
          </div>
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
