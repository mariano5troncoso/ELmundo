import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marcas from '../pages/Marcas';
import Lucas from '../pages/Lucas';


const RouteComponents = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/Marcas' element={<Marcas />} />
                <Route path='/Marcas/Lucas' element={<Lucas />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteComponents;