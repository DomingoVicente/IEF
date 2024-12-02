// Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="flex justify-between bg-[#C1E1C1] p-4">
      <ul className="flex space-x-20 pl-20">
        <li>
          <Link
            to="/home"
            className={`text-lg font-semibold text-[#2F4F4F] ${currentPath === '/home' ? 'active' : ''}`}
            onClick={(e) => {
              if (currentPath === '/home') {
                e.preventDefault();
              }
            }}
          >
            Página Principal
          </Link>
        </li>
        <li>
          <Link
            to="/UploadPage"
            className={`text-lg font-semibold text-[#2F4F4F] ${currentPath === '/UploadPage' ? 'active' : ''}`}
            onClick={(e) => {
              if (currentPath === '/UploadPage') {
                e.preventDefault();
              }
            }}
          >
            Archivos Subidos
          </Link>
        </li>
        <li>
          <Link
            to="/Graph"
            className={`text-lg font-semibold text-[#2F4F4F] ${currentPath === '/Graph' ? 'active' : ''}`}
            onClick={(e) => {
              if (currentPath === '/Graph') {
                e.preventDefault();
              }
            }}
          >
            Gráficos Generados
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
