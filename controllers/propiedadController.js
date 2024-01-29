
const admin = (req,res)=>{
    res.render('propiedades/admin',{
        pagina:'Mis Propiedades',
        mostrarNavbar: true
    })

}

const crear = (req, res)=>{
    res.render("propiedades/crear", {
        pagina:'Crear Propiedad',
        mostrarNavbar: true
    })
}

export {
    admin,
    crear
}