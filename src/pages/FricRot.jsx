import React, { useContext } from 'react';
import { CartContext } from '../redux/CartContext';
import NavBar from '../components/NavBar';

import FiltroFricRot from '../components/FiltroFricRot';


const FricRot = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <NavBar cartItems={cartItems} removeFromCart={removeFromCart} />
            <div className="flex justify-center bg-blue-900 items-center mt-24">
                <img className='' src="/FricRot.png" alt="" />
            </div>
            <div><FiltroFricRot addToCart={addToCart} /></div>
        </div>
    );
};

export default FricRot;
