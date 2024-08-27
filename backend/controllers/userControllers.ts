//define db interacting functions
//getUserHandler
//call services for implementing functionality
//log response to show in postman

import { Request, Response } from 'express';
const asyncHandler = require('express-async-handler');

import { loginUser, getUsers, createUser, getUser, updateUser, deleteUser } from '../services/userServices';

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const user = await loginUser(req.body.email, req.body.password);

    res.status(201).json(user);
});

//@desc Get all users
//@route GET /api/users
//@access public
const getUsersHandler = asyncHandler(async (req: Request, res: Response) => {
    const users = await getUsers();

    res.status(200).json(users);
});

//@desc create a user
//@route POST /api/users
//@access public
const createUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const createdUser = await createUser(req.body);

    res.status(201).json(createdUser);
});

//@desc Get a users
//@route GET /api/users/:id
//@access public
const getUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const user = await getUser(req.params.id);

    res.status(200).json(user);
});

//@desc Delete a users
//@route DELETE /api/users/:id
//@access Private
const deleteUserHandler = asyncHandler(async (req: Request, res: Response) => {
    await deleteUser(req.params.id);

    res.status(200).json({
        message: `User ${req.params.id} deleted`,
    });
});

//@desc Update a user
//@route POST /api/users/:id
//@access Private
const updateUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const user = await updateUser(req.params.id, req.body);

    res.status(200).json(user);
});


module.exports = {
    loginUserHandler,
    getUsersHandler,
    createUserHandler,
    getUserHandler,
    updateUserHandler,
    deleteUserHandler,
};
