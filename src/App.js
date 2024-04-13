import './App.css';
import ProductListpage from './Components/Products/ProductListpage';
import Scroller from './Components/Products/Scroller';
import { Link, createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import React from 'react'
import Body from './Components/Body'
import ProductHeader from './Components/Products/ProductHeader';
import MainProductContainer from './Components/Products/MainProductContainer';

  
const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <ProductListpage/>
    },
    {
      path: "/scroller",
      element: <Scroller/>
    },
    {
      path: "/product-card",
      element: <MainProductContainer/>
    }
    ]
}])

function App() {
  return (
      <div>
        <ProductHeader />
        <RouterProvider router={appRouter}/>
        {
          /** 
           * Head
           * Body
           *  sidebar
           *   Menuitems
           *  maincontainer
           *   buttonslist
           *   videocontainer
           *    videocard 
           * 
           */
        }
      </div>
  );
}

export default App
