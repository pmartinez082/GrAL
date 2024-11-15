
import dbConnection from '../database/database.js';


export const getTxapelketak = async (req, res) => {
  try {
    
    const [results] = await dbConnection.query("SELECT * FROM txapelketa");
    res.status(200).json(results);  
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'errorea txapelketak eskuratzean' });    }
};

export const getTxapelketa = async (req, res) => {
  const id = parseInt(req.params.idTxapelketa);
  
  if (isNaN(id)) {
    return res.status(400).json({ error: 'You must enter a valid id as a parameter' });
  }
  
  const sqlQuery = `SELECT * FROM txapelketa WHERE idTxapelketa = ?`;
  
  try {
    const [results] = await dbConnection.query(sqlQuery, id);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'errorea txapelketa eskuratzean' });
  }
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
      res.status(404).json({ error: 'Txapelketa not found' });
    }

    else{
      res.status(200).json(results);}
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


  
export const updateTxapelketa = async (req, res) => {
    const txapelketa = req.body;
    const idTxapelketa = parseInt(req.body.idTxapelketa);
    if(isNaN(idTxapelketa)){
      return res.status(400).json({ error: 'You must enter a valid id as a parameter' });
    }
    try {
      const txapelketaObj = [
        txapelketa.izena,
        txapelketa.dataOrdua,
        txapelketa.lekua,
        idTxapelketa
      ];
      const sqlQuery = 'UPDATE txapelketa SET izena = ?, dataOrdua = ?, lekua = ? WHERE idTxapelketa = ?';
      await dbConnection.execute(sqlQuery, txapelketaObj);
      res.status(200).json({ message: 'txapelketa updated' });
    }

    catch(error){
      console.log(error);
    }
  };

 export const deleteTxapelketa = async (req, res) =>{
   const idTxapelketa = parseInt(req.body.idTxapelketa);
   const sqlQuery = 'DELETE FROM txapelketa WHERE idTxapelketa = ?';
   await dbConnection.execute(sqlQuery, [idTxapelketa]);
   res.status(200).json({ message: 'txapelketa deleted' });
 };

