import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const registerWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/'); // Redirige al usuario a la página principal después de registrarse
    } catch (error) {
      console.error("Error al registrarse con Google:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Registrarse</h2>
      <button
        onClick={registerWithGoogle}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Registrarse con Google
      </button>
    </div>
  );
};

export default Register;
