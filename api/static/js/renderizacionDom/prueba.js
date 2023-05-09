historialStyleBody
// contemplando borrar
let arrAccEventos = [] 
let acc = "`"
'porAhora'
TipoUsoFondoBody // todo objeto se le debe inyectar el  `eventoUnico(this.id, 'modalAtributos(${mirar[0]})')` para poder ser operado en el modal en la posicion 0
let diccionario =  [   
                    {"menu":{
                        "id": ["menu"],
                        "crearNuevoLink": [''],
                        "encabezados": [['inicio', []],['Egresos', ['egresos1', 'egresos2']], ['flujos por referencias', []]],
                        "class": ["centrar ", 'organizarPorFilas '],
                        "eventos": [[''], [''], ['']],
                        "style": [['margen',"margin-top: 0px", "margin-right: 20px", "margin-left: 20px", "margin-bottom: 20px"], ['relleno',"padding-top: 0px", "padding-right: 0px", "padding-left: 0px", "padding-bottom: 0px"],  ["ancho", "width: 100%"], ["alto", "height: 20px;"], ['radio de borde',"border-top-left-radius: 0em", "border-top-right-radius: 0em", "border-bottom-left-radius: 0em", "border-bottom-right-radius: 0em"], ['color letra', 'color: rgba(255, 255, 255, 1)'], ['fondo', 'background: rgba(27, 207, 27, 1)'], ['mostrar en modo', 'display: flex']],
                    }},
                    {"footer":{
                        "id": ["footer"],
                        "crearNuevo": [''], 
                        "codigoEmbebido": [''],
                        "class": ["centrar ", 'organizarPorFilas '],
                        "eventos": [[''], [''], ['']],
                        "style": [['margen',"margin-top: 20px", "margin-right: 20px", "margin-left: 20px", "margin-bottom: 20px"], ['relleno',"padding-top: 0px", "padding-right: 0px", "padding-left: 0px", "padding-bottom: 0px"],  ["ancho", "width: 100%"], ["alto", "min-height: 100px;"], ['radio de borde',"border-top-left-radius: 0em", "border-top-right-radius: 0em", "border-bottom-left-radius: 0em", "border-bottom-right-radius: 0em"], ['color letra', 'color: rgba(255, 255, 255, 1)'], ['fondo', 'background: rgba(207, 207, 207, 0)'], ['mostrar en modo', 'display: flex']],
                        "contenido": {}
                    }},   
                    {"section":{
                        "id": ["contenedor0"],
                        "crearNuevo": [''], 
                        "codigoEmbebido": [''],
                        "class": ["centrar ", 'organizarPorFilas '],
                        "eventos": [[''], [''], ['']],
                        "style": [['margen',"margin-top: 0px", "margin-right: 0px", "margin-left: 0px", "margin-bottom: 0px"], ['relleno',"padding-top: 0px", "padding-right: 0px", "padding-left: 0px", "padding-bottom: 0px"],  ["ancho", "width: 100%"], ["alto", "min-height: 100px;"], ['radio de borde',"border-top-left-radius: 0em", "border-top-right-radius: 0em", "border-bottom-left-radius: 0em", "border-bottom-right-radius: 0em"], ['color letra', 'color: rgba(255, 255, 255, 1)'], ['fondo', 'background: rgba(207, 207, 207, 0)'], ['mostrar en modo', 'display: flex']],
                        "absorber": ["si"],
                        "borrar": [''] 
                    }}                  
            ] 

let detenerOnclickModal = "si" // estaba en no, prueba  
                
function traducirDiccionario(id){
    arrNombreObjetos = []
    document.getElementById('enviarDicc').value = JSON.stringify(diccionario);

    let codigoHTML = ''

    for (llavePadre in diccionario) {
        for (llaveHija in diccionario[llavePadre]){
            let dicc = diccionario[llavePadre][llaveHija]
            arrNombreObjetos.push(dicc['id'][0])
            if(llaveHija == "section"){
                codigoHTML = decidirAccionArmadoComponents(llaveHija, dicc, codigoHTML)
            } 
        }
    }

    document.getElementById(id).innerHTML = codigoHTML 
    document.getElementById('footer').innerHTML = inyectarObjetosAFooter()

    actualizarDiccStyleBody()
    inyectarPaletaColorMostrador('noIncrementar')

    let porAhora = document.getElementById('porAhora')
    porAhora.style.height = ''// buscar en algun lado es inyectado el height, hay que eliminarlo

    reubicarBotonenEdicion(1000)
}

