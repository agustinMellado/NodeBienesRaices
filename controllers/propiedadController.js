import { validationResult } from 'express-validation'//lee el resultado de la validacion
import Categoria from "../models/Categoria.js"


const admin = (req, res) => {
    res.render('propiedades/admin', {
        pagina: 'Mis Propiedades',
        mostrarNavbar: true
    })

}

const crear = async (req, res) => {
    //consultar modelo Categoria
    const categorias = await Categoria.findAll();

    res.render("propiedades/crear", {
        pagina: 'Crear Propiedad',
        mostrarNavbar: true,
        categorias: categorias
    })
}
const guardar = async (req, res) => {
    //Validacion
    let resultado = validationResult(req)

    if (!resultado.isEmpty()) {

        //consultar modelo Categoria
        const categorias = await Categoria.findAll();

        return res.render("propiedades/crear", {
            pagina: 'Crear Propiedad',
            mostrarNavbar: true,
            categorias: categorias,
            resultado: resultado.array()
        })
    }
}
export {
    admin,
    crear,
    guardar
}