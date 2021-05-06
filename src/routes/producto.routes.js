import {Router} from 'express';
import cafeteriaCtrl from '../controllers/producto.controllers'

const router = Router();
// crear una ruta
router.route('/').get(cafeteriaCtrl.getPrueba)

export default router;