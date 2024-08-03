// Import express
const express = require('express');
// Criando uma instância
const app = express();

// Localhost 3000
app.listen(3000);

app.get('/', (request, response) => {
   return response.json({ message: 'Hello World com JSON!' });
})