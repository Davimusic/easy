function codEmbebido(id, eventos, clas, estilos, codigo){
    estilos = buscarCaracterParaReemplazar(estilos, '`', `'`)
    codigo = buscarCaracterParaReemplazar(codigo, '`', `'`)
    let code = `
        <div style="display: block; position: relative;">
            ${retornarModalObjetos(id)}
            <div z-index: 9000; id = '${id}' class='${clas}' style="${estilos} overflow-x: auto; white-space: nowrap;" ${eventos}>
                ${codigo}
            </div>
        </div>    
    `
    return code
}