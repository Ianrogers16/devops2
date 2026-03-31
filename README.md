# 🚀 Sistema de Automatización de Inventario (DevOps 2)

Este proyecto es una aplicación web full-stack desarrollada en **Node.js** diseñada para automatizar la gestión de stock y cálculos financieros de un inventario en tiempo real. 

El sistema permite procesar entradas de productos, calcular automáticamente el **IVA (16%)**, el **Total** y generar alertas inteligentes de reabastecimiento basadas en la lógica de negocio.

## 🛠️ Tecnologías Utilizadas

* **Backend:** Node.js, Express.js
* **Middleware:** CORS, Dotenv
* **Frontend:** HTML5, CSS3 (Tailwind CSS), JavaScript (Fetch API)
* **Control de Versiones:** Git & GitHub

## 📂 Estructura del Proyecto

```text
/proyecto-automatizacion
  ├── /public           # Interfaz de usuario (Frontend)
  │   └── index.html    # Panel de control visual
  ├── /src              # Código fuente (Backend)
  │   ├── /controllers  # Lógica de automatización y cálculos
  │   ├── /routers      # Definición de rutas de la API
  │   └── server.js     # Punto de entrada del servidor
  ├── .env              # Variables de entorno
  ├── .gitignore        # Archivos excluidos de Git
  └── package.json      # Dependencias del proyecto
