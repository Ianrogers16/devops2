const express = require('express');
const cors = require('cors');
require('dotenv').config();

const inventoryRoutes = require('./routers/inventory'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); 

// Rutas de la API
app.use('/api/inventory', inventoryRoutes);

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.send('Servidor de Automatización de Inventario Corriendo 🚀');
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});