async function reubicarBotonenEdicion(tiempoMili){
    await wait(tiempoMili)
    for (let u = 0; u < arrNombreObjetos.length; u++){
        let obj = document.getElementById(arrNombreObjetos[u])
        if(obj != null){
            let alto = obj.clientHeight - 25 //25 es el alto del boton
            document.getElementById(`${arrNombreObjetos[u]}BotonEdicion`).style.top = `${alto}px`
            document.getElementById(`${arrNombreObjetos[u]}BotonEdicion`).classList.add("rotarInfinito");
            //rotar(`${arrNombreObjetos[u]}BotonEdicion`, 2, '-360')
        }
    }
}

function inyectarObjetosAFooter(){
    let arr = [], arrSalida = []
    for(u in diccionario){
        for(i in diccionario[u]){
            arr.push([i, diccionario[u]])
        }
    }
    
    let bandera = 0
    for (let u = (arr.length -1); u >=  0; u--) {
        //console.log(arr[u]);
        if(arr[u][0] == 'footer'){
            bandera = 1
        }
        if(bandera  == 1){
            if(arr[u][0] != 'section' && arr[u][0] != 'footer'){
                arrSalida.push([arr[u][0], arr[u][1]])
            } 
            if(arr[u][0] == 'section'){
                bandera = 0
            } 
        }
    }
    
    let code = ''
    /*for (let u = 0; u < arrSalida.length; u++) {
        code += decidirAccionArmadoComponents(arrSalida[u][0], arrSalida[u][1][arrSalida[u][0]], code)
    }*/
    for (let u = (arrSalida.length - 1); u >= 0; u--) {
        code += decidirAccionArmadoComponents(arrSalida[u][0], arrSalida[u][1][arrSalida[u][0]], code)
    }
    
    return code
}

function retornarCantidadObjetos(obj){
    let num = 0
    for(u in diccionario){
        for(i in diccionario[u]){
            if(i == obj){
                num += 1
            }
        }
    }
    return num
}

function actualizarDiccStyleBody(){
    document.getElementById('styleBody').value = historialStyleBody[numHistorialActual];
}

function aderirHistorial(cod, acc){
    //console.log(`aderirHistorial`);
    DiccStyleBody = {'tipoDeletra': tipoDeletra, 'fondoContenedorColorBody': fondoContenedorColorBody, 'transparenciaFondoContenedorBody': transparenciaFondoContenedorBody, 'fondoContenedorImagenBody': fondoContenedorImagenBody, 'TipoUsoFondoBody': TipoUsoFondoBody, 'paletaDeColores': buscarCaracterParaReemplazar(JSON.stringify(paletaDeColores), '"', '`')}
    document.getElementById('styleBody').value = JSON.stringify(DiccStyleBody)

    //console.log(JSON.stringify(DiccStyleBody));

    historialStyleBody.splice((numHistorialActual + 1), 0, JSON.stringify(DiccStyleBody));
    historial.splice((numHistorialActual + 1), 0, JSON.stringify(cod));

    document.getElementById('enviarDicc').value = JSON.stringify(cod)
    if(acc != 'arranque'){
        numHistorialActual += 1
    }
}

function historialDicc(acc){
    let pasar = 'no';
    if(acc == 'adelante'){
        if(historial.length - 1 >= numHistorialActual + 1){
            pasar = 'si'
            numHistorialActual += 1
        } else {
            saludar('adelante, no hay mas')
        }
    } else if(acc == 'atras'){
        if(numHistorialActual - 1 >= 0){
            pasar = 'si'
            numHistorialActual -= 1
        } else {
            saludar('atras, no hay mas')
        }
    }
    if(pasar == 'si'){
        diccionario = eval(historial[numHistorialActual])
        console.log(historialStyleBody[numHistorialActual]);
        document.getElementById('editor').innerHTML = retornarBotonesEdicion(ubicacionActual)
        actualizarVariablesStyleBody(historialStyleBody[numHistorialActual])
        traducirDiccionario('porAhora')
        actualizarTipoDeLetra(tipoDeletra)  
    }
}

