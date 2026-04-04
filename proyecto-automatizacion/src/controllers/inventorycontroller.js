/**
 * LÓGICA DE AUTOMATIZACIÓN: 
 * Este controlador procesa los datos de entrada sin intervención humana
 * para generar cálculos fiscales y estados de inventario.
 */
const procesarVenta = (producto, cantidad, precioUnitario) => {
    // 1. Automatización de cálculo de IVA (16% fijo)
    const IVA_FACTOR = 0.16;
    const subtotal = precioUnitario * cantidad;
    const impuesto = subtotal * IVA_FACTOR; 
    const total = subtotal + impuesto;

    // 2. Lógica automática de toma de decisiones (Stock Alert)
    // Se ejecuta automáticamente según la lógica de negocio definida
    let alertaStock = (cantidad <= 5) ? "⚠️ REABASTECER URGENTE" : "✅ Stock Suficiente";

    return {
        producto,
        cantidad,
        subtotal: subtotal.toFixed(2),
        impuesto: impuesto.toFixed(2),
        total: total.toFixed(2),
        status: alertaStock,
        fechaProcesado: new Date().toLocaleString() // Timestamp automático
    };
};

module.exports = { procesarVenta };