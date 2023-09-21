import jwt from 'jsonwebtoken'


//funcion para generar un jwt
const generateJwt = id => jwt.sign({
 id
}, process.env.JWT_SECRET, {
    expiresIn: '1d'//tiempo de vida token, 1 dia.

});
//funcion para generar id unico para usar como token.
const generarId = () =>
    Math.random().toString(32).substring(2) + Date.now().toString(32);



export {
    generarId
}