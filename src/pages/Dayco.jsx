import React, { useContext } from 'react';
import { CartContext } from '../redux/CartContext';
import NavBar from '../components/NavBar';
import FiltroDayco from '../components/FiltroDayco';

const Dayco = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <NavBar cartItems={cartItems} removeFromCart={removeFromCart} />
            <div className="flex justify-center bg-blue-900 items-center mt-24">
                <img className='' src="/dayco.png" alt="" />
            </div>
            <div><FiltroDayco addToCart={addToCart} /></div>
        </div>
    );
};

export default Dayco;
