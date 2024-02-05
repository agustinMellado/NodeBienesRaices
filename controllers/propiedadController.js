import Categoria from "../models/Categoria.js"


const admin = (req,res)=>{
    res.render('propiedades/admin',{
        pagina:'Mis Propiedades',
        mostrarNavbar: true
    })

}

const crear = async (req, res)=>{
    //consultar modelo Categoria
    const categorias= await Categoria.findAll();

    res.render("propiedades/crear", {
        pagina:'Crear Propiedad',
        mostrarNavbar: true,
        categorias:categorias
    })
}
const guardar =(req, res)=>{

}
export {
    admin,
    crear,
    guardar
}