async function actualizarAnchoContenedorPadre(valor){
    congelarActualizacionPantalla = 'si'
    let divPadre = document.getElementById('porAhora')
    divPadre.style.transition = '2s'

    anchuraEnPixeles = divPadre.offsetWidth;
    let anchuraEnPorcentajeEnPixeles = anchuraEnPixeles * (valor / 100);
    //let anchuraEnPorcentajeEnPorcentaje = (anchuraEnPorcentajeEnPixeles / anchuraEnPixeles) * 100;

    divPadre.style.width = `${valor}%`
    medidaAnchoPantallaPadre = valor

    let desicionMargin = ''
    console.log(estadoModal);
    if(estadoModal == 'activado'){
        desicionMargin = 'marginRight'
        divPadre.style.marginLeft = '0px';
    } else {
        desicionMargin = 'marginLeft'
        divPadre.style.marginRight = '0px';
    }
    eval(`divPadre.style.${desicionMargin} = '${(100 - parseInt(valor)) / 2}%'`)
    congelarActualizacionPantalla = 'no'
    await wait(3000)
    traducirDiccionario('porAhora')
}

function buscarBloque(bloqueID){
    let llave = ''
    for (llavePrincipal in diccionario) {
        //console.log(llavePrincipal);
        for (llaveHija in diccionario[llavePrincipal]) {
            //console.log(diccionario[llavePrincipal][llaveHija]);
            //console.log(llaveHija);
            for (contenidoFinal in diccionario[llavePrincipal][llaveHija]) {
                //console.log(contenidoFinal);
                //console.log(diccionario[llavePrincipal][llaveHija][contenidoFinal]);
                if(diccionario[llavePrincipal][llaveHija][contenidoFinal] == bloqueID){
                    //console.log("entra");
                    //console.log(llavePrincipal);
                    llave = parseInt(llavePrincipal)
                }
            }
        }
    }

    if(llave == ''){
        let footer = retornarObjecto('footer')
        for(u in footer['footer']['contenido']){
            for(e in footer['footer']['contenido'][u]){
                if(footer['footer']['contenido'][u][e]['id'][0] == bloqueID){
                    llave = footer['footer']['contenido'][u][e]['id'][0]
                }
            }
        }
    }

    return llave
}

function usarInformacion(llavePrincipal, llaveHija, acc, info){  
    if(acc == "retornar solo"){
        //console.log(`${diccionario[0][llavePrincipal][llaveHija]}`);
    } else if(acc == "agregar"){
        diccionario[0][llavePrincipal][llaveHija].push(info)
    } else if(acc == "borrar"){
        let arre = diccionario[0][llavePrincipal][llaveHija]
        for (let u = 0; u < arre.length; u++) {
            if(arre[u] == info){
                arre[u] = ""// buscar que lo borre, mas no lo reescriba
            }
        }
    } else if(acc == "retornar todo"){
        //console.log("entra");
        //console.log(diccionario[0][llavePrincipal]);// el cero a futuro serà el id se cada seccion o componente

    }  
    //console.log(`${diccionario[0][llavePrincipal][llaveHija]}`);  
}

