import express from 'express';
import * as uC from '../controllers/userController.js';
const router = express.Router();

router.get('/', uC.getUsers); // 3001/user/
router.get('/role/epaileak/', uC.getReferees); // 3001/user/epaileak
router.delete('/delete/', uC.deleteUser); // 3001/user/delete/
router.put('/update/', uC.updateUser); //3001/user/update/
router.post('/add', uC.createNewUser); // 3001/user/add
router.post('/verify', uC.verifyUser); // 3001/user/verify
router.post('/find', uC.findUser); // 3001/user/find
router.post('/role', uC.getRole); // 3001/user/role
export default router;