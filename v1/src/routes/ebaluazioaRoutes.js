import express from 'express';
import * as eC from '../controllers/ebaluazioaController.js';
const router = express.Router();

router.get('/', eC.getEbaluazioak); // 3000/ebaluazioa/
router.get('/:idEbaluazioa', eC.getEbaluazioa); // 3000/ebaluazioa/1
router.delete('/delete/', eC.deleteEbaluazioa); // 3000/ebaluazioa/delete/
router.put('/update/', eC.updateEbaluazioa); //3000/ebaluazioa/update/
router.post('/add', eC.createNewEbaluazioa); // 3000/ebaluazioa/add


export default router;