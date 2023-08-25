//zona de controllador
const formularioLogin= (req, res) => {
    //.render encargado de mostrar una vista.
    res.render('auth/login',{

    })
}
const formularioRegistro= (req, res) => {
    //.render encargado de mostrar una vista.
    res.render('auth/registro',{
        pagina:'Crear Cuenta'
        
    })
}

export{
    formularioLogin,
    formularioRegistro
}
