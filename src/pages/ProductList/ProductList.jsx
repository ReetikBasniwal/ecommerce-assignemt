import React, { useEffect } from 'react'
import './productlist.css'
import { useDispatch, useSelector } from 'react-redux'
import { api_request } from '../../utils/Functions/API_Layesr';
import { BASE_URL } from '../../config/global_config';
import ProductCard from '../../components/ProductCard/ProductCard';
import { productAction } from '../../redux/Reducers/productListreducer';

const ProductList = () => {
  const dispatch = useDispatch();

  const { productList } = useSelector(state => state.productReducer);

  useEffect(() => {
    api_request(`${BASE_URL}/products`, "GET")
    .then(res => {
      dispatch(productAction.setProductList(res.data.products));
    }).catch(e => console.error("Error in getting items for the first time", e.message))
  },[])

  return (
    <div className='p-2 flex w-full justify-center h-full gap-5 pl-container'>

      <div className='flex flex-col justify-center'>
        <div className='flex flex-col justify-start border-b p-2 bg-white'>

        </div>
        {productList.length > 0 ? <div className='grid grid-cols-1 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-auto'>
          {productList?.map((item) => <ProductCard cardInfo={item} key={item.id}/>)}
          </div> : <div className='h-[20rem] w-full flex bg-white items-center justify-center'>
          <div className='flex flex-col items-center'>
            <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png' alt="no product"/>
            <span className='text-2xl'>Sorry, no results found!</span>
          </div>
          </div>
        }
      </div>
      
    </div>
  )
}

export default ProductList
