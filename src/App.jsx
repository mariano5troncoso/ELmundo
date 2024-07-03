import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marcas from './pages/Marcas';
import Lucas from './pages/Lucas';
import Sucursal from './pages/Sucursales';
import Contacto from './pages/Contactos';
import Evento from './pages/Eventos';
import Dayco from './pages/Dayco';
import NavBar from './components/NavBar';
import FiltroDayco from './components/FiltroDayco';
import Main from './pages/LandingPage';
import Carrito from './components/Carrito';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantityToAdd = 1) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.CODIGO === product.CODIGO);
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += quantityToAdd;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: quantityToAdd }];
      }
    });
  };

  const removeFromCart = (product, quantityToRemove = 1) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.CODIGO === product.CODIGO);
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        const newQuantity = updatedItems[itemIndex].quantity - quantityToRemove;
        if (newQuantity > 0) {
          updatedItems[itemIndex].quantity = newQuantity;
          return updatedItems;
        } else {
          return updatedItems.filter(item => item.CODIGO !== product.CODIGO);
        }
      } else {
        return prevItems;
      }
    });
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Marcas' element={<Marcas />} />
          <Route path='/Marcas/Lucas' element={<Lucas />} />
          <Route path='/Sucursales' element={<Sucursal />} />
          <Route path='/Contactos' element={<Contacto />} />
          <Route path='/Eventos' element={<Evento />} />
          <Route path='/Marcas/Dayco' element={<Dayco />} />
          <Route path='/FiltroDayco' element={<FiltroDayco addToCart={addToCart} />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
};

export default App;
