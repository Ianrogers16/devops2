const path = require('path');
const express = require('express');
const cors = require('cors');
const inventoryRoutes = require('./src/routers/inventory');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir archivos estáticos (esto cargará tu index.html automáticamente al entrar a localhost:3000)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la API
app.use('/api/inventory', inventoryRoutes);

// Eliminamos el app.get('*') que causaba el PathError
// Express servirá el index.html por defecto gracias a app.use(express.static)

app.listen(PORT, () => {
    console.log(`✅ Servidor activo en: http://localhost:${PORT}`);
});