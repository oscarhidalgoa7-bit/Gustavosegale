import express from 'express';

const app = express(); 
// Render asigna automáticamente un puerto en la variable de entorno PORT 
const port = process.env.PORT || 3000;

// Una ruta simple para verificar que funciona 
app.get('/', (req, res) => { 
res.send('¡Hola! Tu servidor en Render está vivo y funcionando correctamente.'); 
});

// Esto mantiene la aplicación escuchando peticiones y evita el error 127 
app.listen(port, () => { 
console.log(Servidor corriendo en el puerto ${port}); 
});
