import express from 'express';
import * as tC from '../controllers/taldeaController.js';
const router = express.Router();

router.get('/', tC.getTaldeak); // 3000/taldea/
router.get('/:idTaldea', tC.getTaldea); // 3000/taldea/
router.get('/:idTaldea/ebaluazioak', tC.getTaldearenEbaluazioak); // 3000/taldea/1/ebaluazioak
router.post('/add', tC.createNewTaldea); // 3000/taldea/add
router.put('/update/', tC.updateTaldea); //3000/taldea/update/
router.delete('/delete/', tC.deleteTaldea); // 3000/taldea/delete/


export default router;