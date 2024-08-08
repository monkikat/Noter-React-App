import { model } from "mongoose";
import notebookSchema, { INotebookSchema } from "../schema/notebookSchema";

const NotebookModel = model<INotebookSchema>("Notebook", notebookSchema);

export default NotebookModel;
