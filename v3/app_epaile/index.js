import express from 'express';
import morgan from 'morgan';
import router from './app/router.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//* Initializations
const app = express();

//* Settings
const port = 3001;
//const host = '192.168.137.1'; 
const host = 'putxerapp.eus';
//* Middlewares
app.use(morgan('dev'));

//* Enabling cors for all request by usiing cors middleware
app.use(cors());

/**
 * * Parse request of content-type: application/json
 * * Parses inconming request with JSON payloads
 */
app.use(express.json());
app.use(express.urlencoded( { extended:true }));


//* Routes
router(app);


//* Starting the server
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
