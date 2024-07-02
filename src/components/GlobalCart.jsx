import React from 'react';
import { CartProvider } from '../redux/CartContext';
import App from '../App';

const GlobalCart = () => {
    return (
        <CartProvider>
            <App />
        </CartProvider>
    );
};

export default GlobalCart;
