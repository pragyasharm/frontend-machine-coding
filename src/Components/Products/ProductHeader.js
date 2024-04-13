import React from 'react'
import { Link } from 'react-router-dom'

const ProductHeader = () => {
  return (
    <div className='bg-gray-200 p-2 flex-auto'>
        <img className='w-14' src='/images/icon.png' alt='logo'/>

        <ul className='flex'>
            <li className='m-5'>Home</li>
            <li className='m-5'>Scroller</li>
            <li className='m-5'>Testing</li>
        </ul>
    </div>
  )
}

export default ProductHeader