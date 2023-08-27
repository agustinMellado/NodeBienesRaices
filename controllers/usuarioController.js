import Usuario from '../models/Usuario.js'
//zona de controllador
const formularioLogin= (req, res) => {
    //.render encargado de mostrar una vista.
    res.render('auth/login',{
        pagina: 'Iniciar Sesion'
    })
}
const formularioRegistro= (req, res) => {
    //.render encargado de mostrar una vista.
    res.render('auth/registro',{
        pagina:'Crear Cuenta'
        
    })
}

const registrar= async (req, res) => {
    const usuario = await Usuario.create(req.body)
    res.json(usuario)
    
}

const formularioRecuperarPassword= (req, res) => {
    //.render encargado de mostrar una vista.
    res.render('auth/recuperar-pass',{
        pagina:'Recuperar Contraseña'
        
    })
}

export{
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioRecuperarPassword
}
