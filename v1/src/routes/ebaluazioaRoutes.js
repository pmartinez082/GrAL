import express from 'express';
import * as eC from '../controllers/ebaluazioaController.js';
const router = express.Router();

router.get('/:idEpaimahaikidea', eC.getEpailearenEbaluazioak); // 3000/epaimahaikidea/
router.get('/fasea/:idFasea', eC.getfasearenEbaluazioak); // 3000/epaimahaikidea/1
router.get('/taldea/:idTaldea', eC.getTaldearenEbaluazioak); // 3000/epaimahaikidea/1
router.get('/epaimahaikidea/:idEpaimahaikidea', eC.getEpailearenEbaluazioak); // 3000/epaimahaikidea/1
router.post('/add', eC.createNewEbaluazioa); // 3000/epaimahaikidea/ebaluazioa/add

export default router;