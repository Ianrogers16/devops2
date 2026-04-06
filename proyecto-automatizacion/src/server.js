const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const inventoryRoutes = require('./routers/inventory');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Rutas de la API
app.use('/api/inventory', inventoryRoutes);

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Respuesta JSON para rutas API no encontradas
app.use('/api', (req, res) => {
    res.status(404).json({ error: 'Ruta de API no encontrada.' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});