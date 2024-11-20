
import dbConnection from '../database/database.js';

export const getEbaluazioak = async (req, res) => {
  try {
    
    const [results] = await dbConnection.query("SELECT * FROM ebaluazioa");
    res.status(200).json(results);  
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'errorea ebaluazioak eskuratzean' });    }
};

export const getEbaluazioa = async (req, res) => {
  const id = parseInt(req.params.idEbaluazioa);
  
  if (isNaN(id)) {
    return res.status(400).json({ error: 'You must enter a valid id as a parameter' });
  }

  const sqlQuery = `SELECT * FROM ebaluazioa WHERE idEbaluazioa = ?`;

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


export const createNewEbaluazioa = async (req, res) => {
    const ebaluazioa = req.body;
    ebaluazioa.noiz = new Date();
   
    if (!ebaluazioa.idEpaimahaikidea || !ebaluazioa.idEzaugarria || !ebaluazioa.idTaldea || !ebaluazioa.puntuak ||!ebaluazioa.noiz) {
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
      

         
        const sqlQuery = 'INSERT INTO ebaluazioa (idEpaimahaikidea, idEzaugarria, idTaldea, puntuak, noiz) VALUES (?, ?, ?, ?, ?)';
        const [result] = await dbConnection.execute(sqlQuery, ebaluazioaObj);
        const idEbaluazioa = result.insertId;
        res.status(201).json({ idEbaluazioa });
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
  


  export const updateEbaluazioa = async (req, res) => {
    const idEbaluazioa = parseInt(req.body.idEbaluazioa);
    const ebaluazioa = req.body;
    const ebaluazioaObj = [
      ebaluazioa.idEpaimahaikidea,
      ebaluazioa.idEzaugarria,
      ebaluazioa.idTaldea,
      ebaluazioa.puntuak,
      ebaluazioa.noiz,
      idEbaluazioa
    ];
    if(isNaN(idEbaluazioa)){
      return res.status(400).json({ error: 'You must enter a valid id as a parameter' });
    }
    try {
      const sqlQuery = `UPDATE ebaluazioa SET idEpaimahaikidea = ?, idEzaugarria = ?, idTaldea = ?, puntuak = ?, noiz = ? WHERE idEbaluazioa = ?`;
      await dbConnection.execute(sqlQuery, ebaluazioaObj);
      res.status(200).json({ message: 'ebaluazioa updated' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating ebaluazioa' });
    }
  };

  export const deleteEbaluazioa = async (req, res) => {
    const idEbaluazioa = parseInt(req.body.idEbaluazioa);
    if (isNaN(idEbaluazioa)) {
      return res.status(400).json({ error: 'You must enter a valid id as a parameter' });
    }
    try {
      const sqlQuery = 'DELETE FROM ebaluazioa WHERE idEbaluazioa = ?';
      await dbConnection.execute(sqlQuery, [idEbaluazioa]);
      res.status(200).json({ message: 'ebaluazioa deleted' });
    } catch (error) {
      console.error(error);
    }
  };

  
  export const EbaluazioaExists = async (req, res) => {
    const data = req.body;
    const sqlQuery = `SELECT * FROM ebaluazioa WHERE idEpaimahaikidea = ? and idEzaugarria = ? and idTaldea = ?`;
    try {
      const [results] = await dbConnection.query(sqlQuery, [data.idEpaimahaikidea, data.idEzaugarria, data.idTaldea]);
      if(results.length > 0)
        res.status(200).json(true);
      else
        res.status(200).json(false);
  

    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'errorea' });    }
  };