import express from 'express'//ES MODULES
import usuarioRoutes from './routes/usuarioRoutes.js';
//crear la app

const app = express();
//Habilitar Pub templane engine
app.set('view engine', 'pug')
app.set('views','./views')//indicamos donde estan las vistas

// Carpeta publica
app.use(express.static('public'))

//Routing
app.use('/auth', usuarioRoutes) //use para que funcione con todos los metodos

//definir el puerto 
const port =3000;
app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});