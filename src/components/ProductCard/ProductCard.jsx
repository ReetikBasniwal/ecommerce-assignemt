import React from 'react'
import './productCard.css'
import _ from 'lodash'

const ProductCard = ({ cardInfo }) => {
  return (
    <div className='w-full p-4 max-w-[20rem]'>
      <div className='flex flex-col h-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'>
        <div className='relative pt-[100%]'> {/* This creates a 1:1 aspect ratio container */}
          <img 
            src={cardInfo.thumbnail} 
            alt={cardInfo.title} 
            className='absolute top-0 left-0 w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col p-4'>
          <span className='text-md font-medium mb-1 line-clamp-2 h-5'>{cardInfo.title}</span>
          <div>{cardInfo.tags?.map((tag, index) => <span className='text-gray mr-1'>{_.capitalize(tag)}</span>)}</div>
          <div className=''>
            <span className='text-lg font-bold mr-2'>₹{cardInfo.price}</span>
            <s className='text-sm text-gray mr-2'>₹{Math.round(cardInfo.price / (1 - cardInfo.discountPercentage / 100))}</s>
            <span className='text-sm font-medium text-green-600'>{Math.round(cardInfo.discountPercentage)}% off</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
