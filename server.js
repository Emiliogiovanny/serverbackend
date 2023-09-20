const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('¡Hola! Este es mi servidor backend.');
});

app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}`);
});
