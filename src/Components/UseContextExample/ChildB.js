import React, { useContext } from 'react'
import { ThemeContext } from './Context';

const ChildB = () => {
  const theme = useContext(ThemeContext);
  console.log(theme)
  return (
    <div>ChildB Theme is {theme}</div>
  )
}

export default ChildB