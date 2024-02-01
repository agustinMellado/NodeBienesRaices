import Categoria from "../models/Categoria"


const admin = (req,res)=>{
    res.render('propiedades/admin',{
        pagina:'Mis Propiedades',
        mostrarNavbar: true
    })

}

const crear = async (req, res)=>{
    //consultar modelo Categoria
    const [categoria]= await Categoria.findAll()

    res.render("propiedades/crear", {
        pagina:'Crear Propiedad',
        mostrarNavbar: true,
        categoria
    })
}

export {
    admin,
    crear
}