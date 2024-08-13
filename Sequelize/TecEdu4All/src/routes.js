import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: "OK, it's working" });
});

export default routes;
