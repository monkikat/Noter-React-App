import {Request, Response} from 'express';
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

import NotebookModel from '../models/notebookModel';

const getNotebooks = asyncHandler (async (req: Request, res: Response) => {
    const notebooks = await NotebookModel.find();
    res.status(200).json(notebooks);
});

const createNotebook = asyncHandler (async (req: Request, res: Response) => {
    if (!req.body.title) {
        res.status(400);
        throw new Error('Title is required');
    }

    const notebook = await NotebookModel.create(req.body);
    if (!notebook) {
        res.status(400);
        throw new Error('Notebook not created');
    }
    res.status(201).json(notebook);
});

const getNotebook = asyncHandler (async (req: Request, res: Response) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400)
        throw new Error(`${req.params.id} is not a valid id`);
    }
    const notebook = await NotebookModel.findById(req.params.id);
    if (!notebook) {
        res.status(404);
        throw new Error(`Notebook not found`);
    }
    res.status(200).json(notebook);
});

const deleteNotebook = asyncHandler (async (req: Request, res: Response) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400)
        throw new Error(`${req.params.id} is not a valid id`);
    }
    const notebook = await NotebookModel.findByIdAndDelete(req.params.id);
    if (!notebook) {
        res.status(404);
        throw new Error(`Notebook not found`);
    }
    res.status(200).json({
        message: `Notebook ${req.params.id} deleted`,
        notebook: notebook,
    });
});

const updateNotebook = asyncHandler (async (req: Request, res: Response) => {
    if (!req.body.title) {
        res.status(400);
        throw new Error('Title is required');
    }
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error(`${req.params.id} is not a valid id`);
    }
    const notebook = await NotebookModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!notebook) {
        res.status(404);
        throw new Error(`Notebook not found`);
    }
    res.status(200).json(notebook);
});


module.exports = {
    getNotebooks,
    createNotebook,
    getNotebook,
    updateNotebook,
    deleteNotebook,
};
