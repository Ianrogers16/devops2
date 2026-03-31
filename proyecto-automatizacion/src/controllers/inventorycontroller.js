// Simulación de una función que automatiza el cálculo de impuestos y stock
const procesarVenta = (producto, cantidad, precioUnitario) => {
    const IVA = 0.16;
    const subtotal = precioUnitario * cantidad;
    const impuesto = subtotal * IVA;
    const total = subtotal + impuesto;

    // Lógica automática: Si el stock es bajo, marcar una alerta
    let alertaStock = (cantidad <= 5) ? "REABASTECER URGENTE" : "Stock Suficiente";

    return {
        producto,
        cantidad,
        subtotal: subtotal.toFixed(2),
        impuesto: impuesto.toFixed(2),
        total: total.toFixed(2),
        status: alertaStock,
        fechaProcesado: new Date().toLocaleString()
    };
};

module.exports = { procesarVenta };