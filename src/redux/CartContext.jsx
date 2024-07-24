import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity = 1) => {
        setCartItems((prevCartItems) => {
            const existingProductIndex = prevCartItems.findIndex(item => item.CODIGO === product.CODIGO);
            if (existingProductIndex !== -1) {
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[existingProductIndex].quantity += quantity;
                return updatedCartItems;
            } else {
                return [...prevCartItems, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (index) => {
        setCartItems((prevCartItems) => prevCartItems.filter((_, i) => i !== index));
    };

    const updateCartItemQuantity = (index, quantity) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = [...prevCartItems];
            if (quantity <= 0) {
                updatedCartItems.splice(index, 1);
            } else {
                updatedCartItems[index].quantity = quantity;
            }
            return updatedCartItems;
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};