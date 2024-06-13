import { useState } from 'react'
import Main from './pages/LandingPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marcas from './pages/Marcas';
import Lucas from './pages/Lucas';
import Sucursal from './pages/Sucursales';
import Contacto from './pages/Contactos';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/Marcas' element={<Marcas />} />
        <Route path='/Marcas/Lucas' element={<Lucas />} />
        <Route path='/Sucursales' element={<Sucursal />} />
        <Route path='/Contactos' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
