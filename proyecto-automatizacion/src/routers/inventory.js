const express = require('express');
const router = express.Router();
const { procesarVenta } = require('../controllers/inventorycontroller'); // OJO: Verifica si el archivo termina en C o c minúscula

// Ruta para automatizar el cálculo de una nueva venta
router.post('/vender', (req, res) => {
    const { producto, cantidad, precio } = req.body;

    if (!producto || !cantidad || !precio) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    const resultado = procesarVenta(producto, cantidad, precio);
    
    res.json({
        mensaje: "Proceso automatizado con éxito",
        data: resultado
    });
});

module.exports = router;