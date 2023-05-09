function menu(eventos, clas, estilos, arreLinks){
    return `<div style="display: block; position: relative; width: 100%;">
                ${crearMenu(arreLinks, eventos, estilos, clas)}
                ${retornarModalObjetos('menu')}
            </div>    
            `
}