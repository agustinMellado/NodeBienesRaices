import Sequelize from 'sequelize';

const db = new Sequelize('bienes_raices_node_mvc', 'root', 'root1941',{
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