function decidirAccionArmadoComponents(llaveHija, dicc, codigoHTML){

    if(llaveHija == "section"){
        
        let concatenado = `id = "${dicc['id']}" class = "${quitarComasDeArreglo(dicc['class'])}" ${quitarComasDeArreglo(agregarEventos(dicc['eventos'], dicc['id']))}`
        return section(concatenado, codigoHTML,  dicc['absorber'], dicc['id'], `style = "${quitarComasDeArreglo(unificarArreglos(dicc['style'], '; '))}"`)// pilas que en este el codigo inyectable anterior ya proviene junto con la funcion "div"
        //console.log(codigoInyectable);
    
    } else if(llaveHija == "img"){
        
        return imagen(dicc['link'], quitarComasDeArreglo(unificarArreglos(dicc['style'], '; ')), quitarComasDeArreglo(dicc['class']), quitarComasDeArreglo(agregarEventos(dicc['eventos'], dicc['id'])), dicc['id'])
    
    } else if(llaveHija == "video"){
        
        let concatenado = `id = "${dicc['id']}" class = "${quitarComasDeArreglo(dicc['class'])}" ${quitarComasDeArreglo(agregarEventos(dicc['eventos'], dicc['id']))}  style = "${quitarComasDeArreglo(unificarArreglos(dicc['style'], '; '))}"`
        return video(concatenado, dicc['link'], dicc)
    
    } else if(llaveHija == "espacio"){

        return espacio(dicc['espacios'])

    } else if(llaveHija == "text"){
        
        let concatenado = `id = "${dicc['id']}" class = "${quitarComasDeArreglo(dicc['class'])}" ${quitarComasDeArreglo(agregarEventos(dicc['eventos'], dicc['id']))}`
        return texto(dicc['tipo'], concatenado, dicc['texto'], `${separarPalabra(dicc['style'][5], 'color letra')[1]}; ${separarPalabra(dicc['style'][6], 'fondo')[1]};`, `${quitarComasDeArreglo(agregarEventos(dicc['eventos'], dicc['id']))}`, `${dicc['id']}`, `${quitarComasDeArreglo(unificarArreglos(dicc['style'], '; '))}`)
        
    } else if(llaveHija == 'slideGalery'){

        return slideGalery(dicc['id'][0], quitarComasDeArreglo(agregarEventos(dicc['eventos'], dicc['id'])), quitarComasDeArreglo(dicc['class']), quitarComasDeArreglo(unificarArreglos(dicc['style'], '; ')), dicc)
    
    } else if(llaveHija == "codEmbebido"){
        
        return codEmbebido(dicc['id'][0], quitarComasDeArreglo(agregarEventos(dicc['eventos'], dicc['id'])), quitarComasDeArreglo(dicc['class']), quitarComasDeArreglo(unificarArreglos(dicc['style'], '; ')), dicc['codigo'][0])
        
    } else if(llaveHija == 'footer'){

        return footer(quitarComasDeArreglo(agregarEventos(dicc['eventos'], dicc['id'])), quitarComasDeArreglo(dicc['class']), quitarComasDeArreglo(unificarArreglos(dicc['style'], '; ')), dicc['contenido'])
    
    }  else if(llaveHija == 'menu'){

        return menu(dicc['eventos'], quitarComasDeArreglo(dicc['class']), dicc['style'], dicc['encabezados'])
    
    }

}

function actualizarMostrarBotonesEdicion(id){
    reubicarBotonenEdicion(0)
    for (let u = 0; u < arrNombreObjetos.length; u++) {
        let acc = 'none'
        if(arrNombreObjetos[u] == id){
            acc = 'flex'
        } 
        displayObjeto(`${arrNombreObjetos[u]}BotonEdicion`, 1, acc)
    }
}

function unificarArreglos(arre, textoAdicional){
    let arr = []; text = ''
    if(textoAdicional != undefined){
        text = textoAdicional
    }
    for (let u = 0; u < arre.length; u++) {
        for (let e = 1; e < arre[u].length; e++) {
            arr.push(arre[u][e] + text)
        }
    }
    return arr
}

