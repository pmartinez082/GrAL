import express from 'express';
import * as tC from '../controllers/txapelketaController.js';
const router = express.Router();

router.get('/', tC.getTxapelketak); // 3001/txapelketa/
router.get('/:idTxapelketa', tC.getTxapelketa); // 3001/txapelketa/1
router.get('/lortu/info-guztia', tC.getInfoGuztia); // 3001/lortu/info-guztia
router.get('/lortu/info-guztia/:idTxapelketa', tC.getTxapelketarenInfoGuztia); // 3001/lortu/info-guztia/1
router.get('/faseak/:idTxapelketa', tC.getTxapelketarenFaseak); // 3001/txapelketa/faseak/1
router.get('/lortu/aktiboaren-info-guztia', tC.getTxapAktiboaFasEpaimahaikideakEzaugarriak); // 3001/txapelketa/lortu-aktiboaren-info-guztia
router.get('/:idTxapelketa', tC.getTxapelketa); // 3001/txapelketa/1
router.delete('/delete/', tC.deleteTxapelketa); // 3001/txapelketa/delete/
router.put('/update/', tC.updateTxapelketa); //3001/txapelketa/update/
router.post('/add', tC.createNewTxapelketa); // 3001/txapelketa/add


export default router;