import express from 'express'//ES MODULES

//crear la app

const app = express();

//Routing
app.get('/', function(req,res) {
    res.send('hola mundo en express')
})

//definir el puerto 
const port =3000;
app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});