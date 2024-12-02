// src/components/LoadingSpinner.js
import React from 'react';
import logoinfor from '../assets/logo-infor.png';
import '../styles/index.css'

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img 
        src={logoinfor} 
        className="w-14" 
        alt="Logo Infor" 
      />
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;