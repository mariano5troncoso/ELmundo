import React from 'react';
import FiltroDayco from '../components/FiltroDayco';
import NavBar from '../components/NavBar';


const Dayco = ({ addToCart }) => {
    return (
        <div>
            <NavBar />
            <div className="flex justify-center bg-blue-900 items-center mt-24">
                <img className='' src="/dayco.png" alt="" />
            </div>
            <div><FiltroDayco addToCart={addToCart} /></div>
        </div>
        
    );
};

export default Dayco;
