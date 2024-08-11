import express from 'express';
import routes from './routes';

class Index {
    constructor() {
        this.app = express();
        this.routes();
        this.middlewares();
    }

    routes() {
        this.app.use(routes);
    }

    middlewares() {
        this.app.use(express.json());
    }
}

export default new Index().app;
