import React, { useEffect } from 'react'
import './productlist.css'
import { useDispatch, useSelector } from 'react-redux'
import { api_request } from '../../utils/Functions/API_Layesr';
import { BASE_URL } from '../../config/global_config';
import { cartActions } from '../../redux/Reducers/cartReducer';
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();

  const { productList } = useSelector(state => state.cartReducer);

  useEffect(() => {
    api_request(`${BASE_URL}/products`, "GET")
    .then(res => {
      dispatch(cartActions.setProductList(res.data.products));
    }).catch(e => console.error("Error in getting items for the first time", e.message))
  },[])

  return (
    <div className='p-2 flex w-full h-full gap-5 pl-container'>
      <div className='grid grid-cols-1 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-auto'>
        {productList?.map((item) => <ProductCard cardInfo={item} key={item.id}/>)}
      </div>
    </div>
  )
}

export default ProductList
