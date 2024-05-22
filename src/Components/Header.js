import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-200 p-2 flex'>
      <Link className='p-2' to='/'>Home</Link>
      <Link className='p-2' to='/product-card'>Products </Link>
      <Link className='p-2' to='/move-swap'>Move&Swap</Link>
      <Link className='p-2' to='/calculator'>Calculator</Link>
      <Link className='p-2' to='/accordian'>Accordian</Link>
      <Link className='p-2' to='/search'>Search</Link>
      <Link className='p-2' to='/game'>TicTacToe</Link>
    </div>
  )
}

export default Header