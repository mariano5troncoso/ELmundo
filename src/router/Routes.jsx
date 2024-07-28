import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marcas from '../pages/Marcas';
import Lucas from '../pages/Lucas';
import Sucursal from '../pages/Sucursales';
import Contacto from '../pages/Contactos';
import Evento from '../pages/Eventos';
import Dayco from '../pages/Dayco';
import Applus from '../pages/ApPlus';


const RouteComponents = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/Marcas' element={<Marcas />} />
                <Route path='/Marcas/Lucas' element={<Lucas />} />
                <Route path='/Sucursales' element={<Sucursal />} />
                <Route path='/Contactos' element={<Contacto />} />
                <Route path='/Eventos' element={<Evento />} />
                <Route path='/Marcas/Dayco' element={<Dayco />} />
                <Route path='/Marcas/Applus' element={<Applus />} />

            </Routes>
        </BrowserRouter>
    );
};

export default RouteComponents;