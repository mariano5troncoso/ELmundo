import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from "../FirebaseConfig";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/'); // Redirige al usuario a la página principal después de iniciar sesión
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
      <button
        onClick={signInWithGoogle}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;
