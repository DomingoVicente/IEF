// src/components/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold">404</h1>
    <p className="text-lg">Página no encontrada</p>
    <Link to="/" className="mt-4 text-blue-500 hover:underline">
      Volver al inicio
    </Link>
  </div>
);

export default NotFound;
