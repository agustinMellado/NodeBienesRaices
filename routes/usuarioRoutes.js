import express from "express";
import { formularioLogin, autenticar, formularioRegistro, registrar,confirmar, formularioRecuperarPassword, resetearPass, comprobarToken, nuevoPassword} from "../controllers/usuarioController.js";

const router= express.Router();
//rutas 
//endpoint que renderizan vistas

router.get('/login', formularioLogin)
router.post('/login', autenticar)

router.get('/registro',formularioRegistro)
router.post('/registro',registrar)
//routing dinamico
router.get('/confirmar/:token',confirmar)//lee el token

router.get('/recuperar-pass',formularioRecuperarPassword)
router.post('/recuperar-pass',resetearPass)

//almacena nuevo password
router.get('/recuperar-pass/:token',comprobarToken);
router.post('/recuperar-pass/:token',nuevoPassword);
//exportacion
export default router