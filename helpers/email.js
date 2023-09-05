
import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    //tomo datos de forma individual
    const {email,nombre,token}=datos
    //Enviar el Email.
    await transport.sendMail({//formato de email
        from: 'BienesRaices.com',
        to: email,
        subject: 'Confirma tu cuenta en BienesRaices.com ',//asunto
        text: 'Confirma tu cuenta en BienesRaices.com',
        html:` 
        <p> Hola ${nombre}, comprueba tu cuenta en BienesRaices.com</p>

        <p>Tu cuenta ya esta lista, solo debes confirmar en el siguiente enlace:
        <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}">Confirmar Cuenta</a></p>
        <p>Si no creaste esta cuenta, ignorar este mensaje.<p>`

    });

}
const emailRecuperarPass= async (datos) => {

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    //tomo datos de forma individual
    const {email,nombre,token}=datos
    //Enviar el Email.
    await transport.sendMail({//formato de email
        from: 'BienesRaices.com',
        to: email,
        subject: 'Reestablece tu cuenta en BienesRaices.com ',//asunto
        text: 'Reestablece tu cuenta en BienesRaices.com',
        html:` 
        <p> Hola ${nombre}, has solicitado reestablecer tu contraseña en BienesRaices.com</p>

        <p>Sigue el siguiente enlace para generar una contraseña nueva:
        <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/recuperar-pass/${token}">Recuperar contraseña</a></p>
        <p>Si no solicitaste el cambio de contraseña, puedes ignorar este mensaje.<p>`

    });

}
export {
    emailRegistro,
    emailRecuperarPass
}