// src/components/Login/LoginForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logouach from '../../assets/logo_uach.svg';
import logoinfor from '../../assets/logo-infor.png';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar los errores
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    try {
      await login(email, password); // Usa la función de login del contexto
      navigate('/home'); // Redirige al home si es exitoso
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError('Error al iniciar sesión. Verifica tus credenciales.'); // Establece el mensaje de error
    }
  };

  return (
    <div className="w-[300px] h-[460px] bg-login shadow-lg rounded-3xl flex flex-col justify-between p-10">
      <div className="flex justify-center gap-10">
        <img src={logouach} className="w-14" alt="Logo UACH" />
        <img src={logoinfor} className="w-14" alt="Logo Infor" />
      </div>
      <form className="flex flex-col space-y-3" onSubmit={handleLogin}>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1 pl-1" htmlFor="email">
            Usuario
          </label>
          <input
            className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1 pl-1" htmlFor="password">
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Mostrar mensaje de error si ocurre un problema con el login */}
        {error && <p className="text-red-500 text-xs italic">{error}</p>}

        <button
          className="bg-cream hover:bg-cream-dark text-gray-700 font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Acceder
        </button>
      </form>
      <div className="text-center text-sm mt-2">
        <a href="/auth/register" className="font-bold text-black">
          ¿Olvidó su Contraseña?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
