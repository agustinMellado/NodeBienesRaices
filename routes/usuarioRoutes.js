import express from "express";
import { formularioLogin, formularioRegistro, registrar,confirmar, formularioRecuperarPassword} from "../controllers/usuarioController.js";

const router= express.Router();
//rutas 
//endpoint que renderizan vistas

router.get('/login', formularioLogin)
router.get('/registro',formularioRegistro)
router.post('/registro',registrar)
//routing dinamico
router.get('/confirmar/:token',confirmar)//lee el token
router.get('/recuperar-pass',formularioRecuperarPassword)

//exportacion
export default router