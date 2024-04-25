import { NextFunction, Request, Response } from "express";
import HttpException from "../utils/httpException";
import { NODE_ENV } from "../utils/config";

export const errorHandler = (
    err: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.status || 500;
    const message = err.message || 'something went wrong';
    
    res.status(status).json({
        message: message,
        stack: NODE_ENV == 'development' ? err.stack : null,
    })
}
