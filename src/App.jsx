import { useState } from 'react'
import Main from './pages/LandingPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marcas from './pages/Marcas';
import Lucas from './pages/Lucas';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/Marcas' element={<Marcas />} />
        <Route path='/Marcas/Lucas' element={<Lucas />} />
      </Routes>
    </BrowserRouter>
  );
}
