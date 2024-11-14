import express from 'express';
import * as tC from '../controllers/txapelketaController.js';
const router = express.Router();

router.get('/', tC.getTxapelketak); // 3000/txapelketa/
router.get('/faseak/:idTxapelketa', tC.getTxapelketarenFaseak); // 3000/txapelketa/faseak/1
router.get('/check/:idTxapelketa/:idFasea', tC.faseaExists); //3000/txapelketa/1/1
router.post('/add', tC.createNewTxapelketa); // 3000/txapelketa/add

export default router;