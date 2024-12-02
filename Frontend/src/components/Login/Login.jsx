// src/components/Login/Login.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LoginForm from './LoginForm';
import uachImage from '../../assets/uach.jpg';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      // Redirige al usuario a /home si ya está autenticado
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return !isAuthenticated ? (
    <div className="max-h-screen overflow-hidden bg-cream">
      {/* Disposición en 3 columnas: Login, Separator, Img */}
      <div className="flex flex-col lg:grid lg:grid-cols-[63%_2%_35%] gap-0">
        {/* Caja de Login */}
        <div className="flex justify-center min-h-screen bg-cream p-20 pt-[20%]">
          <LoginForm />
        </div>

        {/* Separador */}
        <div className="flex justify-center bg-white">
          {/* Barra vertical que separa */}
          <div className="h-full w-full ml-auto bg-login"></div>
        </div>

        {/* Imagen */}
        <div className="hidden lg:block bg-gray-200 h-full w-full">
          <img
            src={uachImage}
            alt="Login background"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  ) : null; // Muestra el formulario solo si no está autenticado
};

export default Login;
