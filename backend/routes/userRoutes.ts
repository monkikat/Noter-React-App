import * as express from 'express';
import { Router } from 'express';

const router: Router = express.Router();
const {
    getUsersHandler,
    createUserHandler,
    getUserHandler,
    updateUserHandler,
    deleteUserHandler,
} = require('../controllers/userControllers');

router.route('/').get(getUsersHandler).post(createUserHandler);
router.route('/:id').get(getUserHandler).post(updateUserHandler).delete(deleteUserHandler);

module.exports = router;
