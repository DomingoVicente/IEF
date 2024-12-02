const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./src/routes/routes');
const { errorHandler } = require('./src/middleware/middleware');

const app = express();

app.use(cors({
    origin: 'http://localhost:3009' // Asume que tu frontend corre en el puerto 3009
}));

app.use(express.json());

// Rutas
app.use('/api', uploadRoutes);

// Manejador de errores
app.use(errorHandler);

const PORT = process.env.PORT || 4009;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
