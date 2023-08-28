import { DataTypes } from "sequelize";
import db from '../config/db.js'

const Usuario = db.define('usuario',{
    nombre:{
        type: DataTypes.STRING, //TIPO DE DATO
        allowNull: false// indica que ese campo no puede ir vacio.

    },
    email:{
        type: DataTypes.STRING, //TIPO DE DATO
        allowNull: false// indica que ese campo no puede ir vacio.
    },
    password:{
        type: DataTypes.STRING, //TIPO DE DATO
        allowNull: false// indica que ese campo no puede ir vacio.
    },
    token:{
        type: DataTypes.STRING, //TIPO DE DATO
        confirmado: DataTypes.BOOLEAN,
    },
    hooks:{ 
        //Antes que se cree el password, lo interseptamos y lo encriptamos.
        beforeCreate: async function(usuario){
        

        }

    }
    

})
export default Usuario