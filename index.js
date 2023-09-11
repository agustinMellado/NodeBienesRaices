import express from 'express'//ES MODULES
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import usuarioRoutes from './routes/usuarioRoutes.js';
import db from './config/db.js';
//crear la app

const app = express();
//lectura de datos json
app.use(express.json())
//habilitar lectura de datos 
app.use(express.urlencoded({extended:true}))

//habilitar cookie parser
app.use(cookieParser());
//habilitar CSRF
app.use(csrf({cookie:true}))
//conexion a la base de datos
try{
   await db.authenticate(); 
   db.sync()//genera la bd si no existe
   console.log('conexion correcta a la base de datos')
}catch{
    console.log(error)
}
//Habilitar Pub templane engine
app.set('view engine', 'pug')
app.set('views','./views')//indicamos donde estan las vistas

// Carpeta publica
app.use(express.static('public'))

//Routing
app.use('/auth', usuarioRoutes) //use para que funcione con todos los metodos

//definir el puerto 
const port =process.env.PORT||3000;
app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});