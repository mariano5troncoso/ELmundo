import React from 'react';
import ExcelReader from '../components/ExcelReader';
import NavBar from '../components/NavBar';

const Lucas = ({ addToCart }) => {
    return (
      <div>
      <NavBar />
      <div className="flex justify-center bg-blue-900 items-center mt-24">
          <img className='' src="/dayco.png" alt="" />
      </div>
      <div><ExcelReader addToCart={addToCart} /></div>
  </div>
    );
};

export default Lucas;
