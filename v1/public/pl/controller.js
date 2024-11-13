import express from 'express';
import { getReferees, userExists } from '../bl/userService.js';

const router = express.Router();

export function getEpaileakDB(){ 

    router.get('/referees', async (req, res) => {
        try {
          const referees = await getReferees();
          res.status(200).json(referees); 
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      });
    return referees;
}