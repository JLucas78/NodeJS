import { Router } from 'express';
import bcrypt from 'bcrypt';  // Biblioteca para hash de senhas
import { body, validationResult } from 'express-validator';  // Para validação de dados

const routes = Router();

const users = [
    { id: 1, name: 'Lucas', email: 'lucas@ig.com.br', password: '$2b$10$somehashedpassword' },  // Senha deve ser um hash
];

// Middleware para validação
const validateLogin = [
    body('email').isEmail().withMessage('Email inválido'),
    body('password').isLength({ min: 4 }).withMessage('Senha deve ter pelo menos 4 caracteres'),
    body('name').notEmpty().withMessage('Nome é obrigatório'),
];

routes.post('/login', validateLogin, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, name } = req.body;
    
    // Procura um usuário que tenha o mesmo email fornecido
    const user = users.find(user => user.email === email && user.name === name);

    if (user && bcrypt.compareSync(password, user.password)) {
        return res.status(200).send({ message: `Email e senha válidos, bem-vindo ${name}` });
    }

    return res.status(401).send({ message: 'Email ou senha inválidos' });
});

export default routes;
