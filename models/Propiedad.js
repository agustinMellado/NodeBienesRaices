import { DataType, DataTypes } from "sequelize";
import db from '../config/db.js';

const Propiedad= db.define('Propiedad',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primarykey:true,
    },
    titulo:{
        type: DataTypes.STRING(100),
        allowNull:false,
    },
    titulo:{
        type: DataTypes.TEXT,
        allowNull:false,
    },
    habitaciones:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    estacionamiento:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    mascotas:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    calle:{
        type: DataTypes.STRING(60),
        allowNull:false,
    },
    lat:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    lng:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    img:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    publicado:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
})

export default Propiedad;