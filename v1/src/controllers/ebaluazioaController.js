import { booleanEpaimahaikideaExists, booleanEzaugarriaExists, booleanFaseaExists } from "./epaimahaikideaController.js";
import dbConnection from '../database/database.js';
export const createNewEbaluazioa = async (req, res) => {
    const ebaluazioa = req.body;
    ebaluazioa.noiz = new Date();
   
    if (!ebaluazioa.idEpaimahaikidea || !ebaluazioa.idEzaugarria || !ebaluazioa.idTaldea || !ebaluazioa.puntuak || !ebaluazioa.idTxapelketa || !ebaluazioa.idFasea || !ebaluazioa.noiz) {
      return res.status(400).json({
        ErrorCode: 204,
        Message: 'Fields cannot be empty'
      });
    }
  
    const ebaluazioaObj = [
      ebaluazioa.idEpaimahaikidea,
      ebaluazioa.idEzaugarria,
      ebaluazioa.idTaldea,
      ebaluazioa.puntuak,
      ebaluazioa.noiz
    ];
  
    try {
      
      const epaimahaikideaExists = await booleanEpaimahaikideaExists(req);
      const ezaugarriaExists = await booleanEzaugarriaExists(req);
      const faseaExists = await booleanFaseaExists(req);
  
      console.log(`epaimahaikideaExists: ${epaimahaikideaExists}, ezaugarriaExists: ${ezaugarriaExists}, faseaExists: ${faseaExists}`);
  
      if (faseaExists && epaimahaikideaExists && ezaugarriaExists) {
        const sqlQuery = 'INSERT INTO ebaluazioa (idEpaimahaikidea, idEzaugarria, idTaldea, puntuak, noiz) VALUES (?, ?, ?, ?, ?)';
        await dbConnection.execute(sqlQuery, ebaluazioaObj);
        res.status(201).json({ message: 'ebaluazioa created' });
      } else {
        res.status(400).json({ error: 'Invalid data: one or more required fields do not exist' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating ebaluazioa' });
    }
  };
  
  
  
  
  export const getEpailearenEbaluazioak = async (req, res) => {
    const id = parseInt(req.params.idEpaimahaikidea);
    
    if (isNaN(id)) {
      return res.status(400).json({ error: 'You must enter a valid id as a parameter' });
    }
  
    const sqlQuery = `SELECT * FROM ebaluazioa WHERE idEpaimahaikidea = ?`;
  
    try {
  
      const [results] = await dbConnection.query(sqlQuery, [id]);
      
      if (results.length === 0) {
        res.status(404).json({ error: 'Ebaluazioa not found' });
      }
  
      else{
        res.status(200).json(results);}
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving data' });
    }
  
  };
  
  export const getfasearenEbaluazioak = async (req, res) => {
    const id = parseInt(req.params.idFasea);
    
    if (isNaN(id)) {
      return res.status(400).json({ error: 'You must enter a valid id as a parameter' });
    }
  
    const sqlQuery = `SELECT e.* FROM ebaluazioa e JOIN epaimahaikidea ep ON e.idEpaimahaikidea = ep.idEpaimahaikidea WHERE ep.idFasea = ?;`;
  
    try {
  
      const [results] = await dbConnection.query(sqlQuery, [id]);
      
      if (results.length === 0) {
        res.status(404).json({ error: 'Epailearen ebaluazioak not found' });
      }
  
      else{
        res.status(200).json(results);}
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving data' });
    }
  
  };

  export const getTaldearenEbaluazioak = async (req, res) => {
    const id = parseInt(req.params.idTaldea);
    
    if (isNaN(id)) {
      return res.status(400).json({ error: 'You must enter a valid id as a parameter' });
    }
  
    const sqlQuery = `SELECT * FROM ebaluazioa WHERE idTaldea = ?`;
  
    try {
  
      const [results] = await dbConnection.query(sqlQuery, [id]);
      
      if (results.length === 0) {
        res.status(404).json({ error: 'Ebaluazioa not found' });
      }
  
      else{
        res.status(200).json(results);}
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving data' });
    }
  
  }; 

  
  