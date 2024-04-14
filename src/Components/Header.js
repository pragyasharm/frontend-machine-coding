import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-200 p-2 flex-auto'>
      <Link className='p-2' to='/'>Home</Link>
      <Link className='p-2' to='/product-card'>Products </Link>
      <Link className='p-2' to='/move-swap'>Move&Swap</Link>
      <Link className='p-2' to='/calculator'>Calculator</Link>
    </div>
  )
}

export default Header