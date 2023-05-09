function retornarModalObjetos(id) {
    let idPuro = id
    id = `${id}Modal`
    /*return  `<div style="display: block;">
                <div style="display: none;" id="${id}">HOLA MUNDO ${id}</div>
                ${cod}
            </div>`*/

    return  `   <img id="${idPuro}BotonEdicion" onclick="activarModalObjeto('${idPuro}')" onmouseenter="resaltarObjeto('${idPuro}', 'aparecer')" onmouseleave="resaltarObjeto('${idPuro}', 'desaparecer')" class="efectoResaltar" style="display: none; width: 25px; height: 25px; position: absolute; z-index: 1000; top: 20px; margin-left: 200px; border-radius: 50%; background: black;" src="https://res.cloudinary.com/dplncudbq/image/upload/v1683213391/agregar_rcxpsj.webp">
                <div style="display: none; text-align: center; position: absolute; z-index: 1000; height: fit-content; width: 200px; background: #00000086; backdrop-filter: blur(10px);" id="${id}"></div>`        
}