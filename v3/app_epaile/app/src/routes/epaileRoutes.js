import express from 'express';
import path from 'path';

const isPkg = typeof process.pkg !== 'undefined';
const basePath = isPkg
    ? path.dirname(process.execPath)
    : path.resolve();

const router = express.Router();
router.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'app', 'src', 'views', 'html', 'index.html'));
  });
router.get('/epaile', (req, res) => {
    res.sendFile(path.join(basePath, 'app', 'src', 'views','html',  'epaitu.html'));
  });

router.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(basePath, 'app', 'src', 'views', 'icons', 'putxera.jpg'));
  });

router.use('/css', express.static(path.join(basePath, 'app', 'src', 'views', 'css')));
router.use('/js', express.static(path.join(basePath, 'app', 'src', 'views', 'js')));
router.use('/pics', express.static(path.join(basePath, 'app', 'src', 'views', 'pics')));
router.use('/icons', express.static(path.join(basePath, 'app', 'src', 'views', 'icons')));
router.use('/pwa', express.static(path.join(basePath, 'app','pwa')));
export default router;