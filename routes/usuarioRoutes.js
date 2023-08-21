import express from "express";

const router= express.Router();

router.get('/', function(req,res) {
    res.json({msg:'hola mundo en express'})
})
router.post('/', function(req,res) {
    res.json({msg:'respuesta de tipo post'})
})



//exportacion
export default router