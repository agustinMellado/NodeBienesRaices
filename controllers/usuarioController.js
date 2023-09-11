import { check, validationResult } from 'express-validator'
import Usuario from '../models/Usuario.js'
import { generarId } from '../helpers/token.js'
import { emailRecuperarPass, emailRegistro } from '../helpers/email.js'
//zona de controllador
const formularioLogin = (req, res) => {
    //.render encargado de mostrar una vista.
    res.render('auth/login', {
        pagina: 'Iniciar Sesion'
    })
}
const formularioRegistro = (req, res) => {

    console.log(req.csrfToken())
    //.render encargado de mostrar una vista.
    res.render('auth/registro', {
        pagina: 'Crear Cuenta',
        csrfToken: req.csrfToken()//cada vez que se visite el formulario se genera un token.

    })
}

const registrar = async (req, res) => {
    //validacion
    await check('nombre').notEmpty().withMessage('el nombre no puede ir vacio').run(req)//verifica que el campo no este vacio.
    await check('email').isEmail().withMessage('Ingrese un email valido').run(req)//que sean emails validos.
    await check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').run(req)//un minimo necesario de contrasenias
    await check('repetir_password').equals(req.body.password).withMessage('Las contraseñas no coinciden').run(req)// verifica que las contrasenias coincidan.

    let resultado = validationResult(req)
    //verificar que el resultado este vacio
    if (!resultado.isEmpty()) {
        //errores
        return res.render('auth/registro', {//retorno para que no siga 
            pagina: 'Crear Cuenta',
            csrfToken: req.csrfToken(),//cada vez que se visite el formulario se genera un token.
            errores: resultado.array(),//envio a la vista los msj de las validaciones
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }
    //extraer datos
    const { nombre, email, password } = req.body

    //verificar que el usuario no este duplicado.
    const existeUsuario = await Usuario.findOne({
        where: {
            email
        }
    })
    if (existeUsuario) {
        //errores
        return res.render('auth/registro', {//retorno para que no siga 
            pagina: 'Crear Cuenta',
            csrfToken: req.csrfToken(),//cada vez que se visite el formulario se genera un token.
            errores: [{ msg: 'El usuario ya esta registrado' }],//envio a la vista los msj de las validaciones
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }
    //almacenamiento usuario
    const usuario = await Usuario.create({
        nombre,
        email,
        password,
        token: generarId()//llamoa a la funcion al generador creado en tokens
    })
    //Email de confirmacion
    emailRegistro({
        nombre: usuario.nombre,
        email: usuario.email,
        token: usuario.token
    })
    //Mostrar mensaje de confirmacion
    res.render('template/mensaje', {
        pagina: 'Cuenta creada correctamente',
        mensaje: 'Hemos enviado un Email de confirmacion, presiona en el enlace'
    })

}

//funcion que comprueba una cuenta
const confirmar = async (req, res) => {
    const { token } = req.params;
    console.log(token)
    //verificar si el token es valido.
    const usuario = await Usuario.findOne({ where: { token } })
    //si no existe el usuario
    if (!usuario) {
        //renderiza la vista
        return res.render('auth/confirmar-cuenta', {
            pagina: 'Error al confirmar tu cuenta',
            mensaje: 'Hubo un error al confirmar tu cuenta, intenta de nuevo.',
            error: true
        })

    }
    //confirmar la cuenta
    usuario.token = null;//el token es de uso unico, una vez usado se vuelve nulo.
    usuario.confirmar = true;
    await usuario.save()// se guarda la nueva informacion en la bd
    res.render('auth/confirmar-cuenta', {
        pagina: 'Cuenta confirmada',
        mensaje: 'La cuenta se confirmo correctamente',

    })
}
const formularioRecuperarPassword = (req, res) => {
    //.render encargado de mostrar una vista.
    res.render('auth/recuperar-pass', {
        pagina: 'Recuperar Contraseña',
        csrfToken: req.csrfToken(),//cada vez que se visite el formulario se genera un token.


    })
}

const resetearPass = async (req, res) => {

    //validacion
    await check('email').isEmail().withMessage('Ingrese un email valido').run(req)//que sean emails validos.

    let resultado = validationResult(req)
    //verificar que el resultado este vacio
    if (!resultado.isEmpty()) { //presento por patalla los errores
        res.render('auth/recuperar-pass', {
            pagina: 'Recuperar Contraseña',
            csrfToken: req.csrfToken(),//cada vez que se visite el formulario se genera un token.
            errores: resultado.array()
        })
    }
    //Buscar email de user
    const { email } = req.body//tomamos el email del input

    const usuario = await Usuario.findOne({ where: { email } })//lo buscamos en la bd
    //si no esta registrado
    if (!usuario) {//enviamos un mensaje de error
        res.render('auth/recuperar-pass', {
            pagina: 'Recuperar Contraseña',
            csrfToken: req.csrfToken(),//cada vez que se visite el formulario se genera un token.
            errores: [{ msg: 'El Email no pertenece a ningun usuario' }]
        })
    }

    //Generar nuevo token y enviar email
    usuario.token = generarId();
    await usuario.save();//guardamos el cambio en la base de datos
    //enviamos el email
    emailRecuperarPass({
        email: usuario.email,
        nombre: usuario.nombre,
        token: usuario.token
    })
    //Mensaje de confirmacion
    res.render('template/mensaje', {
        pagina: 'Recupera tu Contraseña',
        mensaje: 'Hemos enviado un email de recuperacion.',

    })

}
const comprobarToken = async (req, res) => {

    const { token } = req.params;
    const usuario = await Usuario.findOne({ where: { token } })
    console.log(usuario)
    if (!usuario) {
        //renderiza la vista
        return res.render('auth/confirmar-cuenta', {
            pagina: 'Recuperar tu cuenta',
            mensaje: 'Hubo un error al validad tu informacion, intenta de nuevo.',
            error: true
        })
    }
    //Se muestra un formulario para modificar password
    res.render('auth/reset-pass', {
        pagina: 'Reestablece tu contraseña',
        csrfToken: req.csrfToken(),//cada vez que se visite el formulario se genera un token.

    })


}

const nuevoPassword = async(req, res) => {
    //validar nueva contraseña
    await check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').run(req)//un minimo necesario de contrasenias
    await check('repetir_password').equals(req.body.password).withMessage('Las contraseñas no coinciden').run(req)// verifica que las contrasenias coincidan.
    let resultado = validationResult(req)
    //verificar que el resultado este vacio
    if (!resultado.isEmpty()) {
        //errores
        return res.render('auth/registro', {//retorno para que no siga 
            pagina: 'Crear Cuenta',
            csrfToken: req.csrfToken(),//cada vez que se visite el formulario se genera un token.
            errores: resultado.array(),//envio a la vista los msj de las validaciones
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }




    console.log('guardando contraseña')
}

export {
    formularioLogin,
    formularioRegistro,
    registrar,
    confirmar,
    formularioRecuperarPassword,
    resetearPass,
    comprobarToken,
    nuevoPassword
}
