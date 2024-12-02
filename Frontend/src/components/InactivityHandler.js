// src/components/InactivityHandler.js
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const InactivityHandler = () => {
  const { logout } = useAuth();

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        logout(); // Cerrar sesión automáticamente tiempo  de inactividad
      }, 3000 * 1000); // 30 segundos en milisegundos
      ///*15 * 60 * 1000); // 15 minutos en milisegundos*
    };

    const events = ["click", "mousemove", "keypress", "scroll", "keydown"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer(); // Inicializar el timer al cargar la página

    return () => {
      clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [logout]);

  return null; // No necesita renderizar nada
};

export default InactivityHandler;
