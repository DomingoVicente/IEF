/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Escanea todos los archivos dentro de la carpeta src
  ],
  theme: {
    extend: {
      // Puedes extender o modificar el tema de Tailwind aquí.
      colors: {
        customBlue: '#1E3A8A', // Añade un color personalizado como ejemplo
        cream: '#CDD2AF',
        login:'#FDFAE1',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Ejemplo de una animación personalizada
      },
    },
  },
  plugins: [],
};