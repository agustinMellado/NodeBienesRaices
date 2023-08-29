import express from "express";
import { formularioLogin, formularioRegistro, registrar,confirmar, formularioRecuperarPassword, confirmar} from "../controllers/usuarioController.js";

const router= express.Router();
//rutas 
//endpoint que renderizan vistas

router.get('/login', formularioLogin)
router.get('/registro',formularioRegistro)
router.post('/registro',registrar)
router.get('/confirmar',confirmar)
router.get('/recuperar-pass',formularioRecuperarPassword)

//exportacion
export default router