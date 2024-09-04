import React, { useContext } from 'react';
import { CartContext } from '../redux/CartContext';
import NavBar from '../components/NavBar';
import FiltroDolz from '../components/FiltroDolz';


const Dolz = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <NavBar cartItems={cartItems} removeFromCart={removeFromCart} />
            <div className="flex justify-center bg-blue-900 items-center mt-24">
                <img className='' src="/Dolz.png" alt="" />
            </div>
            <div><FiltroDolz addToCart={addToCart} /></div>
        </div>
    );
};

export default Dolz;
