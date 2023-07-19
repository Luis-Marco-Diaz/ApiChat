const express = require('express');
require('dotenv').config()

const userRoutes = require('./routes/user.routes');
const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(userRoutes);

app.get('/', (req, res ) => {
res.send('Bienvenido a mi server');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
});