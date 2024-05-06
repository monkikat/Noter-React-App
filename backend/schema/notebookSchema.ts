import { Schema } from "mongoose";
import { NotebookType } from "../types/notebookTypes";

export interface INotebookSchema extends NotebookType {
    _id: string;
}

const notebookSchema = new Schema<INotebookSchema>(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

export default notebookSchema;