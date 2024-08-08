//define functions implementing functionality requested from controller
//getUser
//call sanitize and valid object id check
//throw error

import { checkValidObjectId } from "../database/db";
import UserModel from "../models/userModel";
import { sanitizeUser } from "../sanitizers/userSanitizer";
import { IUserSchema } from "../schema/userSchema";
import { UserType } from "../types/userTypes";

export async function getUsers(): Promise<UserType[]> {
    try {
        const users = await UserModel.find();
        if (!users) {
            throw new Error('No users found');
        }

        return users;
    }
    catch (err) {
        throw new Error(`Error finding users: ${err.message}`);
    }
}

export async function createUser(user: UserType): Promise<UserType> {
    const sanitizedUser = sanitizeUser(user);

    try {
        const newUser = await UserModel.create(sanitizedUser);
        if (!newUser) {
            throw new Error('user could not be created');
        }

        return newUser;
    }
    catch (err) {
        throw new Error(`Error creating user: ${err.message}`);
    }
}

export async function getUser(userId: string): Promise<IUserSchema> {
    checkValidObjectId(userId);
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            throw new Error('No user found');
        }

        return user;
    }
    catch (err) {
        throw new Error(`Error finding user: ${err.message}`);
    }
}

export async function deleteUser(userId: string): Promise<void> {
    checkValidObjectId(userId);
    try {
        const deletedUser = await UserModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error('User could not be deleted');
        }

        return;
    }
    catch (err) {
        throw new Error(`Error deleting user: ${err.message}`);
    }
}

export async function updateUser(userId: string, user: UserType): Promise<IUserSchema> {
    const sanitizedUser = sanitizeUser(user);
    checkValidObjectId(userId);

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(userId, sanitizedUser, { new: true });
        if (!updatedUser) {
            throw new Error('User could not be updated');
        }

        return updatedUser;
    }
    catch (err) {
        throw new Error(`Error updating user: ${err.message}`);
    }
}