function agregarEventos(arr, id){
    //console.log(arr);
    //console.log(id);
    let onclick =  `onclick="eventoUnico(this.id, '`, onmouseover = `onmouseenter="`, onmouseout = `onmouseleave="`;
    let estadoOnClick = 'borrar',  estadoOnMouseOver = 'borrar', estadoOnMouseOut = 'borrar'; 
    
    //console.log(`detenerOnclickModal: ${detenerOnclickModal}`);
    if(detenerOnclickModal == 'no'){
        let acc = '`', colorLetraUsuario = '', colorFondoUSuario = '', colorLetraPaso = 'rgba(255, 255, 255, 1)', colorFondoPaso = 'rgba(50, 50, 50, 1)'

        for(i in diccionario){
            for(u in diccionario[i]){
                if(diccionario[i][u]['id'] == id){
                    colorLetraUsuario = diccionario[i][u]['style'][5][1]
                    colorFondoUSuario = diccionario[i][u]['style'][6][1]
                    tipoFondoUsuario = separarPalabra(colorFondoUSuario, ':')[0]
                    
                    //console.log(`tipoFondoUsuario: ${tipoFondoUsuario}`);
                    if(tipoFondoUsuario == 'background:'){
                        tipoFondoUsuario = 'cambiarColor'
                    } else {
                        tipoFondoUsuario = 'cambiarImagen'
                    }
                    
                    if(tipoFondoUsuario == 'cambiarColor'){
                        colorFondoUSuario = separarPalabra(colorFondoUSuario, ':')[1]
                    } else {
                        colorFondoUSuario = buscarCaracterParaReemplazar(diccionario[i][u]['style'][6][1], '`', `'`)
                    }

                    colorLetraUsuario = separarPalabra(colorLetraUsuario, ':')[1]

                    //console.log(Object.keys(diccionario[i]));

                    if(Object.keys(diccionario[i]) == 'section'){
                        colorFondoPaso = 'rgba(173, 33, 173, 0.5)'
                        colorLetraPaso = 'rgba(173, 33, 173, 0.5)'
                    } else if(Object.keys(diccionario[i]) == 'text'){
                        colorFondoPaso = 'rgba(33, 141, 173, 0.5)'
                        colorLetraPaso = 'rgba(255, 255, 255, 0.5)'
                    } else if(Object.keys(diccionario[i]) == 'img'){
                        colorFondoPaso = 'rgba(77, 173, 33, 0.5)'
                        colorLetraPaso = 'rgba(77, 173, 33, 0.5)'
                    } else if(Object.keys(diccionario[i]) == 'video'){
                        colorFondoPaso = 'rgba(221, 224, 11, 0.5)'
                        colorLetraPaso = 'rgba(221, 224, 11, 0.5)'
                    } else if(Object.keys(diccionario[i]) == 'slideGalery'){
                        colorFondoPaso = 'rgba(50, 50, 11, 0.5)'
                        colorLetraPaso = 'rgba(221, 224, 11, 0.5)'
                    } else if(Object.keys(diccionario[i]) == 'codEmbebido'){
                        colorFondoPaso = 'rgba(20, 75, 61, 0.5)'
                        colorLetraPaso = 'rgba(0, 146, 110, 0.5)'
                    } else if(Object.keys(diccionario[i]) == 'footer'){
                        colorFondoPaso = 'rgba(0, 0, 11, 0.5)'
                        colorLetraPaso = 'rgba(255, 255, 255, 0.5)'
                        /*let footer = retornarObjecto('footer')
                        for(u in footer['footer']['contenido']){
                            console.log(u);
                            let dicc = footer['footer']['contenido'][u][traducirMirar(u)]
                            console.log(quitarComasDeArreglo(agregarEventos(dicc['eventos'], dicc['id'])), dicc['id']);
                        }*/
                    } else if(Object.keys(diccionario[i]) == 'menu'){
                        colorFondoPaso = 'rgba(50, 50, 50, 1)'
                        colorLetraPaso = 'rgba(255, 255, 255, 1)'
                    } 
                }
            }
        }

        //onclick += `modalAtributos(${acc}${id}${acc})/`
        onclick += `log(${acc}${id}${acc})/`
        
        //onmouseover += `cambiarColor(${acc}${id}${acc},  ${acc}1${acc}, ${acc}${colorFondoPaso}${acc})/cambiarColorLetra(${acc}${id}${acc},  ${acc}1${acc}, ${acc}${colorLetraPaso}${acc})/border(${acc}${id}${acc}, 'aparecer')/actualizarMostrarBotonesEdicion(${acc}${id}${acc})/`
        onmouseover += `actualizarMostrarBotonesEdicion(${acc}${id}${acc})/`

        if(tipoFondoUsuario == 'cambiarImagen'){
            onmouseout  += `cambiarColor(${acc}${id}${acc},  ${acc}1${acc}, ${acc}'rgba(0, 146, 110, 0)'${acc})/`
        }                 

        //onmouseout  += `${tipoFondoUsuario}(${acc}${id}${acc},  ${acc}1${acc}, ${acc}${colorFondoUSuario}${acc})/cambiarColorLetra(${acc}${id}${acc},  ${acc}1${acc}, ${acc}${colorLetraUsuario}${acc})/border(${acc}${id}${acc}, 'desaparecer')/`
        onmouseout  += `/`

        estadoOnClick = 'usar', estadoOnMouseOver = 'usar', estadoOnMouseOut = 'usar'
    }

    for (let u = 0; u < arr.length; u++) {
        for (let e = 1; e < arr[u].length; e++) { // la posicion 0 de la e siempre serà para los eventos inyectados para edicion
                        
            if(u == 0){
                if(arr[u][e] != '') {
                    onclick += `${arr[u][e]}/`
                    estadoOnClick = 'usar'
                }

            } else if(u == 1){
                if(arr[u][e] != ''){
                    onmouseover += `${arr[u][e]}/`
                    estadoOnMouseOver = 'usar'
                } 
                
            } else if(u == 2){
                if(arr[u][e] != ''){
                    onmouseout += `${arr[u][e]}/`
                    estadoOnMouseOut = 'usar'
                } 
            }
        }
    }
    onclick = removerUltimoCaracter(onclick)
    onmouseover = removerUltimoCaracter(onmouseover)
    onmouseout = removerUltimoCaracter(onmouseout)

    onclick +=     `')" `
    onmouseover += `" `
    onmouseout +=  `" `

    if(estadoOnClick == 'borrar'){
        onclick = ''
    }
    if(estadoOnMouseOver == 'borrar'){
        onmouseover = ''
    }
    if(estadoOnMouseOut == 'borrar'){
        onmouseout = ''
    }

    let text = `${onmouseover} ${onmouseout} ${onclick}`
    //console.log(text);
    return text
}

