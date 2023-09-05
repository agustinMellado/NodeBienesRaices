import express from "express";
import { formularioLogin, formularioRegistro, registrar,confirmar, formularioRecuperarPassword, resetearPass} from "../controllers/usuarioController.js";

const router= express.Router();
//rutas 
//endpoint que renderizan vistas

router.get('/login', formularioLogin)

router.get('/registro',formularioRegistro)
router.post('/registro',registrar)
//routing dinamico
router.get('/confirmar/:token',confirmar)//lee el token

router.get('/recuperar-pass',formularioRecuperarPassword)
router.post('/recuperar-pass',resetearPass)

//almacena nuevo password
router.get('/recuperar-password/:token',comprobarToken);
router.get('/recuperar-password/:token',nuevoPassword);
//exportacion
export default router