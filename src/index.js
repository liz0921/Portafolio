const express = require('express');
const app = express();

const port = process.env.PORT || 3000; // Obtener el puerto de una variable de entorno o usar el puerto 3000 por defecto
app.listen(port, '0.0.0.0', () => {
  console.log(`App is listening at 0.0.0.0:${port}`);
});
