import express from 'express';
import * as eC from '../controllers/epaimahaikideaController.js';
const router = express.Router();

router.get('/', eC.getEpaimahaikideak); // 3000/epaimahaikidea/
router.get('/:idTxapelketa', eC.getEpaimahaikidea); // 3000/epaimahaikidea/1
router.post('/add', eC.createNewEpaimahaikidea); // 3000/epaimahaikidea/add

export default router;