import { useState } from 'react'
import Main from './pages/LandingPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marcas from './pages/Marcas';
import Lucas from './pages/Lucas';
import Sucursal from './pages/Sucursales';
import Contacto from './pages/Contactos';
import Evento from './pages/Eventos';
import Dayco from './pages/Dayco';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/Marcas' element={<Marcas />} />
        <Route path='/Marcas/Lucas' element={<Lucas />} />
        <Route path='/Sucursales' element={<Sucursal />} />
        <Route path='/Contactos' element={<Contacto />} />
        <Route path='/Eventos' element={<Evento />} />
        <Route path='/Marcas/Dayco' element={<Dayco />} />
      </Routes>
    </BrowserRouter>
  );
}
