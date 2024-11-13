
import { query } from '../dal/database.js';


export async function getReferees() {
    const sql = 'SELECT username, mail FROM users WHERE role = ?';
    const role = 'referee';
    return await query(sql, [role]);
  }

export async function userExists(username) {
    const sql = 'SELECT 1 FROM users WHERE username = ? LIMIT 1';
    
    const results = await query(sql, [username]);
    return results.length > 0; // true if exists, false if not
  }

