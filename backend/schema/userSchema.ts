import { Schema } from "mongoose";
import { UserType } from "../types/userTypes";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export interface IUserSchema extends UserType {
    _id: String,
}

const userSchema = new Schema<IUserSchema>(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true,

        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unqiue: true,
            min: [3, 'Email must be at least 3 characters'],
            max: [320, 'Email must be less than 320'],
            match: [emailRegex, 'Email is not valid'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            min: [10, 'Password must be at least 10 characters'],
            max: [255, 'Password must be less than 255 characters']
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        resetPasswordToken: String,
        resetPasswordExpires: Date,
    },
    {
        timestamps: true,
    }
);

export default userSchema;