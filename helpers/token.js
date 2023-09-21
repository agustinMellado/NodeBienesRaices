import jwt from 'jsonwebtoken'


//funcion para generar un jwt
const generarJwt = datos => jwt.sign(//tomo la informacion por parametro y la vuelvo jwt
    {id:datos.id, nombre:datos.nombre}
, process.env.JWT_SECRET, {
    expiresIn: '1d'//tiempo de vida token, 1 dia.

});
//funcion para generar id unico para usar como token.
const generarId = () =>
    Math.random().toString(32).substring(2) + Date.now().toString(32);



export {
    generarJwt,
    generarId
}