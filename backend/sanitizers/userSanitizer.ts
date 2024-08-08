//define function for checks to verify username, email follows rules
//receive whole user input and then sanitize individual parameters

import { UserType } from "../types/userTypes";
import HttpException from "../utils/httpException";

export function sanitizeUser(user: UserType): UserType {
    let sanitizedUser = <UserType>{};

    sanitizedUser.username = sanitizeUsername(user.username);
    sanitizedUser.email = sanitizeEmail(user.email);
    sanitizedUser.password = sanitizePassword(user.password);
    sanitizedUser.isAdmin = sanitizeIsAdmin(user.isAdmin);

    //console.log(sanitizedUser);

    return sanitizedUser;
}

function sanitizeUsername(username: string): string {

    return username;
}

function sanitizeEmail(email: string): string {

    return email;
}

function sanitizePassword(password: string): string {

    return password;
}

function sanitizeIsAdmin(isAdmin: boolean): boolean {

    return isAdmin;
}
