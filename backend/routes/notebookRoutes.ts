import * as express from 'express';
import {Router, Request, Response} from 'express';

const routes: Router = express.Router();

routes.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'get all notebooks'
    });
});

routes.post('/', (req: Request, res: Response) => {
    res.json({
        message: 'create a notebook'
    });
});

routes.get('/:id', (req: Request, res: Response) => {
    res.json({
        message: `get notebook ${req.params.id}`
    });
});

routes.put('/:id', (req: Request, res: Response) => {
    res.json({
        message: `update notebook ${req.params.id}`
    });
});

routes.delete('/:id', (req: Request, res: Response) => {
    res.json({
        message: `delete notebook ${req.params.id}`
    });
});

module.exports = routes;
