import express from 'express';
import * as tC from '../controllers/taldeaController.js';
const router = express.Router();

router.get('/', tC.getTaldeak); // 3000/taldea/
router.get('/:idTaldea', tC.getTaldea); // 3000/taldea/1
router.post('/add', tC.createNewTaldea); // 3000/taldea/add


export default router;