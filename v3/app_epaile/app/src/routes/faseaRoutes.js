import express from 'express';
import * as fC from '../controllers/faseaController.js';
const router = express.Router();

router.get('/', fC.getFaseak); // 3001/fasea/
router.get('/:idFasea', fC.getFasea); // 3001/fasea/1
router.get('/:idFasea/ebaluazioak', fC.getfasearenEbaluazioak); // 3001/fasea/1/ebaluazioak
router.get('/:idFasea/ezaugarriak', fC.getFasearenEzaugarriak); // 3001/fasea/1/ezaugarriak
router.get('/lortu/aktiboa', fC.getFaseAktiboa); // 3001/fasea-aktiboa
router.get('/lortu/notamaitu', fC.getAmaituGabekoFaseak); // 3001/fasea/lortu/notamaitu
router.delete('/delete/', fC.deleteFasea); // 3001/fasea/delete/
router.put('/egoeraAldatu', fC.egoeraAldatu); // 3001/fasea/egoeraAldatu
router.put('/update/', fC.updateFasea); //3001/fasea/update/
router.post('/add', fC.createNewFasea); // 3001/fasea/add



export default router;