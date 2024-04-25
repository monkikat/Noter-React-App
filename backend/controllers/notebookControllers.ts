import {Request, Response} from 'express';

const getNotebooks = (req: Request, res: Response) => {
    res.json({
        message: 'get all notebooks'
    });
};

const createNotebook = (req: Request, res: Response) => {
    if (!req.body.title) {
        res.status(400);
        throw new Error('Title is required');
    }
    res.json({
        message: 'create a notebook'
    });
};

const getNotebook = (req: Request, res: Response) => {
    res.json({
        message: `get notebook ${req.params.id}`
    });
};

const updateNotebook = (req: Request, res: Response) => {
    res.json({
        message: `update notebook ${req.params.id}`
    }); 
};

const deleteNotebook = (req: Request, res: Response) => {
    res.json({
        message: `delete notebook ${req.params.id}`
    });
};


module.exports = {
    getNotebooks,
    createNotebook,
    getNotebook,
    updateNotebook,
    deleteNotebook,
};
