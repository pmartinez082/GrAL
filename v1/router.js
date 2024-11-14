
import txapelketaRoutes from './src/routes/txapelketaRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

const router = (app) => {
    app.use('/txapelketa', txapelketaRoutes);
    app.use('/user', userRoutes);
};

export default router;