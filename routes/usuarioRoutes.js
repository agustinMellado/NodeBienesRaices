import express from "express";
import { formularioLogin, formularioRegistro, formularioRecuperarPassword} from "../controllers/usuarioController.js";

const router= express.Router();
//rutas 
//endpoint que renderizan vistas

router.get('/login', formularioLogin)
router.get('/registro',formularioRegistro)
router.get('/recuperar-pass',formularioRecuperarPassword)

//exportacion
export default router