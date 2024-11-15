
import dbConnection from '../database/database.js';


export const getUsers = async (req, res) => {
    try {
      
      const [results] = await dbConnection.query("SELECT * FROM user");
      res.status(200).json(results);  
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'errorea erabiltzaileak eskuratzean' });    }
  };

export const getUser = async (req, res) => {
  const username = req.params.username;
  
  try {
    const [results] = await dbConnection.query("SELECT * FROM user WHERE username = ?", [username]);
    if(results.length === 0)
      res.status(404).json({ error: 'User not found' });
    else
      res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving data' });
  }
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

export const updateUser = async (req, res) => {
;
  const user = req.body;
  const userObj = [
   
    user.email,
    user.password,
    user.role,
   user.username,
  ];

  try {
    const sqlQuery = `UPDATE user SET  email = ?, password = ?, role = ? WHERE username = ?`;
    await dbConnection.execute(sqlQuery, userObj);
    res.status(200).json({ message: 'user updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating user' });
  }
};  

export const deleteUser = async (req, res) => {

  const username = req.body.username;
  try {
    const sqlQuery = 'DELETE FROM user WHERE username = ?';
    await dbConnection.execute(sqlQuery, [username]);
    
    res.status(200).json({ message: 'user deleted' });

  } catch (error) {
    console.error(error);   }
};