import React, { useContext } from 'react';
import ExcelReader from '../components/ExcelReader';
import NavBar from '../components/NavBar';
import { CartContext } from '../redux/CartContext';

const Lucas = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <NavBar cartItems={cartItems} removeFromCart={removeFromCart} />
            <div className="flex justify-center bg-blue-900 items-center mt-24">
                <img className='' src="/lucas.png" alt="" />
            </div>
            <div><ExcelReader addToCart={addToCart} /></div>
        </div>
    );
};

export default Lucas;