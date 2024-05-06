import { checkValidObjectId } from "../database/db";
import NotebookModel from "../models/notebookModel";
import { INotebookSchema } from "../schema/notebookSchema";
import { NotebookType } from "../types/notebookTypes";

export async function getNotebooks(): Promise<NotebookType[]> {
    try {
        const notebooks = await NotebookModel.find();
        if(!notebooks) {
            throw new Error('No projects found');
        }

        return notebooks;
    }
    catch (err) {
        throw new Error('Error finding projects');
    }
}

export async function createNotebook(notebook: NotebookType): Promise<NotebookType> {
    try {
        const newNotebook = await NotebookModel.create(notebook);
        if(!newNotebook) {
            throw new Error('Notebook could not be created');
        }

        return newNotebook;
    }
    catch (err) {
        throw new Error('Error creating notebook');
    }
}

export async function getNotebook(notebookId: string): Promise<INotebookSchema> {
    checkValidObjectId(notebookId);
    try {
        const notebook = await NotebookModel.findById(notebookId);
        if(!notebook) {
            throw new Error('No notebook found');
        }

        return notebook;
    }
    catch (err) {
        throw new Error('Error finding notebook');
    }
}

export async function deleteNotebook(notebookId: string): Promise<void> {
    checkValidObjectId(notebookId);
    try {
        const deletedNotebook = await NotebookModel.findByIdAndDelete(notebookId);
        if(!deletedNotebook) {
            throw new Error('Notebook could not be deleted');
        }

        return;
    }
    catch (err) {
        throw new Error('Error deleting notebook');
    }
}

export async function updateNotebook(notebookId: string, notebook: NotebookType): Promise<INotebookSchema> {
    checkValidObjectId(notebookId);
    try {
        const updatedNotebook = await NotebookModel.findByIdAndUpdate(notebookId, notebook, { new: true }); 
        if(!updatedNotebook) {
            throw new Error('Notebook could not be updated');
        }

        return updatedNotebook;
    }
    catch (err) {
        throw new Error('Error updating notebook');
    }
}