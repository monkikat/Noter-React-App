import { NotebookType } from "../types/notebookTypes";
import HttpException from "../utils/httpException";

export function sanitizeNotebook(notebook: NotebookType): NotebookType {
    let sanitizedNotebook = <NotebookType>{};

    sanitizedNotebook.title = sanitizeTitle(notebook.title);
    console.log(sanitizedNotebook);

    return sanitizedNotebook;
}

function sanitizeTitle(title: string): string {
    if (title === undefined) {
        throw new HttpException(400, 'Title is undefined');
    }
    if (typeof title !== 'string') {
        throw new HttpException(400, 'Title is not a string');
    }

    title = title.trim();
    const titleLength = title.length;

    if (titleLength < 3) {
        throw new HttpException(400, 'Title must be at least 3 characters');
    }
    if (titleLength > 50) {
        throw new HttpException(400, 'Title must be less than 50 characters');
    }

    return title;
}
