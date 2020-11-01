import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='products' element={<Products />}>
          <Route path=':productid' element={<ProductDetails />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
