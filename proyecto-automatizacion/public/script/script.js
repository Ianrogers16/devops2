
async function procesar() {
            const producto = document.getElementById('prod').value.trim();
            const cantidad = parseInt(document.getElementById('cant').value, 10);
            const precio = parseFloat(document.getElementById('prec').value);
            const resultado = document.getElementById('resultado');

            if (!producto || Number.isNaN(cantidad) || Number.isNaN(precio)) {
                resultado.innerHTML = '<p class="alerta">Por favor completa todos los campos con valores válidos.</p>';
                return;
            }

            try {
                const baseUrl = (location.protocol === 'http:' || location.protocol === 'https:')
                    ? `${location.protocol}//${location.hostname}:3000`
                    : 'http://localhost:3000';

                const response = await fetch(`${baseUrl}/api/inventory/vender`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ producto, cantidad, precio })
                });

                const text = await response.text();
                let res;

                try {
                    res = text ? JSON.parse(text) : null;
                } catch (parseError) {
                    resultado.innerHTML = `<p class="alerta">Error: respuesta inválida del servidor (${response.status}).</p>`;
                    return;
                }

                if (!response.ok) {
                    resultado.innerHTML = `<p class="alerta">Error: ${res?.error || response.statusText || 'No se pudo procesar la solicitud.'}</p>`;
                    return;
                }

                const info = res?.data;
                if (!info) {
                    resultado.innerHTML = '<p class="alerta">Error: la respuesta del servidor no contiene datos válidos.</p>';
                    return;
                }

                resultado.innerHTML = `
                    <p><strong>Producto:</strong> ${info.producto}</p>
                    <p><strong>Subtotal:</strong> $${info.subtotal}</p>
                    <p><strong>IVA (16%):</strong> $${info.impuesto}</p>
                    <p style="font-size: 1.2em;"><strong>TOTAL: $${info.total}</strong></p>
                    <p><strong>Estado:</strong> <span class="alerta">${info.status}</span></p>
                    <small>Procesado: ${info.fechaProcesado}</small>
                `;
            } catch (error) {
                resultado.innerHTML = `<p class="alerta">Error de conexión: ${error.message}</p>`;
            }
        }
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    // Alterna la clase active para el menú y el botón
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }
});