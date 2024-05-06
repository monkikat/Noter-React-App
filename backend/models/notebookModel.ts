import { model } from "mongoose";
import notebookSchema, { INotebookSchema } from "../schema/notebookSchema";

const NotebookModel = model<INotebookSchema>("Notebook", notebookSchema);

export default NotebookModel;
/*

const mongoose = require('mongoose');

const notebookSchema = mongoose.Schema(
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

module.exports = mongoose.models.Notebook || mongoose.model('Notebook', notebookSchema);
*/