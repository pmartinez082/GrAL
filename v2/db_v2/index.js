import express from 'express';
import morgan from 'morgan';
import router from './router.js';
import cors from 'cors';

//* Initializations
const app = express();

//* Settings
const port = 3000;

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
app.listen( port, () => {
    console.log(`Server running in port ${port}`);
});

