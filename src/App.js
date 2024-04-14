import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and necessary components
import React from 'react';
import Body from './Components/Body';
import Header from './Components/Header';
import ProductListpage from './Components/Products/ProductListpage';
import Scroller from './Components/Products/Scroller';
import MainProductContainer from './Components/Products/MainProductContainer';
import MoveSwapComponent from './Components/MoveNswap/MoveSwapComponent';

function App() {
  return (
    <Router> {/* Wrap your routes with BrowserRouter */}
      <div>
        <Header />
        <Routes> {/* Use Routes to define your routes */}
          <Route path="/" element={<Body />} />

          <Route index element={<ProductListpage />} />
          <Route path="/scroller" element={<Scroller />} />
          <Route path="/product-card" element={<MainProductContainer />} />
          <Route path="/move-swap" element={<MoveSwapComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;