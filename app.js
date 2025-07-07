const express = require('express');
const app = express();
const PORT = 8080;

// Ruta de prueba
app.get('/', (req, res) =>{
    res.send('Estoy escuchando tu solicitud');
})

// Iniciar el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en: http://localhost:${PORT}`)
})