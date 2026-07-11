import express from 'express';

const app = express(); 
const port = process.env.PORT || 3000;

app.get('/', (req, res) => { 
res.send('¡Servidor activo y funcionando correctamente!'); 
});

// Esta sección se simplificó para evitar errores de sintaxis 
app.listen(port, () => { 
console.log('Servidor corriendo'); 
});
