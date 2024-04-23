import * as express from 'express';
import {Router} from 'express';

const router: Router = express.Router();
const {
    getNotebooks,
    createNotebook,
    getNotebook,
    updateNotebook,
    deleteNotebook,
} = require('../controllers/notebookControllers')

router.route('/').get(getNotebooks).post(createNotebook);
router.route('/:id').get(getNotebook).put(updateNotebook).delete(deleteNotebook);

module.exports = router;
