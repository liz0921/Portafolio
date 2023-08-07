 
const express = require('express');
const cors = require('cors');
//const sgMail = require('@sendgrid/mail');
const app = express();
const port = 3000;

// Configurar CORS para permitir solicitudes desde http://localhost:4200
const allowedOrigins = ['http://localhost:4200'];
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
// sgMail.setApiKey('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'); 
// // Endpoint para enviar correos a través de SendGrid
// app.post('/send-email', (req, res) => {
//     const { to, subject, body } = req.body;
  
//     const msg = {
//       to,
//       from: 'lizmonram@gmail.com', // Reemplaza con tu dirección de remitente
//       subject,
//       text: body,
//     };
  
//     sgMail
//       .send(msg)
//       .then(() => {
//         console.log('Correo enviado');
//         res.status(200).json({ message: 'Correo enviado correctamente' });
//       })
//       .catch((error) => {
//         console.error('Error al enviar el correo:', error);
//         res.status(500).json({ error: 'Error al enviar el correo' });
//       });
//   });
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