function removerUltimoCaracter(texto){
    let text = ''
    for (let u = 0; u < (texto.length - 1); u++) {
        text += texto[u]
    }
    return text
}

function actualizarSelect(id, valor, estilo){
    console.log(`id: ${id}, valor: ${valor}`);
    let obj = document.getElementById(id)
    let arr = retornarArregloSelectStyle(valor), cod = '', sel = ''

    if(valor == 'porcentajes'){
        sel = '5%'
    } else if(valor == 'pixeles'){
        sel = '20px'
    } else if(valor == 'relativo'){
        sel = 'fit-content'
    } 

    for (let u = 0; u < arr.length; u++) {
        let select = ''
        if(sel == arr[u]){
            select = 'selected'
        }
        cod += `<option ${select} value='${arr[u]}'>${arr[u]}</option>`
    }

    obj.innerHTML = cod

    actualizarDicc(id, estilo + sel)
}

function retornarSelects(id, arr, evento, opcionActual){
    //console.log(`opcionActual:${opcionActual}, arr: ${arr}, id: ${id}`);
    //let efectoFondo = 'background: #00000086; backdrop-filter: blur(10px);'
    let cod = ``
        cod += `
        <select style="background: rgba(0, 0, 0, 0.473); backdrop-filter: blur(10px); border-radius:0.5em; border:none; width: fit-content; height: 20px;" ${evento} name="${id}" id="${id}">`
        for (let u = 0; u < arr.length; u++) {
            let sel = '', llave = '', valor = '', largo = 0, colorFondo = ''
            if(arr[u][1] != undefined){
                largo = arr[u][1].length
            } else {
                largo = 0
            }


            if(largo > 1){
                llave = arr[u][1], valor = arr[u][0]
            } else {
                llave = arr[u], valor = arr[u]
            }
            if(opcionActual == llave){
                sel = 'selected'
            }                   //arr[u]
            cod += `
            <option ${sel} value="${valor}">${llave}</option>`
        }
    cod += `
        </select>`
    return cod 
}

function retornarInput(opcionActual, id, esconder){
    let cod = '', acc = ''
    if(esconder == 'esconder'){
        acc = `display: none;`
    }
    cod = `<input oninput="actualizarDicc(this.id, this.value)" style="${acc} border-radius:0.5em; border:none; width: 100%; height: 20px; margin-top: 15px; margin-right: 15px;" type="text" name="" value="${opcionActual}" id="${id}">`
    return cod;
}
                                           //referenciaFinal
function retornarTextArea(opcionActual, id, i){
    /*let ref = ''
    if(referenciaFinal != undefined){
        ref = referenciaFinal
    }                                                       //+ '${ref}'*/
    return `<textarea oninput="quitarSaltosDeLinea(this.value , '${id}')" style="background: white; width:100%; height: 50px; border-radius: 0.7em;" name="" id="textArea${i}" cols="30" rows="10">${agregarSaltosDeLinea(opcionActual)}</textarea>`

}

