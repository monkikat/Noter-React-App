//define function for checks to verify username, email follows rules
//receive whole user input and then sanitize individual parameters

import { UserType } from "../types/userTypes";
import { emailRegex } from "../schema/userSchema";
import HttpException from "../utils/httpException";
import UserModel from "../models/userModel";

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function sanitizeUser(user: UserType): Promise<UserType> {
    let sanitizedUser = <UserType>{};

    sanitizedUser.username = sanitizeUsername(user.username);
    sanitizedUser.email = await sanitizeEmail(user.email);
    sanitizedUser.isAdmin = sanitizeIsAdmin(user.isAdmin);
    sanitizedUser.password = await sanitizePassword(user.password);

    return sanitizedUser;
}

export async function sanitizeUserLogin(email: string, password: string): Promise<UserType> {
    let sanitizedUser = <UserType>{};

    sanitizedUser.email = sanitizeLoginEmail(email);
    sanitizedUser.password = await sanitizePassword(password);

    return sanitizedUser;
}

function sanitizeUsername(username: string): string {
    //types
    if (username === undefined) {
        throw new HttpException(400, 'Username is undefined');
    }
    if (typeof username !== 'string') {
        throw new HttpException(400, 'Username is not a string');
    }

    //attributes
    username = username.trim();
    return username;
}

async function sanitizeEmail(email: string): Promise<string> {
    //types
    if (email === undefined) {
        throw new HttpException(400, 'Email is undefined');
    }
    if (typeof email !== 'string') {
        throw new HttpException(400, 'Email is not a string');
    }

    //attributes
    email = email.trim();
    const emailLength = email.length;

    const user = await UserModel.findOne({ email });
    if (user) {
        throw new HttpException(400, 'Duplicate email, account with this email already exists')
    }

    if (emailLength < 3) {
        throw new HttpException(400, 'Email must be atleast 3 characters');
    }
    if (emailLength > 320) {
        throw new HttpException(400, 'Email must be shorter than 320 characters');
    }
    if (!email.match(emailRegex)) {
        throw new HttpException(400, 'Email is not valid');
    }

    return email;
}

function sanitizeLoginEmail(email: string): string {
    //types
    if (email === undefined) {
        throw new HttpException(400, 'Email is undefined');
    }
    if (typeof email !== 'string') {
        throw new HttpException(400, 'Email is not a string');
    }

    //attributes
    email = email.trim();
    const emailLength = email.length;

    if (emailLength < 3) {
        throw new HttpException(400, 'Email must be atleast 3 characters');
    }
    if (emailLength > 320) {
        throw new HttpException(400, 'Email must be shorter than 320 characters');
    }
    if (!email.match(emailRegex)) {
        throw new HttpException(400, 'Email is not valid');
    }

    return email;
}

function sanitizeIsAdmin(isAdmin: boolean): boolean {
    if (!isAdmin) isAdmin = false;

    return isAdmin;
}

async function sanitizePassword(password: string): Promise<string> {
    //types
    if (password === undefined) {
        throw new HttpException(400, 'Password is undefined');
    }

    if (typeof password !== 'string') {
        throw new HttpException(400, 'Password is not a string');
    }

    //attributes
    password = password.trim();
    const passwordLength = password.length;

    if (passwordLength < 10) {
        throw new HttpException(400, 'Password must be at least 10 characters long');
    }

    if (passwordLength > 255) {
        throw new HttpException(400, 'Password is too long, must be less than 255 characters');
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;

}
