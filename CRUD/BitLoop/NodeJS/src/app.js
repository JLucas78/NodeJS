import app from './server.js';  // Importa a instância configurada do Express

const PORT = process.env.PORT || 3000;  // Define a porta em que o servidor vai rodar, usando a variável de ambiente ou 3000 como fallback

app.listen(PORT, () => {  // Inicia o servidor e faz com que ele comece a "escutar" as requisições na porta definida
    console.log(`Server running on port ${PORT}`);  // Loga no console que o servidor está rodando
});
