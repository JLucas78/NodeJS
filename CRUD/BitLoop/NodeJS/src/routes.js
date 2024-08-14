import { Router } from 'express';
const routes = Router();

const users = [
    { id: 1, name: 'Lucas', email: 'jardellucas078@gmail.com', password: '06102000Luc@s' },
    { id: 2, name: 'João', email: 'joao@example.com', password: 'Senha123!' },
    { id: 3, name: 'Maria', email: 'maria@example.com', password: 'Senha456@' },
    { id: 4, name: 'Ana', email: 'ana@example.com', password: 'Ana@7890' },
    { id: 5, name: 'Carlos', email: 'carlos@example.com', password: 'Carlos@1234' },
    { id: 6, name: 'Fernanda', email: 'fernanda@example.com', password: 'Fernanda@5678' },
    { id: 7, name: 'Roberto', email: 'roberto@example.com', password: 'R0berto@999' },
    { id: 8, name: 'Patricia', email: 'patricia@example.com', password: 'Patricia@000' },
    { id: 9, name: 'Gabriel', email: 'gabriel@example.com', password: 'Gabriel@1115' },
    { id: 10, name: 'Bruna', email: 'bruna@example.com', password: 'Bruna@22229' }
];


routes.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(400).json({ error: 'Usuário ou senha inválido' });
    }

    return res.json({
        message: 'Login efetuado com sucesso',
        user: { id: user.id, name: user.name, email: user.email }
    });
});

routes.get('/login', (req, res) => {
    return res.json(users);
});

export default routes;
