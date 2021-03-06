import { Router } from "express";
import cafeteriaCtrl from "../controllers/producto.controllers";

const router = Router();
// crear una ruta
router
  .route("/")
  .get(cafeteriaCtrl.listarProducto)
  .post(cafeteriaCtrl.nuevoProducto);

router
  .route("/:id")
  .delete(cafeteriaCtrl.eliminarProducto)
  .put(cafeteriaCtrl.editarProducto)
  .get(cafeteriaCtrl.obtenerProducto);

export default router;
