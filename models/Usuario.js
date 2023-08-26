import { DataType } from "sequelize";
import db from '../config/db.js'

const Usuario = db.define('usuario',{
    nombre:{
        type: DataType.STRING,
        allowNull: false// indica que ese campo no puede ir vacio.

    },
    email:{
        type: DataType.STRING,
        allowNull: false// indica que ese campo no puede ir vacio.
    },
    password:{
        type: DataType.STRING,
        allowNull: false// indica que ese campo no puede ir vacio.
    },
    token:{
        type: DataType.STRING,
        confirmado: DataType.Boolean,
    }


})