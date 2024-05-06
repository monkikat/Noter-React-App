import * as express from 'express';
import {Router} from 'express';

const router: Router = express.Router();
const {
    getNotebooksHandler,
    createNotebookHandler,
    getNotebookHandler,
    updateNotebookHandler,
    deleteNotebookHandler,
} = require('../controllers/notebookControllers')

router.route('/').get(getNotebooksHandler).post(createNotebookHandler);
router.route('/:id').get(getNotebookHandler).put(updateNotebookHandler).delete(deleteNotebookHandler);

module.exports = router;
