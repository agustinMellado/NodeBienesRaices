import express from "express";

const router= express.Router();

router.get('/', (req, res) => {
    res.json({msg:'hola mundo en express'})
})
router.post('/', (req, res) => {
    res.json({msg:'respuesta de tipo post'})
})



//exportacion
export default router