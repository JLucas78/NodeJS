import { Router } from 'express';

const routes = Router();  // Cria uma nova instância do roteador do Express

routes.get('/', (req, res) => {
    return res.json({ message: "OK, it's working" });  // Define uma rota GET na raiz ('/') que retorna um JSON como resposta
});

routes.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send({ email , password });
});

export default routes;  // Exporta as rotas definidas para serem usadas no servidor
