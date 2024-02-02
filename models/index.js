import Propiedad from './Propiedad.js';
import Categoria from './Categoria.js';
import Usuario from './Usuario.js';

//genero las relaciones entre el modelo propiedad y los demas.
Propiedad.belongsTo(Categoria,{foreignKey: 'precioId'})
Propiedad.belongTo(Usuario,{foreignKey: 'usuarioId'})

export default{
    Propiedad,
    Categoria,
    Usuario,
}
