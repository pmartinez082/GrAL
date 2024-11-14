
import dbConnection from '../database/database.js';


export const getUsers = async (req, res) => {
    try {
      
      const [results] = await dbConnection.query("SELECT * FROM user");
      res.status(200).json(results);  
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'errorea erabiltzaileak eskuratzean' });    }
  };



export const getReferees = async (req, res) => {
    try {
      
        const [results] = await dbConnection.query("SELECT * FROM user WHERE role = ?", ['referee']);
        res.status(200).json(results);  
      } catch (error) {
        console.error(error); 
        res.status(500).json({ error: 'errorea epaileak eskuratzean' });    }
    };

export const createNewUser = async (req, res) => {
        const user = req.body;
      
       
        if (!user.username || !user.email || !user.password || !user.role) {
          return res.status(400).json({
            ErrorCode: 204,
            Message: 'Fields cannot be empty'
          });
        }
      
        const userObj = [
         user.username,
         user.email,
         user.password,
         user.role
        ];
      
        const sqlQuery = 'INSERT INTO user (username, email, password, role) VALUES (?, ?, ?, ?)';
      
        try {

          const [result] = await dbConnection.execute(sqlQuery, userObj);
          res.status(201).json({ message: 'user created', username: result.username });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error creating user' });
        }
      };



/*




export async function faseaExists(idFasea) {
    const sql = 'SELECT 1 FROM  `putxerappdb`.`fasea` WHERE idFasea = ? LIMIT 1';
    
    const results = await query(sql, [idFasea]);
    return results.length > 0; // true if exists, false if not
  }


export async function ezaugarriaExists(idEzaugarria) {
    const sql = 'SELECT 1 FROM  `putxerappdb`.`ezaugarria` WHERE idEzaugarria = ? LIMIT 1';
    
    const results = await query(sql, [idEzaugarria]);
    return results.length > 0; // true if exists, false if not
  }


export async function newUser(username, password, email, role) {
    const sql = 'INSERT INTO  `putxerappdb`.`user` (username, password, email, role) VALUES (?, ?, ?, ?)';
    const results = await query(sql, [username, password, email, role]);
    return results;
  }

export async function newTxapelketa(izena, dataOrdua, lekua){
    const sql = 'INSERT INTO  `putxerappdb`.`txapelketa` (izena, dataOrdua, lekua) VALUES (?, ?, ?)';
    const results = await query(sql, [izena, dataOrdua, lekua]);
    return results;
  }

export async function newTaldea(izena, email, telefonoa){
    const sql = 'INSERT INTO  `putxerappdb`.`taldea` (izena, email, telefonoa) VALUES (?, ?, ?)';
    const results = await query(sql, [izena, email, telefonoa]);
    return results;
  }

 export async function newFasea(idTxapelketa, kodea, izena, egoera, hasiera, amaiera, irizpidea){
    const sql = 'INSERT INTO  `putxerappdb`.`fasea` (idTxapelketa, kodea, izena, egoera, hasiera, amaiera, irizpidea) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const results = await query(sql, [idTxapelketa, kodea, izena, egoera, hasiera, amaiera, irizpidea]);
    return results;
 } 

  
 export async function newEzaugarria(idFasea, izena, puntuakMin, puntuakMax){
    const sql = 'INSERT INTO  `putxerappdb`.`ezaugarria` (idFasea, izena, puntuakMin, puntuakMax) VALUES (?, ?, ?, ?)';
    const results = await query(sql, [idFasea, izena, puntuakMin, puntuakMax]);
    return results;
  }

 export async function newEpaimahaikidea(username, idFasea){
    const sql = 'INSERT INTO  `putxerappdb`.`epaimahaikidea` (username, idFasea) VALUES (?, ?)';
    const results = await query(sql, [username, idFasea]);
    return results;
  }

 export async function newEbaluazioa(idEpaimahaikidea, idEzaugarria, idTaldea, puntuak ){
    const sql = 'INSERT INTO  `putxerappdb`.`ebaluazioa` (idEpaimahaikidea, idEzaugarria, idTaldea, puntuak, noiz) VALUES (?, ?, ?, ?, ?)';
    const results = await query(sql, [idEpaimahaikidea, idEzaugarria, idTaldea, puntuak, new Date()]);
    return results;
 }


*/







  
