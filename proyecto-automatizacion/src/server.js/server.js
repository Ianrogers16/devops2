const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Para poder recibir datos en formato JSON

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor de Automatización de Inventario Corriendo 🚀');
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});