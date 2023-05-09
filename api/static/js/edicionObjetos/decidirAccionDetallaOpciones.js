function decidirAccionDetallaOpciones(opcionActual, text, id, idItem, i, nombreDicPadre){
    //console.log(`opcionActual: ${opcionActual}, text: ${text}, id: ${id}, idItem: ${idItem}, i: ${i}, nombreDicPadre: ${nombreDicPadre}`);
    
    let arrClases = [' ', 'opcionSeleccionable ', 'sombra ', 'anchoMinimo ', 'anchoMaximo ', 'alturaMinina ', 'alturaMaxima ', 'mi ', 'efectoResaltar ', 'organizarPorFilas ', 'organizarPorColumnas ', 'girar90 ', 'centrar ', 'espacioEquilatero ', 'color1 ', 'color2 ', 'color3 ', 'color4 ', 'color5 ', 'color6 ', 'color7 ', 'color1Letra ', 'color2Letra ', 'color3Letra ', 'color4Letra ', 'color5Letra ', 'color6Letra ', 'color7Letra ']
    let arrTipos = ['p', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7' ]
    let arrDisplay = ['flex', 'block']
    let arrTexto = [' ', 'negrita', 'hiperLink']
    let arrOpcionConRelativo = ['pixeles', 'porcentajes', 'relativo']
    let arrOpcionSinRelativo = ['pixeles', 'porcentajes']
    let arreObjetosCreables = ['', 'contenedor', 'imagen', 'texto', 'video', 'slideGalery']
    let arrOpcion = ['pixeles', 'porcentajes', 'em']
    let arrSoloPorcentajes = ['porcentajes']
        
    let cod = ''
    if(text == 'class'){

        cod += `${retornarSelects(id, arrClases, 'onchange="actualizarDicc(this.id, this.value)"', opcionActual)}
                ${retornarBotonBorrar(`'${id}'`, i, nombreDicPadre, opcionActual)}`

    } else if(text == 'eventos' || text == 'eventosImagenes'){
        
        let diccEventos = {'0': 'click', '1': 'pasar el mouse', '2': 'sacar el mouse'}   
        let arr = crearArreglo(id, '$') 
        //console.log(`diccEventos[arr[3]]: ${diccEventos[arr[3]]},\n opcionActual: ${opcionActual}`)
        cod += `<div style = 'display:block; width: 100%;'>
                    <h3>${diccEventos[arr[3]]}</h3>`
            for (let u = 0; u < opcionActual.length; u++) {
                if(u == 0){
                    cod += `${retornarOpcionesEventos(id, nombreDicPadre, i, u, diccEventos[arr[3]])}`
                }
                
                let idEventos = `${id}$${u}`, idEventosBorrar = "`" + idEventos + "`"
                if(i != 0 && u != 0 || u != 0){ // no deja mostrar la primera posicion del arreglo eventos click porque este es inyectado para poder usar el modal
                    cod += `<div style='display: flex;'>
                                ${retornarInput(opcionActual[u], idEventos)}
                                ${retornarBotonBorrar(`${idEventosBorrar}`, i, nombreDicPadre, opcionActual)}
                            </div>`
                }
            }
        cod += `</div>`    
        
    } else if(text == 'tipo') {
            
        cod += `${retornarSelects(id, arrTipos, 'onchange="actualizarDicc(this.id, this.value)"', opcionActual)}`
           // ${retornarBotonBorrar(`'${id}'`, i, nombreDicPadre, opcionActual)}

    } else if(text == 'style') {
        
        for (let u = 0; u < opcionActual.length; u++) {
            if(u == 0){
            cod += `<h3>${opcionActual[0]}</h3>`
            } else {
                let palabras = separarPalabra(opcionActual[u], ':'), acc = "`"
                
                cod += `<div style='display: block;'>
                            <h4>${palabras[0]}</h4>`

                if(opcionActual[0] == 'margen' || opcionActual[0] == 'relleno'){

                    cod +=  `${retornarSelects(`${id}$filtarPaso`, arrOpcionSinRelativo, `onchange="actualizarSelect(${acc}${id}$${u}${acc}, this.value, ${acc}${palabras[0]}${acc})"`, retornarValorSelectStyle(palabras[1]))}
                            ${retornarSelects(`${id}$${u}`, retornarArregloSelectStyle(retornarValorSelectStyle(palabras[1])), `onchange="actualizarDicc(this.id, ${acc}${palabras[0]}${acc} + this.value)"`, palabras[1])}`
                
                } else if(opcionActual[0] == 'ancho'|| opcionActual[0] == 'alto'){
                    
                    cod +=  `${retornarSelects(`${id}$filtarPaso`, arrOpcionConRelativo, `onchange="actualizarSelect(${acc}${id}$${u}${acc}, this.value, ${acc}${palabras[0]}${acc})"`, retornarValorSelectStyle(palabras[1]))}
                            ${retornarSelects(`${id}$${u}`, retornarArregloSelectStyle(retornarValorSelectStyle(palabras[1])), `onchange="actualizarDicc(this.id, ${acc}${palabras[0]}${acc} + this.value)"`, palabras[1])}`
                
                } else if(opcionActual[0] == 'radio de borde'){
                    
                    cod += `${retornarSelects(`${id}$filtarPaso`, arrOpcion, `onchange="actualizarSelect(${acc}${id}$${u}${acc}, this.value, ${acc}${palabras[0]}${acc})"`, retornarValorSelectStyle(palabras[1]))}
                            ${retornarSelects(`${id}$${u}`, retornarArregloSelectStyle(retornarValorSelectStyle(palabras[1])), `onchange="actualizarDicc(this.id, ${acc}${palabras[0]}${acc} + this.value)"`, palabras[1])}`
                
                } else if(opcionActual[0] == 'color letra' || opcionActual[0] == 'fondo'){
                    /* lo que habìa
                    let ref = separarPalabra(opcionActual[u], ':')[0],  accDiv1 = '', accDiv2 = '', enUso = ''
                    //console.log(`opcionActual: ${opcionActual}, text: ${text}, id: ${id}, idItem: ${idItem}, i: ${i}, nombreDicPadre: ${nombreDicPadre}`);
                    if(ref == 'color:' || ref == 'background:' ){
                        //console.log(`entra colores`);
                        accDiv1 = 'flex'
                        accDiv2 = 'none'
                        enUso = 'color'
                    } else {
                        //console.log(`entra imagen`);
                        accDiv1 = 'none'
                        accDiv2 = 'flex'
                        enUso = 'imagen'
                    }

                    //console.log(separarPalabra(opcionActual[u], ':'));    
                    if(opcionActual[0] == 'fondo'){
                    cod += `${retornarSelects(`opcionesFondo${i}`, ['color', 'imagen'], `onchange= "actualizarOpcionFondo(this.value, ${u}, ${i})"`, enUso)}`    
                    }

                    let infColor = RgbaToHex(palabras[1])
                    let linkImagen = buscarCaracterParaReemplazar(separarPalabra(opcionActual[u], '(')[1], ')', '')
                    
                    if(linkImagen[0] != '`'){
                        linkImagen = ''
                    }

                    cod += `<input onchange= "saludar()" style='background: none; padding: none; margin: none; margin-left: 5px; height: 25px; width: 25px; border-radius: 0.7em;' id='fondoColorBody' value='#41a5a5' type='color'>
                            <div style='display: ${accDiv1}' id='contendorColor${u}${i}'>
                            <input onchange= "actualizarOpcionFondo('color', ${u}, ${i})" class='inputColor' style='border-radius: 0.7em; border: none;' id='${id}$${u}$color' value='${infColor[0]}' type='color'>
                            <input onchange= "actualizarOpcionFondo('color', ${u}, ${i})" class='inputRange' type="range" style="background: none;" id='${id}$${u}$transparencia' value='${infColor[1] * 10}' name="transparencia" min="0" max="10">
                            <img style="border-radius: 50%; width: 50px; height: 50px;" onclick="actualizarColor('${id}$${u}' , '${id}$${u}$color', '${id}$${u}$transparencia', '${palabras[0]}', '${i}', '${opcionActual[0]}')" src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597776/nuevo_dwrcbu.png">
                            </div>
                            <div style='display: ${accDiv2}' id='contendorImagen${u}${i}'>
                            <input oninput="actualizarColor('${id}$${u}' , '${id}$${u}$color', '${id}$${u}$transparencia', '${palabras[0]}', '${i}', '${opcionActual[0]}', 'inputcontendorImagen${u}${i}')" style="border-radius:0.5em; border:none; width: 100%; height: 20px; margin-top: 15px; margin-right: 15px;" type="text" name="" placeholder='link de la imagen' value="${linkImagen}" id="inputcontendorImagen${u}${i}">
                            </div>`
                    
                    
                    /*let ref = separarPalabra(opcionActual[u], ':')[0],  accDiv1 = '', accDiv2 = '', enUso = ''
                    if(ref == 'color:' || ref == 'background:' ){
                        accDiv1 = 'flex'
                        accDiv2 = 'none'
                        enUso = 'color'
                    } else {
                        accDiv1 = 'none'
                        accDiv2 = 'flex'
                        enUso = 'imagen'
                    }
        
                    if(opcionActual[0] == 'fondo'){
                        cod += `${retornarSelects(`opcionesFondo${i}`, ['color', 'imagen'], `onchange= "actualizarOpcionFondo(this.value, ${u}, ${i})"`, enUso)}`    
                    }
        
                    let infColor = RgbaToHex(palabras[1])
                    let linkImagen = buscarCaracterParaReemplazar(separarPalabra(opcionActual[u], '(')[1], ')', '')
                            
                    if(linkImagen[0] != '`'){
                        linkImagen = ''
                    }
        
                    cod += `<div style='display: ${accDiv1}' id='contendorColor${u}${i}'>
                                ${retornarSelects(`${id}$${u}$color`, paletaDeColores, `onchange="actualizarColor('${id}$${u}' , '${id}$${u}$color', '${id}$${u}$transparencia', '${palabras[0]}', '${i}', '${opcionActual[0]}', 'inputcontendorImagen${u}${i}')"`, 'color2' )}
                                <img style="border-radius: 50%; width: 50px; height: 50px;" onclick="actualizarColor('${id}$${u}' , '${id}$${u}$color', '${id}$${u}$transparencia', '${palabras[0]}', '${i}', '${opcionActual[0]}')" src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597776/nuevo_dwrcbu.png">
                            </div>
                            <div style='display: ${accDiv2}' id='contendorImagen${u}${i}'>
                                <input oninput="actualizarColor('${id}$${u}' , '${id}$${u}$color', '${id}$${u}$transparencia', '${palabras[0]}', '${i}', '${opcionActual[0]}', 'inputcontendorImagen${u}${i}')" style="border-radius:0.5em; border:none; width: 100%; height: 20px; margin-top: 15px; margin-right: 15px;" type="text" name="" placeholder='link de la imagen' value="${linkImagen}" id="inputcontendorImagen${u}${i}">
                            </div>`   */                                               
                } else if(opcionActual[0] == 'mostrar en modo'){
                    cod += `${retornarSelects(`${id}$${u}`, arrDisplay, `onchange="actualizarDicc(this.id, ${acc}${palabras[0]}${acc} + this.value)"`, palabras[1])}`
                }   
                
                cod += `</div>`
            }
        }
            
    } else if(text == 'texto'){
        //console.log(`texto, opcionActual: ${opcionActual}`);
        for (let u = 0; u < opcionActual.length; u++) {
            if(u == 0){
                //console.log(`desde texto, opcionActual: ${opcionActual}, text: ${text}, id: ${id}, idItem: ${idItem}, i: ${i}, nombreDicPadre: ${nombreDicPadre}`);
                
                cod += retornarTextArea(agregarSaltosDeLinea(opcionActual[0], 'º', '\n'), `${id}$0`, i)
                cod += `<div style='margin-left: 3%; display: block;'>
                            <h4>Acciòn adicional</h4>`
                cod += `    ${retornarSelects(`${id}$1`, arrTexto, `onchange="actualizarDicc(this.id, this.value), activarInput('${`${id}$2`}', 'ingrese el link a usar', this.value)"`, opcionActual[1])}
                        </div>`
                cod += retornarInput('', `${id}$2`, 'esconder')
                cod += retornarBotonBorrar(`'${id}'`, i, nombreDicPadre, opcionActual, `'${text}'`)  
                arrLinks.push(`${id}`)    
            }
        }
                
    } else if(text == 'crearNuevo'){

        cod += `${retornarSelects(id, arreObjetosCreables, 'onchange="crearNuevoObjeto(this.id, this.value)"', opcionActual)}`

    } else if(text == 'borrar'){
        
        cod += `<img  style="border-radius: 50%; width: 50px; height: 50px; cursor:pointer;" onclick="borrarObjeto('${id}')" src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597775/borrar_yw19rd.png">`
    
    } else if(text == 'linkSlideGalery'){
        cod += retornarInput(opcionActual[0], `${id}$0`)
        cod += `<img class='mano' style="margin: 5px; height: 40px; width: 40px;" src="${opcionActual[0]}" alt="" >`
        cod += retornarInput(opcionActual[1], `${id}$1`)
        cod += retornarBotonBorrar(`'${id}'`, i, nombreDicPadre, opcionActual, `'${text}'`)
    } else if(text == 'styleImagenes') {
        
        for (let u = 0; u < opcionActual.length; u++) {
            if(u == 0){
            cod += `<h3>${opcionActual[0]}</h3>`
            } else {
                let palabras = separarPalabra(opcionActual[u], ':'), acc = "`"
                
                cod += `<div style='display: block;'>
                            <h4>${palabras[0]}</h4>`

                if(opcionActual[0] == 'margen'){

                    cod +=  `${retornarSelects(`${id}$filtarPaso`, arrSoloPorcentajes, `onchange="actualizarSelect(${acc}${id}$${u}${acc}, this.value, ${acc}${palabras[0]}${acc})"`, retornarValorSelectStyle(palabras[1]))}
                            ${retornarSelects(`${id}$${u}`, retornarArregloSelectStyle(retornarValorSelectStyle(palabras[1])), `onchange="actualizarDicc(this.id, ${acc}${palabras[0]}${acc} + this.value)"`, palabras[1])}`
                
                } else if(opcionActual[0] == 'ancho'|| opcionActual[0] == 'alto'){
                    
                    cod +=  `${retornarSelects(`${id}$filtarPaso`, arrOpcionConRelativo, `onchange="actualizarSelect(${acc}${id}$${u}${acc}, this.value, ${acc}${palabras[0]}${acc})"`, retornarValorSelectStyle(palabras[1]))}
                            ${retornarSelects(`${id}$${u}`, retornarArregloSelectStyle(retornarValorSelectStyle(palabras[1])), `onchange="actualizarDicc(this.id, ${acc}${palabras[0]}${acc} + this.value)"`, palabras[1])}`
                
                } else if(opcionActual[0] == 'radio de borde'){
                    
                    cod += `${retornarSelects(`${id}$filtarPaso`, arrOpcion, `onchange="actualizarSelect(${acc}${id}$${u}${acc}, this.value, ${acc}${palabras[0]}${acc})"`, retornarValorSelectStyle(palabras[1]))}
                            ${retornarSelects(`${id}$${u}`, retornarArregloSelectStyle(retornarValorSelectStyle(palabras[1])), `onchange="actualizarDicc(this.id, ${acc}${palabras[0]}${acc} + this.value)"`, palabras[1])}`
                
                } else if(opcionActual[0] == 'maximo imagenes'){
                    
                    cod += `${retornarSelects(`${id}$${u}`, retornarArregloConRangoNumerico(1, 10, 1, ''), `onchange="actualizarDicc(this.id, ${acc}${palabras[0]}${acc} + this.value)"`, palabras[1])}`
                
                } else if(opcionActual[0] == 'alto y ancho imagen'){
                    
                    cod += `${retornarSelects(`${id}$${u}`, retornarArregloConRangoNumerico(50, 400, 1, ''), `onchange="actualizarDicc(this.id, ${acc}${palabras[0]}${acc} + this.value)"`, palabras[1])}`
                
                }
                
                cod += `</div>`        
            }
        }
            
    } else if(text == 'linkBotonesOpciones'){
        cod += cod += `<h3>${opcionActual[0]}</h3>`
        cod += retornarInput(opcionActual[1], `${id}$1`)
    
    } else if(text == 'codigoEmbebido'){
        cod += `<input style="border-radius:0.5em; border:none; width: 100%; height: 20px; margin-top: 15px; margin-right: 15px;" type="text" name="" value="" id="${id}input">`
        cod += `<img class='opcionSeleccionable' style="border-radius: 50%; width: 50px; height: 50px;" onclick="inyectarCodigoEmbebido('${id}', )"  src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597776/nuevo_dwrcbu.png">`

    } else if(text == 'codigo'){
        opcionActual = buscarCaracterParaReemplazar(opcionActual, '<', '')
        opcionActual = buscarCaracterParaReemplazar(opcionActual, '>', '')
        opcionActual = buscarCaracterParaReemplazar(opcionActual, '"', `'`)
        cod += retornarInput(opcionActual, id)
    } else if(text == 'encabezados'){
        
            cod += `<p style='margin: 0px; margin-top: 5px;'>Titulo</p>`
            cod += `<div style='display: flex;'>
                        ${retornarBotonBorrar(`'${id}'`, i, nombreDicPadre, '', `'encabezados'`)}
                        ${retornarBotonCrear(`${id}`, nombreDicPadre)}
                        ${retornarBotonCrear(`${id}$1`, nombreDicPadre)}
                    </div>`
            cod += retornarInput(opcionActual[0], `${id}$0`)
            for (let e = 0; e < opcionActual[1].length; e++) {
                cod += `<p style='margin: 0px; margin-top: 5px;'>subtitulo ${e + 1}</p>`
                cod += retornarInput(opcionActual[1][e], `${id}$1$${e}`)
                cod += retornarBotonBorrar(`'${id}$1$${e}'`, i, nombreDicPadre, '', `'encabezados'`)
            }
        
    
    } else{

        cod += retornarInput(opcionActual, id)
        cod += retornarBotonBorrar(`'${id}'`, i, nombreDicPadre, opcionActual)
    
    }
    return cod
}