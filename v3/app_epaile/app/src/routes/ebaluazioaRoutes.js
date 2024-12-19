import express from 'express';
import * as eC from '../controllers/ebaluazioaController.js';
const router = express.Router();

router.get('/', eC.getEbaluazioak); // 3001/ebaluazioa/
router.get('/:idEbaluazioa', eC.getEbaluazioa); // 3001/ebaluazioa/1
router.get('/get/EpailearenEbaluazioakFaseka/:idEpaimahaikidea', eC.getEpailearenEbaluazioakFaseka); // 3001/ebaluazioa/getEpailearenEbaluazioakFaseka
router.get('/get/fasearenEbaluazioak/:idFasea', eC.getFasearenEbaluazioak); // 3001/ebaluazioa/get/fasearenEbaluazioak
router.get('/get/faseAktiboarenEbaluazioak', eC.getFaseAktiboarenEbaluazioak); // 3001/ebaluazioa/get/faseAktiboarenEbaluazioak
router.delete('/delete/', eC.deleteEbaluazioa); // 3001/ebaluazioa/delete/
router.put('/update/', eC.updateEbaluazioa); //3001/ebaluazioa/update/
router.post('/add', eC.createNewEbaluazioa); // 3001/ebaluazioa/add
router.post('/exists', eC.EbaluazioaExists); // 3001/ebaluazioa/exists

export default router;