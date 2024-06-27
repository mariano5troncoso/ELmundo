import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrito from './Carrito';
import NavBar from './NavBar';
import Main from '../pages/LandingPage';
import Marcas from '../pages/Marcas';
import Lucas from '../pages/Lucas';
import Sucursal from '../pages/Sucursales';
import Contacto from '../pages/Contactos';
import Evento from '../pages/Eventos';
import Dayco from '../pages/Dayco';

const GlobalCart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        try {
            const storedCartItems = localStorage.getItem('cartItems');
            if (storedCartItems) {
                setCartItems(JSON.parse(storedCartItems));
            }
        } catch (error) {
            console.error('Error loading cart items from localStorage:', error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } catch (error) {
            console.error('Error saving cart items to localStorage:', error);
        }
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prevCartItems => [...prevCartItems, product]);
    };

    const removeFromCart = (index) => {
        setCartItems(prevCartItems => prevCartItems.filter((_, i) => i !== index));
    };

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Marcas" element={<Marcas />} />
                <Route path="/Marcas/Lucas" element={<Lucas addToCart={addToCart} />} />
                <Route path="/Sucursales" element={<Sucursal />} />
                <Route path="/Contactos" element={<Contacto />} />
                <Route path="/Eventos" element={<Evento />} />
                <Route path="/Marcas/Dayco" element={<Dayco addToCart={addToCart} />} />
            </Routes>
            <Carrito cartItems={cartItems} removeFromCart={removeFromCart} />
        </BrowserRouter>
    );
};

export default GlobalCart;
