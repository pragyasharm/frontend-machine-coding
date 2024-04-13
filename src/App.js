import './App.css';
import ProductListpage from './Components/Products/ProductListpage';
import ReactDOM from "react-dom/client";
import Scroller from './Components/Products/Scroller';
import LandingPageLayout from './Components/Products/Mainlayout/LandingPagelayout';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import React from 'react'
import Body from './Components/Body'
import ProductHeader from './Components/Products/ProductHeader';

  
const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <ProductListpage/>
    },
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
