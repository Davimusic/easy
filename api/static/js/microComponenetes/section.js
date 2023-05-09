function section(atributos, info, acc, id, style){

    //let numSections = retornarCantidadObjetos('section'), numPasoSections = 0 //numPasoSections < (numSections - 1)

    let inicioDiv = 0, llegadaDiv = 0, bandera = 0
    for (let i = 0; i < diccionario.length; i++) {
        for(u in diccionario[i]){
            if(diccionario[i][u]['id'] == id){ 
                llegadaDiv = i
                bandera = 1
            }
        }
        let llave = Object.keys(diccionario[i])[0];
        if('section' == llave && bandera == 0){
            inicioDiv = i + 1
        }
    }

    //console.log(diccionario);
    //console.log(`inicioDiv: ${inicioDiv}, llegadaDiv: ${llegadaDiv}`);
    //console.log(diccionario.length);

    let code =''
    if(diccionario.length - 1 > llegadaDiv){
        for (let i = inicioDiv; i < llegadaDiv; i++) {
            let llaveHija = Object.keys(diccionario[i])[0];
            let dicc = diccionario[i][llaveHija]
            //console.log(`llaveHija: ${llaveHija}, dicc:`);
            //console.log(dicc);
            code += decidirAccionArmadoComponents(llaveHija, dicc, code)
            //console.log(code);
        }
    } else {
        let dicc = {}
        for(u in diccionario){
            for(e in diccionario[u]){
                if(e == 'footer'){
                    dicc = diccionario[u][e]
                }
            }
        }
        //console.log(dicc);
        code = decidirAccionArmadoComponents('footer', dicc, code)//footer('','', '','')
    }
    

    let stylesFiltrados = buscarCaracterParaReemplazar(style, '`', `'`)
    
    
    let cod = `
            ${info}
            <div style="display: block; position: relative;">
                ${retornarModalObjetos(`${id[0]}`)}
                <section ${atributos}${stylesFiltrados}>
                    ${code}
                </section>
            </div>
        `

    return cod;
}