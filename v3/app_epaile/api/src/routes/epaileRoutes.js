import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'html', 'index.html'));
  });
router.get('/epaile', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'html', 'epaile', 'epaitu.html'));
  });


router.get("/pwa/manifest.json", async (req, res) => {   
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'pwa', 'manifest.json'));
    });

router.get("/pwa/sw.js", async (req, res) => {   
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'pwa', 'sw.js'));
    });

router.get("/css/style.css", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'css', 'style.css'));
    });

router.get("/js/app.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'js', 'app.js'));
    });

router.get("/js/epaile.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'js', 'epaile.js'));
    });

router.get("/js/ebaluazioa.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'js', 'ebaluazioa.js'));
    });

router.get("/js/epaimahaikidea.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'js', 'epaimahaikidea.js'));
    });


router.get("/js/fasea.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'js', 'fasea.js'));
    });

router.get("/js/konstanteak.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'js', 'konstanteak.js'));
    });

router.get("/js/taldea.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'js', 'taldea.js'));
    });

router.get("/js/txapelketa.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'js', 'txapelketa.js'));
    });

router.get("/js/user.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'js', 'user.js'));
    });
router.get("/pics/atzera.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'pics', 'atzera.svg'));
    });

router.get("/pics/birkargatu.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'pics', 'birkargatu.svg'));
    });

router.get("/pics/debekatuta.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'pics', 'debekatuta.svg'));
    });

router.get("/pics/epaitu.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'pics', 'epaitu.svg'));
    });


router.get("/pics/itxaron.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'pics', 'itxaron.svg'));
    });






router.get("/icons/putxera.jpg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'icons', 'putxera.jpg'));
    });

router.get("/icons/putxera.png", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','epaile', 'icons', 'putxera.png'));
    });
export default router;