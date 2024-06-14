import React from 'react';
import NavBar from '../components/NavBar';

export default function Sucursal() {
    return (
        <div className='bg-blue-900 mt-16'>
            <NavBar />
            <div className="bg-blue-900 mt-16 flex flex-col items-center justify-center text-center py-20">
                <h1 className="text-white text-3xl font-bold mb-4">Casa Central</h1>
                <img className='w-2/3' src="/Distribuidora.jpg" alt="" />
            </div>
            <p className='text-white text-center text-xl font-bold mb-4'>Sucursales Minoristas</p>
            <div className="flex flex-col md:flex-row items-center justify-evenly p-4">
                <img className="h-[300px] w-full md:w-auto mb-4 md:mb-0" src="/resistencia.png" alt="resistencia" />
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7081.692882312041!2d-58.996163!3d-27.442896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450c64169246ff%3A0x266ed13a8dbb432a!2sAv.%2025%20de%20Mayo%201063%2C%20H3506KJP%20Resistencia%2C%20Chaco%2C%20Argentina!5e0!3m2!1ses!2sus!4v1718314507403!5m2!1ses!2sus" width="400" height="300" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-evenly p-4">
                <img className="h-[300px] w-full md:w-auto mb-4 md:mb-0" src="/formosa.png" alt="resistencia" />
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7160.606980859387!2d-58.17992300000001!3d-26.186804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945ca5fb636f2529%3A0xbcac21c407336aeb!2sAv.%2025%20de%20Mayo%201365%2C%20P3600%20AFD%2C%20Formosa%2C%20Argentina!5e0!3m2!1ses!2sus!4v1718314960218!5m2!1ses!2sus" width="400" height="300" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
        </div>
    );
}
