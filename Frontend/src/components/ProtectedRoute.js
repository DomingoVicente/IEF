// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from './LoadingSpinner'; // Importa el componente de carga

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    // Muestra el spinner de carga mientras se verifica el estado del usuario
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    // Si el usuario no está autenticado, redirige a la página de login
    return <Navigate to="/login" replace />;
  }

  // Si el usuario está autenticado, renderiza el componente hijo
  return children;
};

export default ProtectedRoute;
