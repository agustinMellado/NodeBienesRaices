import express from "express";

const router= express.router();

router.get('/', function(req,res) {
    res.send('hola mundo en express')
})



//exportacion
export default router