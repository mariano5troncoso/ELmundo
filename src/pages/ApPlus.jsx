import React, { useContext } from 'react';
import { CartContext } from '../redux/CartContext';
import NavBar from '../components/NavBar';
import FiltroApPlus from '../components/FiltroApPlus';

const Applus = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <NavBar cartItems={cartItems} removeFromCart={removeFromCart} />
            <div className="flex justify-center bg-blue-900 items-center mt-24">
                <img className='' src="/Applus.png" alt="" />
            </div>
            <div><FiltroApPlus addToCart={addToCart} /></div>
        </div>
    );
};

export default Applus;