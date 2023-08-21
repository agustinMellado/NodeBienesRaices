import express from "express";

const router= express.Router();

router.get('/login', (req, res) => {
    //func. encargada de mostrar una vista.
    res.render('auth/login')
})



//exportacion
export default router