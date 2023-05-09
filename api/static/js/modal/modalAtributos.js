function modalAtributos(bloqueID){
    let llavePrincipal = buscarBloque(bloqueID)
    let tipo = "", arrTitulos = [], arrContenidos = []
    let diccTipos = {'img': 'imagen', 'text': 'texto', 'section': 'seccion', 'espacio': 'espacio', 'video': 'video', 'slideGalery': 'slideGalery', 'footer': 'footer', 'menu': 'menu', 'codEmbebido': 'embebido'}
    let u = 0;

    if(Number.isInteger(llavePrincipal)){
        //let u = 0;
        for (tipoAUsar in diccionario[llavePrincipal]) {
            tipo = tipoAUsar
            actualizarBloqueEnUso(`${diccTipos[tipo]}`) // con id ùnico ${bloqueID}
            for (tituloContenido in diccionario[llavePrincipal][tipoAUsar]) {
                arrTitulos.push(tituloContenido)
                arrContenidos.push([])
                for(contenidoFinal in diccionario[llavePrincipal][tipoAUsar][tituloContenido]){
                    //console.log(contenidoFinal);
                    //console.log(diccionario[llavePrincipal][tipoAUsar][tituloContenido][contenidoFinal]);
                    arrContenidos[u].push(diccionario[llavePrincipal][tipoAUsar][tituloContenido][contenidoFinal])
                }
                u += 1;
            }
        }
    } else {
        actualizarBloqueEnUso(`footer: ${llavePrincipal}`)
        let footer = retornarObjecto('footer')
        for(a in footer['footer']['contenido']){
            for(e in footer['footer']['contenido'][a]){
                //arrContenidos.push([])
                for(i in footer['footer']['contenido'][a][e]){
                    /*console.log(a);
                    console.log(e);
                    console.log(i);*/
                    if(footer['footer']['contenido'][a][e]['id'] == llavePrincipal){
                        arrTitulos.push(i)
                        arrContenidos.push(footer['footer']['contenido'][a][e][i])
                    }
                }
                //u += 1
            }
        }
    }


    //console.log(diccionario);

    let codArre = ``
    codArre += `
    <div style="width: 100%; margin-top: 2%; margin-bottom: 2%; display:block; justify-content: space-between;"> 
            <div style="display:block;">`
        arrTitulosHijos = []    
        for (let u = 0; u < arrTitulos.length; u++) {

                let acc = "`", id= `${llavePrincipal}$${tipo}$${arrTitulos[u]}`, idItem = `${acc}${id}${acc}`, nombreDicPadre = `'${arrContenidos[0][0]}'`
                
                nombreDicPadre = buscarCaracterParaReemplazar(nombreDicPadre, '<', '')// lo hago porque los codigos embebidos pueden dar problemas
                nombreDicPadre = buscarCaracterParaReemplazar(nombreDicPadre, '>', '')
                nombreDicPadre = buscarCaracterParaReemplazar(nombreDicPadre, '"', `'`)

                if(arrTitulos[u] != 'id' && arrTitulos[u] != 'codigo'){// no me deja mostrar el ID ya que no tiene lògica que lo modifique 
                    arrTitulosHijos.push(`${arrTitulos[u]}Hijo`)
                    let efectoFondo = 'background: rgba(0, 0, 0, 0.473);'
                    codArre += `
                    <div id='${arrTitulos[u]}' style="display: flex; justify-content: space-between;"><h3 style="color:white;">${arrTitulos[u]}</h3> <img class='opcionSeleccionable' style="border-radius: 50%; width: 30px; height: 30px;" onclick="abirOpcionEdicionModal('${arrTitulos[u]}Hijo')"  src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597776/nuevo_dwrcbu.png"></div>
                    <div id='${arrTitulos[u]}Hijo' style="max-height: 1px; overflow-y: auto; padding-right: 1%; padding-left: 1%; padding-bottom: 1%; border-radius: 0.5em; color:white; ${efectoFondo}">
                        <div style="position: sticky; top: 0; z-index: 1; padding-top:1%; display:flex; justify-content: space-between; ${efectoFondo}">
                            `
                        if(arrTitulos[u] != 'tipo' && arrTitulos[u] != 'eventos' && arrTitulos[u] != 'style' && arrTitulos[u] != 'crearNuevo'  && arrTitulos[u] != 'borrar'  && arrTitulos[u] != 'codigo' && arrTitulos[u] != 'codigoEmbebido'){
                            codArre += `
                            <img class='opcionSeleccionable' style="border-radius: 50%; width: 50px; height: 50px;" onclick="crearItem(${idItem}, ${nombreDicPadre})"  src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597776/nuevo_dwrcbu.png">`
                        }
                    codArre += `
                        </div>`
                    //console.log(arrTitulos);
                    //console.log(arrContenidos);
                    for (let i = 0; i < arrContenidos[u].length; i++) {
                        //console.log(arrContenidos[u][i]);
                        //console.log(arrContenidos[u]);
                        id= `${llavePrincipal}$${tipo}$${arrTitulos[u]}$${i}`
                        codArre += `
                        <div id="contenido${id}" style="display:block; justify-content: space-between; padding: 0.5%; border-radius: 0.5em; ${efectoFondo}">
                            ${decidirAccionDetallaOpciones(arrContenidos[u][i], arrTitulos[u], id, idItem, i, nombreDicPadre)}
                        </div>
                        <br>`
                    }
                    codArre += `
                    </div>
                    <br>`
                }
        }
		codArre += `
            </div>`
        codArre +=`
    </div>`
    
    return(codArre)
    ActivarModal(codArre)
}