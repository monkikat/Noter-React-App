//define db interacting functions
//getUserHandler
//call services for implementing functionality
//log response to show in postman

import { Request, Response } from 'express';
const asyncHandler = require('express-async-handler');

import { getUsers, createUser, getUser, updateUser, deleteUser } from '../services/userServices';

const getUsersHandler = asyncHandler(async (req: Request, res: Response) => {

    const users = await getUsers();

    res.status(200).json(users);

});


const createUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const createdUser = await createUser(req.body);

    res.status(201).json(createdUser);
});


const getUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const user = await getUser(req.params.id);
    res.status(200).json(user);
});


const deleteUserHandler = asyncHandler(async (req: Request, res: Response) => {
    await deleteUser(req.params.id);

    res.status(200).json({
        message: `User ${req.params.id} deleted`,
    });
});


const updateUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const user = await updateUser(req.params.id, req.body);

    res.status(200).json(user);
});


module.exports = {
    getUsersHandler,
    createUserHandler,
    getUserHandler,
    updateUserHandler,
    deleteUserHandler,
};
