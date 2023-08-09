const express = require('express');
const path = require('path');

const app = express();

// Define la carpeta de distribución de la aplicación Angular
const distFolder = path.join(__dirname, 'dist', 'Portafolio'); // Reemplaza 'nombre-de-tu-app' con el nombre real de tu aplicación

// Configura el middleware para servir los archivos estáticos
app.use(express.static(distFolder));

// Configura una ruta para manejar todas las demás solicitudes y redirigirlas a la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});

// Inicia el servidor en el puerto deseado
const port = process.env.PORT || 3000; // Obtén el puerto de una variable de entorno o usa el puerto 3000 por defecto
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
