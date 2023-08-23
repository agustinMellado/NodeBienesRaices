import express from "express";
import { formularioLogin, formularioRegistro } from "../controllers/usuarioController.js";

const router= express.Router();
//rutas 
//endpoint que renderizan vistas

router.get('/login', formularioLogin)
router.get('/registro',formularioRegistro)

//exportacion
export default router