const express = require('express');
const router = express.Router();
const { procesarVenta } = require('../controllers/inventorycontroller');

router.post('/vender', (req, res) => {
    const { producto, cantidad, precio } = req.body;
    const resultado = procesarVenta(producto, cantidad, precio);
    res.json({ data: resultado });
});
module.exports = router;