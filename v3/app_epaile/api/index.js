import express from 'express';
import morgan from 'morgan';
import router from './router.js';
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
const host = '192.168.137.1';
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

//* Setting the static files path
app.use(express.static(path.join(__dirname, '..', 'epaile')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','epaile', 'html', 'index.html'));
  });
//* Routes
router(app);


//* Starting the server
app.listen(port, host, () => {
    //console.log(`Server running at http://${host}:${port}`);
});
