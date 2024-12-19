import express from 'express';
import * as eC from '../controllers/ezaugarriaController.js';
const router = express.Router();

router.get('/', eC.getEzaugarriak); // 3001/ezaugarria/
router.get('/:idEzaugarria', eC.getEzaugarria); // 3001/ezaugarria/1
router.delete('/delete/', eC.deleteEzaugarria); // 3001/ezaugarria/delete/
router.put('/update/', eC.updateEzaugarria); //3001/ezaugarria/update/
router.post('/add', eC.createNewEzaugarria); // 3001/ezaugarria/add


export default router;