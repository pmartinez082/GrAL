
import dbConnection from '../database/database.js';


export const getTxapelketak = async (req, res) => {
  try {
    
    const [results] = await dbConnection.query("SELECT * FROM txapelketa");
    res.status(200).json(results);  
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'errorea txapelketak eskuratzean' });    }
};


export const getTxapelketarenFaseak = async (req, res) => {
  const id = parseInt(req.params.idTxapelketa);
  
  if (isNaN(id)) {
    return res.status(400).json({ error: 'You must enter a valid id as a parameter' });
  }

  const sqlQuery = `SELECT * FROM fasea WHERE idTxapelketa = ?`;

  try {

    const [results] = await dbConnection.query(sqlQuery, [id]);
    
    if (results.length === 0) {
      return res.status(404).json({ error: 'Txapelketa not found' });
    }

   
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving data' });
  }
};

export const createNewTxapelketa = async (req, res) => {
  const txapelketa = req.body;

 
  if (!txapelketa.izena || !txapelketa.dataOrdua || !txapelketa.lekua ) {
    return res.status(400).json({
      ErrorCode: 204,
      Message: 'Fields cannot be empty'
    });
  }

  const txapelketaObj = [
   txapelketa.izena,
   txapelketa.dataOrdua,
   txapelketa.lekua 
   
  ];

  const sqlQuery = 'INSERT INTO txapelketa (izena, dataOrdua, lekua) VALUES (?, ?, ?)';

  try {

    await dbConnection.execute(sqlQuery, txapelketaObj);
    res.status(201).json({ message: 'txapelketa created'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating txapelketa' });
  }
};

export const faseaExists = async (req, res) => {
  const idTxapelketa = parseInt(req.params.idTxapelketa);
  const idFasea = parseInt(req.params.idFasea);
  if(isNaN(idTxapelketa||isNaN(idFasea))){
    return res.status(400).json({ error: 'You must enter a valid id as a parameter' });
  }
  try {
    
      const [results] = await dbConnection.query("SELECT * FROM fasea WHERE idFasea = ? and idTxapelketa = ?", [idFasea, idTxapelketa]);
      if(results.length > 0)
        res.status(200).json(true);
      else
        res.status(200).json(false);
  

    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'errorea' });    }
  };



