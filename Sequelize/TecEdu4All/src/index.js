import express from 'express';
import routes from './routes.js';

class Index {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    routes() {
        this.app.use(routes);
    }

    middlewares() {
        this.app.use(express.json());
    }
}

export default new Index().app;  // A instância do Express é exportada diretamente
