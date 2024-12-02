// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './Layout';
import UploadPage from './components/Home/UploadPage';
import Graph from './components/Home/Graph';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound/NotFound';
import { AuthProvider } from './context/AuthContext';
import MainPage from './components/Home/MainPage';
import InactivityHandler from './components/InactivityHandler';

function App() {
  return (
    <AuthProvider>
      {/*  gestion deinactividad */}
      <InactivityHandler />
      <Router>
        <Routes>
          {/* Ruta de inicio, redirige a /login */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Ruta de login */}
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas con Layout */}
          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/home" element={<MainPage />} />
            <Route path="/UploadPage" element={<UploadPage />} />
            <Route path="/Graph" element={<Graph />} />
          </Route>

          {/* Ruta protegida para Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Ruta para 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
