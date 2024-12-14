import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'html', 'index.html'));
  });
router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'html', 'admin', 'admin.html'));
  });

router.get("/berria", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'html', 'admin', 'berria.html'));
    });
router.get("/berria/txapelketa", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'html', 'admin', 'txapelketaBerria.html'));
    });

router.get("/berria/taldea", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'html', 'admin', 'taldeBerria.html'));
    });

router.get("/txapelketak", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'html', 'admin', 'txapelketakView.html'));
    });

router.get("/podium", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'html', 'admin', 'kalkuluak.html'));
    });

router.get("/faseak", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'html', 'admin', 'faseakView.html'));
    });

router.get("/ezabatu/txapelketa", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'html', 'admin', 'txapelketaEzabatu.html'));
    });

router.get("/ezabatu/taldea", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'html', 'admin', 'taldeaEzabatu.html'));
    });

router.get("/pwa/manifest.json", async (req, res) => {   
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pwa', 'manifest.json'));
    });

router.get("/pwa/sw.js", async (req, res) => {   
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pwa', 'sw.js'));
    });

router.get("/css/style.css", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'css', 'style.css'));
    });

router.get("/js/app.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'js', 'app.js'));
    });

router.get("/js/admin.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'js', 'admin.js'));
    });

router.get("/js/ebaluazioa.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'js', 'ebaluazioa.js'));
    });

router.get("/js/epaimahaikidea.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'js', 'epaimahaikidea.js'));
    });

router.get("/js/ezaugarria.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'js', 'ezaugarria.js'));
    });

router.get("/js/fasea.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'js', 'fasea.js'));
    });

router.get("/js/konstanteak.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'js', 'konstanteak.js'));
    });

router.get("/js/taldea.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'js', 'taldea.js'));
    });

router.get("/js/txapelketa.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'js', 'txapelketa.js'));
    });

router.get("/js/user.js", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'js', 'user.js'));
    });
router.get("/pics/atzera.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'atzera.svg'));
    });

router.get("/pics/birkargatu.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'birkargatu.svg'));
    });

router.get("/pics/debekatuta.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'debekatuta.svg'));
    });

router.get("/pics/ezarpenak.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'ezarpenak.svg'));
    });

router.get("/pics/historia.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'historia.svg'));
    });

router.get("/pics/itxaron.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'itxaron.svg'));
    });

router.get("/pics/podium.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'podium.svg'));
    });
router.get("/pics/berria.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'berria.svg'));
    });

router.get("/pics/taldeaEzabatu.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'taldeaEzabatu.svg'));
    });

router.get("/pics/taldeBerria.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'taldeBerria.svg'));
    });

router.get("/pics/txapBerria.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'txapBerria.svg'));
    });

router.get("/pics/txapEzabatu.svg", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..','admin', 'pics', 'txapEzabatu.svg'));
    });
export default router;