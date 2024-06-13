import React from 'react';
import NavBar from '../components/NavBar';

export default function Contacto() {
    return (
        <div>
            <NavBar />   
            <div className="bg-blue-900 mt-16 flex flex-col items-center justify-center text-center py-20">
                <h1 className="text-white text-3xl font-bold mb-4">Lo sentimos, estamos en construcción. ¡Volveremos en breve!</h1>
                <p className="text-white text-lg mb-8">Estamos trabajando para que tengas una buena experiencia en nuestra web.</p>
                <img src="/architect-96.svg" alt="construccion" className="w-64 h-64" />
            </div>
        </div>
    );
}
