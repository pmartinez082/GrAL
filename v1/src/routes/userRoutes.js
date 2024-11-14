import express from 'express';
import { getUsers, getReferees, createNewUser} from '../controllers/userController.js';
const router = express.Router();

router.get('/', getUsers); // 3000/user/
router.get('/epaileak/', getReferees); // 3000/user/epaileak
router.post('/add', createNewUser); // 3000/user/add

export default router;