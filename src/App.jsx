import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marcas from './pages/Marcas';
import Lucas from './pages/Lucas';
import Sucursal from './pages/Sucursales';
import Contacto from './pages/Contactos';
import Evento from './pages/Eventos';
import Dayco from './pages/Dayco';
import NavBar from './components/NavBar';
import FiltroDayco from './components/FiltroDayco';
import Main from './pages/LandingPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Marcas' element={<Marcas />} />
          <Route path='/Marcas/Lucas' element={<Lucas />} />
          <Route path='/Sucursales' element={<Sucursal />} />
          <Route path='/Contactos' element={<Contacto />} />
          <Route path='/Eventos' element={<Evento />} />
          <Route path='/Marcas/Dayco' element={<Dayco />} />
          <Route path='/FiltroDayco' element={<FiltroDayco />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
