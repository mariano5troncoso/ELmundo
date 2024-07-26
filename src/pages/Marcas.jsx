import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function Marcas() {
  return (
    <div className="bg-blue-900 min-h-screen p-16">
      <NavBar />
      <div className="flex justify-center items-center mt-10">
        <Link to="/Marcas/Lucas">
          <img src="/lucas.png" alt="lucas" className="cursor-pointer" />
          <p className='text-white text-lg'>Catalogo</p>
        </Link>
        <Link to="/Marcas/Dayco">
          <img src="/dayco.png" alt="lucas" className="cursor-pointer" />
          <p className='text-white text-lg'>Catalogo</p>
        </Link>
        <Link to="/Marcas/Applus">
          <img src="/AP.png" alt="lucas" className="cursor-pointer" />
          <p className='text-white text-lg'>Catalogo</p>
        </Link>
      </div>
    </div>
  );
}
