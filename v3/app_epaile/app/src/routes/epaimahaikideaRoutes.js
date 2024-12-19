import express from 'express';
import * as eC from '../controllers/epaimahaikideaController.js';
const router = express.Router();

router.get('/', eC.getEpaimahaikideak); // 3001/epaimahaikidea/

router.get('/:idEpaimahaikidea', eC.getEpaimahaikidea); // 3001/epaimahaikidea/1
router.delete('/delete/', eC.deleteEpaimahaikidea); // 3001/epaimahaikidea/delete/
router.put('/update/', eC.updateEpaimahaikidea); //3001/epaimahaikidea/update/
router.post('/add', eC.createNewEpaimahaikidea); // 3001/epaimahaikidea/add
router.post('/getEpailearenEpaimahaiak', eC.getEpailearenEpaimahaiak); // 3001/epaimahaikidea/getEpailearenEpaimahaiak
export default router;