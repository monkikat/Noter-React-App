import { Request, Response } from 'express';
const asyncHandler = require('express-async-handler');

import { createNotebook, deleteNotebook, getNotebook, getNotebooks, updateNotebook } from '../services/notebookServices';


const getNotebooksHandler = asyncHandler(async (req: Request, res: Response) => {
    const notebooks = await getNotebooks();
    res.status(200).json(notebooks);
});


const createNotebookHandler = asyncHandler(async (req: Request, res: Response) => {
    const createdNotebook = await createNotebook(req.body);

    res.status(201).json(createdNotebook);
});


const getNotebookHandler = asyncHandler(async (req: Request, res: Response) => {
    const notebook = await getNotebook(req.params.id);
    res.status(200).json(notebook);
});


const deleteNotebookHandler = asyncHandler(async (req: Request, res: Response) => {
    await deleteNotebook(req.params.id);

    res.status(200).json({
        message: `Notebook ${req.params.id} deleted`,
    });
});


const updateNotebookHandler = asyncHandler(async (req: Request, res: Response) => {
    const notebook = await updateNotebook(req.params.id, req.body);

    res.status(200).json(notebook);
});


module.exports = {
    getNotebooksHandler,
    createNotebookHandler,
    getNotebookHandler,
    updateNotebookHandler,
    deleteNotebookHandler,
};
