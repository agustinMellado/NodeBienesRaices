import {check, validationResult} from 'express-validator'
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
    //validacion
    await check('nombre').notEmpty().withMessage('el nombre no puede ir vacio').run(req)//verifica que el campo no este vacio.
    await check('email').isEmail().withMessage('Ingrese un email valido').run(req)//que sean emails validos.
    await check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').run(req)//un minimo necesario de contrasenias
    await check('repetir_password').equals(req.body.password).withMessage('Las contraseñas no coinciden').run(req)// verifica que las contrasenias coincidan.

    let resultado= validationResult(req)
    //verificar que el resultado este vacio
    if(!resultado.isEmpty()){
        //errores
        return   res.render('auth/registro',{//retorno para que no siga 
            pagina:'Crear Cuenta',
            errores: resultado.array(),//envio a la vista los msj de las validaciones
            usuario:{
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }
    //extraer datos
    const { nombre, email, password } = req.body

    //verificar que el usuario no este duplicado.
    const existeUsuario= await Usuario.findOne({
        where:{
            email
        }
    })
    if(existeUsuario){
         //errores
        return   res.render('auth/registro',{//retorno para que no siga 
            pagina:'Crear Cuenta',
            errores:[{msg: 'El usuario ya esta registrado'}],//envio a la vista los msj de las validaciones
            usuario:{
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }
    console.log(existeUsuario)
    res.json(resultado.array())



    // const usuario = await Usuario.create(req.body)
    // res.json(usuario)
    
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
