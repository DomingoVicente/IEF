// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase';

const AuthContext = createContext();

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth(app);
  
  useEffect(() => {
    // Escuchar cambios en el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsAuthenticated(true);
      } else {
        setCurrentUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false); // Cambia el estado de carga una vez que se ha verificado
    });

    // Limpiar el efecto para evitar fugas de memoria
    return () => unsubscribe();
  }, [auth]);

  // Función de inicio de sesión
  const login = async (email, password) => {
    setLoading(true); // Inicia la carga al intentar iniciar sesión
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true); // Se asume que el inicio de sesión fue exitoso
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      throw new Error(error.message); // Lanza el error para ser manejado en el componente
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };

  // Función de cierre de sesión
  const logout = async () => {
    setLoading(true); // Inicia la carga al intentar cerrar sesión
    try {
      await signOut(auth);
      setIsAuthenticated(false); // Actualiza el estado de autenticación
      setCurrentUser(null); // Limpia el usuario actual
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading, currentUser }}>
      {children} {/* Muestra un mensaje de carga si es necesario */}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};