import express from 'express';
import * as fC from '../controllers/faseaController.js';
const router = express.Router();

router.get('/', fC.getFaseak); // 3000/fasea/
router.get('/:idFasea', fC.getFasea); // 3000/fasea/1
router.get('/:idFasea/ebaluazioak', fC.getfasearenEbaluazioak); // 3000/fasea/1/ebaluazioak
router.get('/:idFasea/ezaugarriak', fC.getFasearenEzaugarriak); // 3000/fasea/1/ezaugarriak
router.get('/:idFasea/epaimahaikideak-ezaugarriak', fC.getFasearenEpaimahaikideakEzaugarriak); // 3000/fasea/1/ezaugarriak
router.delete('/delete/', fC.deleteFasea); // 3000/fasea/delete/
router.put('/update/', fC.updateFasea); //3000/fasea/update/
router.post('/add', fC.createNewFasea); // 3000/fasea/add



export default router;