function retornarBotonBorrar(id, i, nombreDicPadre, opcionActual, text){
    let cod = ''
    //if(opcionActual != ''){
        cod = ` <div style="display: flex; justify-content: space-between;">
                    <img  style="border-radius: 50%; width: 50px; height: 50px; cursor:pointer;" onclick="borrarItem(${id}, ${i}, ${nombreDicPadre}, ${text})" src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597775/borrar_yw19rd.png">
                </div>`
    //}
    return cod;            
}

function borrarItem(id, codItem, idPadre, text){
    let arr = crearArreglo(id, '$')
	console.log(arr);
    let ruta = ''
    let coordenada = 0

    if(arr.length == 4){
        ruta = `diccionario[${arr[0]}].${arr[1]}.${arr[2]}`
        coordenada = codItem
    } else if(arr.length == 5){
        ruta = `diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}]`
        coordenada = arr[4]
    } else if(arr.length == 6){
        ruta = `diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}][${arr[4]}]`
        coordenada = arr[5]
    } 
    
    console.log(`ruta: ${ruta}, id: ${id}, codItem: ${codItem}, Idpadre: ${idPadre}, arr: ${arr}, coordenada: ${coordenada}`);
    
    console.log('antes de borrar');
    console.log(diccionario);
    let arreglo =  eval(ruta) 
    
    console.log(arreglo);
    
    let arre = []
    console.log(`coordenada: ${coordenada}`);
    console.log(`text: ${text}`);
    if(text == 'texto'  || text == 'linkSlideGalery'){
        for (let u = 0; u < arreglo.length; u++) {
            if(u != coordenada){
                let tex = '['
                for (let i = 0; i < arreglo[u].length; i++) {
                    tex += ` '${arreglo[u][i]}',`
                }
                tex = removerUltimoCaracter(tex)
                tex += ']'
                arre.push(tex)
            }
        }
    } else if(text == 'encabezados'){
        let arrePaso = eval(ruta)
        console.log(arrePaso);
        if(arr.length == 6){
            for (let u = 0; u < arrePaso.length; u++) {
                if(u != coordenada){
                    arre.push(`'${arrePaso[u]}'`)
                }
            }
        } else {
            //arre = ''
            for (let u = 0; u < arrePaso.length; u++) {
                let bandera = 0
                if(u != coordenada){
                    let tex = `['${arrePaso[u][0]}',[`
                    for (let e = 0; e < arrePaso[u][1].length; e++) {
                        bandera = 1
                        tex += `'${arrePaso[u][1][e]}',`
                    }
                    if(bandera == 1){
                        tex = removerUltimoCaracter(tex)
                    }
                    tex += ']],'
                    //arre += tex
                    arre.push(tex)
                }
            }
        }
    } else {
        for (let u = 0; u < arreglo.length; u++) {
            if(u != coordenada){
                arre.push(`'${arreglo[u]}'`)
            }
        }
    }
    console.log(arre);
    console.log(`${ruta} = [${arre}]`);
    eval(`${ruta} = [${arre}]`)
    console.log('despues de borrar');
    console.log(diccionario);
    traducirDiccionario('porAhora')
    modalAtributos(idPadre)
    //idElementoEnUso = arr[2]
    reubicar(arr[2])
    aderirHistorial(diccionario)
    setTimeout(reubicar, 1000)
}

