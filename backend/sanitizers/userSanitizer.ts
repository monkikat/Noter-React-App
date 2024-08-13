//define function for checks to verify username, email follows rules
//receive whole user input and then sanitize individual parameters

import { UserType } from "../types/userTypes";
import { emailRegex } from "../schema/userSchema";
import HttpException from "../utils/httpException";

export function sanitizeUser(user: UserType): UserType {
    let sanitizedUser = <UserType>{};

    sanitizedUser.username = sanitizeUsername(user.username);
    sanitizedUser.email = sanitizeEmail(user.email);
    sanitizedUser.isAdmin = sanitizeIsAdmin(user.isAdmin);
    sanitizedUser.password = user.password;

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

function sanitizeEmail(email: string): string {
    //types
    if (email === undefined) {
        throw new HttpException(400, 'Email is undefined');
    }
    if (typeof email !== 'string') {
        throw new HttpException(400, 'Username is not a string');
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
