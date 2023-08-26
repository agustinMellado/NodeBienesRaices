import Sequelize from 'sequelize';
import dotenv from "dotenv";
//configuracion que permite utilizar env
dotenv.config({path:'.env'})

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS,{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define:{//agrega la fecha de creacion y de modificacion a la tabla determinada.
        timestamps: true
    },
    //Configura en comportamiento para conexiones nuevas o existentes.
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases:false,
})
export default db;