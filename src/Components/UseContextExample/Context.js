import React, { createContext, useState } from 'react'
import ChildA from './ChildA'
import { Provider } from 'react-redux'

const ThemeContext = createContext(null)
const Context = () => {
  const [theme, setTheme] = useState("DarK");
  return (
    <div>Context
      <ThemeContext.Provider value={theme}>
       <ChildA/>
      </ThemeContext.Provider>
    </div>
  )
}

export default Context
export {ThemeContext}