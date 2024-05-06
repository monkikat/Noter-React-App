import mongoose from "mongoose";
import { MONGO_URI } from "../utils/config"
import HttpException from "../utils/httpException";

export const connectDB = async () => {
    if(!MONGO_URI) {
        console.log('MONGO_URI not defined'.red.bold);
        process.exit(1);
    }
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected'.blue.bold);
    }
    catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

export function checkValidObjectId(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new HttpException(400, `${id} is not a valid id`);
    }
}