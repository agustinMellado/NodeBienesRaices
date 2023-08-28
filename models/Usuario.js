import { DataTypes } from "sequelize";
import db from '../config/db.js'
import bcrypt from "bcrypt";

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
    }},{
        hooks:{ 
            //Antes que se cree el nuevo registro de usuario,interseptamos el password y lo encriptamos.
            beforeCreate: async function(usuario){
                const salt = await bcrypt.genSalt(10);//cadena aleatoria que se utiliza como entrada adicional al algoritmo de hash
                usuario.password= await bcrypt.hash(usuario.password,salt);//asignamos el valor cifrado previo.
            }
    
        }
    }
    
    
    )
export default Usuario