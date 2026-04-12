const procesarVenta = (producto, cantidad, precioUnitario) => {
    const subtotal = precioUnitario * cantidad;
    const impuesto = subtotal * 0.16;
    const total = subtotal + impuesto;
    let alertaStock = (cantidad <= 5) ? "⚠️ REABASTECER URGENTE" : "✅ Stock Suficiente";

    return {
        producto,
        total: total.toFixed(2),
        status: alertaStock,
        fecha: new Date().toLocaleString()
    };
};
module.exports = { procesarVenta };