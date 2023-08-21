import express from 'express'//ES MODULES
import usuarioRoutes from './routes/usuarioRoutes.js';
//crear la app

const app = express();

//Routing
app.use('/', usuarioRoutes) //use para que funcione con todos los metodos

//definir el puerto 
const port =3000;
app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});