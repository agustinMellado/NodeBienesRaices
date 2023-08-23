//zona de controllador
const formularioLogin= (req, res) => {
    //func. encargada de mostrar una vista.
    res.render('auth/login',{

    })
}
const formularioRegistro= (req, res) => {
    //func. encargada de mostrar una vista.
    res.render('auth/registro',{
        
    })
}

export{
    formularioLogin,
    formularioRegistro
}