function crearItem(id, idPadre){
    //console.log(idPadre);
    let arr = crearArreglo(id, '$')

    console.log(arr);

    let ruta = ''
    if(Number.isInteger(eval(arr[0]))){
        console.log(`entro arribaaaaa`);
        if(arr.length == 3){
            ruta = `diccionario[${arr[0]}].${arr[1]}.${arr[2]}`
        } else if(arr.length == 4){
            ruta = `diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}]`
        }  else if(arr.length == 5){
            ruta = `diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}][${arr[4]}]`
        }
    } else {
        console.log('abajooooooooo');
        let num = eval(`${retornarRutaObjetoFooter(arr[0], arr[2])}.text.texto`).length - 1
        console.log(num);
        console.log(`${retornarRutaObjetoFooter(arr[0], arr[2])}.text.texto[0]`);
        ruta = `${retornarRutaObjetoFooter(arr[0], arr[2])}.text.texto[0]`
        console.log(eval(ruta));
    }
    
    
    console.log(`crearItem, id: ${id}, idPadre: ${idPadre}, arr: ${arr}, ruta: ${ruta}`);
    
    let contenido = ''
    console.log(arr[2]);
    if(arr[2] == 'texto'){
        contenido = `['', '', '']`
    } else if(arr[2] == 'linkSlideGalery'){
        let num = parseInt(eval(`${ruta}.length`))
        contenido = `['https://res.cloudinary.com/dplncudbq/image/upload/v1676134087/mias/n3_hsowfh.jpg', 'lorem ipsum', '${num}']`
    } else if(arr[2] == 'encabezados'){
        if(arr.length == 5){
            contenido = `'nuevo submenu'`
        } else {
            contenido = `['', []]`
        }
    } else {
        contenido = `''`
    }
    console.log(`arr[2]: ${arr[2]}`);
    console.log(arr);
    if(arr[2] == 'encabezados' && arr.length == 4){
        let arre = []
        for (let u = 0; u < diccionario[0].menu.encabezados.length; u++) {
            arre.push(diccionario[0].menu.encabezados[u])
            if(u == arr[3]){
                arre.push(eval(`['nuevoMenu', []]`))
            } 
        }
        //console.log(arre);
        diccionario[0].menu.encabezados = arre
    } else {
        console.log(`${ruta}.push(${contenido})`);
        eval(`${ruta}.push(${contenido})`)
    }

    
    traducirDiccionario('porAhora')
    modalAtributos(idPadre)
    //idElementoEnUso = arr[2]
    //setTimeout(reubicar, 1000)
    reubicar(idPadre)
    aderirHistorial(diccionario)
    console.log(diccionario);
}

async function reubicar(coordenada){
    //if(coordenada != 'texto' && coordenada == undefined){
        //console.log(idElementoEnUso);
        /*let miObj = document.getElementById(idElementoEnUso);
        miObj.style.paddingTop = "100px";*/
        //location.hash = `#`
        await wait(250)
        console.log(coordenada);
        location.hash = `#${coordenada}`//"#eventos"
    //} 
    //await wait(250)
    //location.hash = `#`
}

function retornarArregloConRangoNumerico(minimo, maximo, incremento, textoAdicional){
    let arr = [], text = ''
    if(textoAdicional != undefined){
        text = textoAdicional
    }
    for (let u = minimo; u <= maximo; u += incremento) {
        let numPaso = u
        if(buscarCaracter(u, '.')){
            //console.log(`tiene ${u}`);
            numPaso = u.toFixed(1)
        } 
        arr.push(`${numPaso}${text}`)
    }
    return arr
}

function buscarCaracter(text, ref){
    //console.log(`buscarCaracter, text: ${text}, ref: ${ref}`);
    let tex = text + ""
    let res = false
    for (let u = 0; u < tex.length; u++) {
        if(tex[u] == ref){
            res = true
        }
    }
    //console.log(`buscarCaracter, res: ${res}`);
    return res
}

function sobreescribirPalabra(text, palabraBuscada, nuevaPalabra){
    let tex = '', arr = []
    for (let u = 0; u < text.length; u++) {
        if(text[u] != ' '){
            tex += text[u]
        } else {
            arr.push(tex)
            tex = ''
        }
    }
    tex = ''
    for (let u = 0; u < arr.length; u++) {
        if(arr[u] == palabraBuscada){
            tex += `${nuevaPalabra} `
        } else {
            tex += `${arr[u]} `
        }
    }
    return tex
}

function retornarPalabraParecida(text, palabra){
    let tex = '', arr = []
    for (let u = 0; u < text.length; u++) {
        if(text[u] != ' '){
            tex += text[u]
        } else {
            arr.push(tex)
            tex = ''
        }
    }
    tex = ''
    for (let u = 0; u < arr.length; u++) {
        if (arr[u].indexOf(palabra) !== -1) {
            return arr[u]
        } 
    }
    return tex
}



