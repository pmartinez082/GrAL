import express from 'express';
import * as ctrl from '../bl/controller.js'

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const router = express.Router();

router.get("views/admin/lehiaketakView.html", async (req, res) => {
  try {
    const txapelketak = await ctrl.getTxapelketak();
 
    res.json({ txapelketak });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});






/*
export function getEpaileakDB(){ 

    router.get('/referees', async (req, res) => {
        try {
          const referees = await bl.getReferees();
          res.status(200).json(referees); 
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      });
    return referees;
}


export function getTxapelketakDB(){ 

    router.get('/txapelketak', async (req, res) => {
        try {
          const txapelketak = await bl.getTxapelketak();
          res.status(200).json(txapelketak); 
          return txapelketak;
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      });
    
}

export function getTxapelketarenFaseakDB(){ 

    router.get('/txapelketarenFaseak', async (req, res) => {
        try {
          const faseak = await bl.getTxapelketarenFaseak();
          res.status(200).json(faseak); 
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      });
    return faseak;
}


export function userExistsDB(username) {
  return bl.userExists(username);

}


*/
export default router;