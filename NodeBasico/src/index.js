// Import express
const express = require('express');
// Criando uma instância
const app = express();


// Acesssando uma informação
app.get('/courses', (request, response) => {
   return response.json(["Curso Javascript", "Curso Spring Boot", "Curso Angular"]);
});

// inserindo uma informação
app.post('/courses', (request, response) => {
   return response.json(["Curso Javascript", "Curso Spring Boot", "Curso Angular" , "Curso C++" , "Curso Java"]);
});

app.put('/courses/:id', (request, response) => {
   return response.json(["Curso Javascript e Typescript", "Curso Spring Boot", "Curso Angular" , "Curso C++" , "Curso Java"]);
});

app.patch('/courses/:id', (request, response) => {
   return response.json(["Curso Javascript e Typescript", "Curso Spring Boot", "Curso React" , "Curso C++" , "Curso Unity 3D"]);
});

app.delete('/courses/:id', (request, response) => {
   return response.json(["Curso Javascript e Typescript", "Curso Spring Boot", "Curso React" , "Curso Unity 3D"]);
});

// Localhost 3000
app.listen(3000);