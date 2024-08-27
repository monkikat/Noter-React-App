import * as express from 'express';
import { Router } from 'express';

const router: Router = express.Router();
const {
    loginUserHandler,
    getUsersHandler,
    createUserHandler,
    getUserHandler,
    updateUserHandler,
    deleteUserHandler,
} = require('../controllers/userControllers');

router.route('/').get(getUsersHandler).post(createUserHandler);
router.route('/login').post(loginUserHandler);
router.route('/:id').get(getUserHandler).put(updateUserHandler).delete(deleteUserHandler);

module.exports = router;
