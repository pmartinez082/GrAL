import express from 'express';
import * as tC from '../controllers/taldeaController.js';
const router = express.Router();

router.get('/', tC.getTaldeak); // 3001/taldea/
router.get('/:idTaldea', tC.getTaldea); // 3001/taldea/
router.get('/get/aktiboak', tC.getTaldeAktiboak); // 3001/taldea/aktiboak
router.get('/:idTaldea/ebaluazioak', tC.getTaldearenEbaluazioak); // 3001/taldea/1/ebaluazioak
router.get('/:idEpaimahaikidea/baloratu-gabekoak', tC.getBaloratuGabekoTaldeak); // 3001/taldea/baloratu-gabekoak
router.put('/resetEgoera', tC.setTaldeenEgoera); // 3001/taldea-reset-egoera
router.post('/add', tC.createNewTaldea); // 3001/taldea/add
router.put('/update/', tC.updateTaldea); //3001/taldea/update/
router.delete('/delete/', tC.deleteTaldea); // 3001/taldea/delete/


export default router;