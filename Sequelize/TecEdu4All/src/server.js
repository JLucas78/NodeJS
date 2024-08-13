import app from './index.js';  // A instância do Express já está sendo exportada como `app`

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {  // Agora você chama `listen` diretamente em `app`
    console.log(`Server running on port ${PORT}`);
});
