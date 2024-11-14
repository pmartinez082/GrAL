

import mysql from 'mysql2/promise';



const dbConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "putxerak",
  database: "putxerappdb",
  port: 3306,
});


export default dbConnection;