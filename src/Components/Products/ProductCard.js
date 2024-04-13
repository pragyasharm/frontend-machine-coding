import React from 'react'

const ProductCard = ({product}) => {
   const {title, brand, description, discountPercentage, price, rating, thumbnail} = product;

  return (
    <div className='w-1/6 p-2 m-2'>
        <span>{title}</span>
        <img src={thumbnail} alt={description} />
        <span><span className='font-bold'>Brand:</span> {brand} </span>
        <span><span className='font-bold'>Description:</span> {description} </span>
        <span><span className='font-bold'>Price:</span> {price} </span>
        <span><span className='font-bold'>Disounted:</span> {discountPercentage} % </span>
        <span><span className='font-bold'>Rating:</span> {rating} </span> 
    </div>
  )
}

export default ProductCard