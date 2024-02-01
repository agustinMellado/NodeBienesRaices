import categorias from "./categorias";
import Categoria from "../models/Categoria";
import db from '../config/db.js';


const importarDatos = async()=>{
    try{
        //autenticar
        await db.authenticate()
        //generar columnas
        await db.sync()
        //insertamos los datos
        await Categoria.bulkCreate(categorias)
        console.log('Datos importados correctamente')
        exit(0)//el 0 significa que se finalizo correctamente
    }catch(error){
        console.log(error)
        exit(1)//el 1 significa que se finalizo incorrectamente
    }
}