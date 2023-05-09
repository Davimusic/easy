function footer(eventos, clas, estilos, contenido){
    estilos = buscarCaracterParaReemplazar(estilos, '`', `'`)

    /*let con = ''
    for( u in contenido){
        //console.log(con);
        con += decidirAccionArmadoComponents([traducirMirar(u)], contenido[u][traducirMirar(u)], con)
    }*/
    
    let code = `
        <div style="display: block; position: relative; width: fit-content;">
            ${retornarModalObjetos('footer')}
            <footer id = 'footer' class='${clas}' style="${estilos} overflow-x: auto; white-space: nowrap;" ${eventos}></footer>
        </div>`
    return code
}