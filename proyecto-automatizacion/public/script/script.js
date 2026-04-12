document.getElementById('btn-procesar').addEventListener('click', async () => {
    // 1. Captura de valores desde el HTML
    const producto = document.getElementById('prod').value;
    const cantidad = document.getElementById('cant').value;
    const precio = document.getElementById('prec').value;
    const resDiv = document.getElementById('resultado');

    // Validación simple
    if (!producto || !cantidad || !precio) {
        alert("Por favor, llena todos los campos");
        return;
    }

    try {
        // 2. Envío de datos al servidor Node.js
        const response = await fetch('/api/inventory/vender', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                producto: producto, 
                cantidad: parseInt(cantidad), 
                precio: parseFloat(precio) 
            })
        });

        const resJSON = await response.json();
        
        // Verificamos que el servidor respondió correctamente
        if (resJSON.data) {
            const info = resJSON.data;

            // 3. Insertamos el resultado en el div con el diseño de la tarjeta
            resDiv.innerHTML = `
                <div class="res-card">
                    <h3 style="color: #3468ff; margin: 0;">Total: $${info.total}</h3>
                    <p style="margin: 10px 0; color: #1e293b;">${info.status}</p>
                    <small style="color: #64748b;">${info.fecha}</small>
                </div>
            `;
        }

    } catch (e) {
        console.error("Error en la conexión:", e);
        resDiv.innerHTML = "<p style='color:red;'>Error al conectar con el servidor</p>";
    }
});