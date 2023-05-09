//NOTA: las figuras siempren deben ser un cuadrado y de la misma medida.

let detenerMostrarSlideGalery = 'no', diccBotonesOpciones = {}

function objetoSlideGalery(idSeccion, Imagenes, textos, eventosContenedor, estilosGenerales, clases, textEstilosImagenes, maximaCantidadImagenesMostrar, eventosImagenes, dicc){
    //console.log(idSeccion);
    //console.log(obtenerPadre(idSeccion));

    let numMaxIma = parseInt(separarTextoPorPalabras(maximaCantidadImagenesMostrar, 'maximoimagenes:')[1]);
    
    let arreImagenes = retornarArregloAPartirDeCarater(Imagenes, '&')
    let arretextos = retornarArregloAPartirDeCarater(textos, '&')
    
    let alturaPantalla = window.innerHeight; //screen.height;
    //let anchoPantalla = window.innerWidth; //screen.width;
    var divPadre = document.getElementById("porAhora");
    let anchoPantallaDisponible = (divPadre.offsetWidth / 100) * 80; // le restamos 4% de los 2% padding, tambièn le doy un pequeño margen de error
    
    let primeraReferencia = parseInt(separarTextoPorPalabras(dicc['styleImagenes'][3][1], 'cuadrado:')[1])

    let IdSeccionPaso = parseInt(separarTextoPorPalabras(idSeccion, 'slideGalery')[1]);

    let display = dicc['style'][dicc['style'].length - 1][1]
    let widthOpciones = 200
    if(display == 'display: block'){
        widthOpciones = alturaPantalla/7
    }

    let cod = ""
    /*let puntero = 0; 
    let arrePaso = []*/

    for (let u = 0; u < dicc['linkBotonesOpciones'].length; u++) {
        diccBotonesOpciones[dicc['linkBotonesOpciones'][u][0]] = dicc['linkBotonesOpciones'][u][1]
    }

    //calculo las margin right y left de mi las imagenes internas
    let mi = []
    for (let u = 2; u < 4; u++) {
        mi.push(separarPalabra(dicc['styleImagenes'][0][u], ':'))
    }
    //console.log(mi);
    let medidas = []
    for (let u = 0; u < mi.length; u++) {
        let text = mi[u][1]
        text = buscarCaracterParaReemplazar(text, 'p', '')
        text = buscarCaracterParaReemplazar(text, 'x', '')
        medidas.push(text)
    }

    let ladosImagen = parseInt(medidas[0]) + parseInt(medidas[1])
    

    //inicio de creacion de div que se sobrepone para usar flechas y botones
    cod += ` 
        <div id='slideGalery${IdSeccionPaso}' style="${estilosGenerales}  position: relative; margin: auto;" ${eventosContenedor} class="${clases}">                                                                                                       
        `
        cod += 
            `
            <div id='contenedorMultimedia_slideGalery${IdSeccionPaso}' style='opacity: 0; display: flex; align-items: center; justify-content: center;'>
                <img class='mano' style="position: absolute; top: 50%; transform: translateY(-50%); left: 0; height: 30px; width: 30px;" onclick="avanzarCatalogoSlideGalery('slideGalery${IdSeccionPaso}', 1, '${obtenerPadre(idSeccion)}')/detenerMostrarioSlideGalery()" src="${diccBotonesOpciones['boton atras']}" alt=""  >
            `
            //console.log(`numMaxIma: ${numMaxIma}`);
            let vecesPasadas = 0
            for (let i = 0; i < arreImagenes.length; i++) {
                if(i < numMaxIma && (((primeraReferencia * 2) * i) + widthOpciones + ladosImagen) < divPadre.offsetWidth ){
                    vecesPasadas += 1
                    cod += `
                            <div class="display: flex; align-items: center; justify-content: center;">
                                <img ${agregarEventosImagenes(idSeccion, `${IdSeccionPaso}imgSlide${i}`, eventosImagenes)} style='${textEstilosImagenes} width: ${primeraReferencia}px; height: ${primeraReferencia}px;' id="${IdSeccionPaso}imgSlide${i}" onmouseout="" onmouseover="" class="borde1 mano" src="${arreImagenes[i]}" alt="">
                                <div style="max-width: ${primeraReferencia}px; height: fit-content; overflow: visible;" id="${IdSeccionPaso}textSlide${i}"> ${arretextos[i]} </div>
                            </div>
                    ` 
                } else{
                    cod += `
                            <div style='display: none;'>
                                <img style='${textEstilosImagenes}' id="${IdSeccionPaso}imgSlide${i}" class="borde1 mano" style="height: ${alturaPantalla/3.5}px;" src="${arreImagenes[i]}" alt="">
                                <div id="${IdSeccionPaso}textSlide${i}"> ${arretextos[i]} </div>
                            </div>
                    ` 
                }
            }
            cod += 
            `
                <img class='mano' style="position: absolute; top: 50%; transform: translateY(-50%); right: 0; height: 30px; width: 30px;" onclick="avanzarCatalogoSlideGalery('slideGalery${IdSeccionPaso}', -1, '${obtenerPadre(idSeccion)}')/detenerMostrarioSlideGalery()" src="${diccBotonesOpciones['boton adelante']}" alt="" >
            </div>  
        `   
            if(display == 'display: block'){
                widthOpciones = (primeraReferencia * vecesPasadas) + ladosImagen
            }
            //console.log(`widthOpciones abajo: ${widthOpciones}, vecesPasadas: ${vecesPasadas}`);
            cod += 
            `
            <div style='max-width: ${widthOpciones}px; position: absolute; top: 80%; transform: translateY(-50%); right: 0;' class="flex paddingSuperiorInferior contenedorGaleria">        
            `
        //calculo la cantidad de imagenes disponibles

        for (let i = 0; i < arreImagenes.length; i++) {
            let link = `${diccBotonesOpciones['item seleccionado']}`
            if(i != 0){
                link = `${diccBotonesOpciones['item no seleccionado']}`
            }
            cod += 
                    `
                    <img  id="${IdSeccionPaso}pelotaSlide${i}" class='mano' onclick="reorganizarContenido('slideGalery${IdSeccionPaso}', ${i}, '${obtenerPadre(idSeccion)}')/detenerMostrarioSlideGalery()" style="height: 20px; width: 20px;  padding-right: 10px;  padding-left: 10px;" src="${link}" alt="" >
                    `
        }
            cod += 
            `
            </div>
        </div>           
        `
        //activarContenedorMultimedia(`contenedorMultimedia_slideGalery${IdSeccionPaso}`)
    return cod
}

/*async function activarContenedorMultimedia(id){
    await wait(500)
    let con = document.getElementById(id)
    con.style.transition = '0.5s'
    con.style.opacity = '1'
}*/

function obtenerPadre(idSeccion){
    for(u in diccionario){
        for(i in diccionario[u]){
            if(diccionario[u][i]['id'] == idSeccion){
                return 'diccionario'
            }
        }
    }

    /*let footer = retornarObjecto('footer')
    for(u in footer['footer']['contenido']){
        let dicc = footer['footer']['contenido'][u][traducirMirar(u)]['id'][0]
        if(dicc == idSeccion){
            return 'footer'
        }
    }*/    
}

function agregarEventosImagenes(idContenedor, idImagen, eventosImagenes){
    //console.log(`idContenedor: ${idContenedor}, idImagen: ${idImagen}, eventosImagenes:`);
    //console.log(eventosImagenes);
    let eventos = '', diccEntrada = {0: ` onclick="eventoUnico(this.id, '`, 1: ` onmouseover="`, 2: ' onmouseout="'}, diccSalida = {0: `')"`, 1: '"', 2: '"'}
    let bandera = 0
    for (let u = 0; u < eventosImagenes.length; u++) {
        bandera = 0        
        for (let e = 0; e < eventosImagenes[u].length; e++) {
            if(eventosImagenes[u][e] != ''){
                if(bandera == 0){
                    bandera = 1
                    eventos += diccEntrada[u]
                } 
                let text = `${eventosImagenes[u][e]}/`
                eventos += text.replace(idContenedor, idImagen)
            }   
        }
        eventos = removerUltimoCaracter(eventos)
        //console.log(eventosImagenes[u]);
        if(eventosImagenes[u][1] != ''){
            eventos += diccSalida[u]
        } 
    }
    //console.log(eventos);
    return eventos
}

function detenerMostrarioSlideGalery(){
    detenerMostrarSlideGalery = 'si'
}

function avanzarCatalogoSlideGalery(id, desicion, refPadre){
    let LargoLinks = [], largo = [], coordenadaActual = [], nuevaCoordenada = 0, accion = ''

    /*if(refPadre == 'footer'){
        let footer = retornarObjecto('footer')
        for(u in footer['footer']['contenido']){
            let dicc = footer['footer']['contenido'][u][traducirMirar(u)]
            console.log(dicc);
            if(u == 'slideGalery'){
                largo = dicc['linkSlideGalery'].length
                coordenadaActual = parseInt(dicc['coordenadaInicio'])
                LargoLinks = dicc['linkSlideGalery']
                nuevaCoordenada = reorganizarFlechaBalon(desicion, coordenadaActual, largo)['nuevaCoordenada']
                accion = reorganizarFlechaBalon(desicion, coordenadaActual, largo)['accion']
                dicc['coordenadaInicio'] = [nuevaCoordenada]
            }
        }
    } else {*/
        for(u in diccionario){
            for(i in diccionario[u]){
                //console.log(diccionario[u][i]['linkSlideGalery']);
                if(diccionario[u][i]['id'] == id){
                    largo = diccionario[u][i]['linkSlideGalery'].length
                    coordenadaActual = parseInt(diccionario[u][i]['coordenadaInicio'])
                    LargoLinks = [diccionario[u][i]['linkSlideGalery']]
                    nuevaCoordenada = reorganizarFlechaBalon(desicion, coordenadaActual, largo)['nuevaCoordenada']
                    accion = reorganizarFlechaBalon(desicion, coordenadaActual, largo)['accion']
                    diccionario[u][i]['coordenadaInicio'] = [nuevaCoordenada]
                }
            }
        }
    //}

    reorganizarContenido(id, nuevaCoordenada, accion, refPadre)
}

function reorganizarFlechaBalon(desicion, coordenadaActual, largo){

    let accion =  '',  nuevaCoordenada = 0
    if(desicion == 1){
        accion = 'invertir'
        if(coordenadaActual + 1 <= (largo -1)){
            //console.log(`àrriba`);
            nuevaCoordenada = coordenadaActual + 1
        } else {
            nuevaCoordenada = 0
            //console.log(`abajo`);
        }
    } else {
        accion = 'derecho'
        //console.log(coordenadaActual - 1);
        if(coordenadaActual - 1 >= 0){
            nuevaCoordenada = coordenadaActual - 1
        } else {
            nuevaCoordenada = (largo - 1)
        }
    }

    return {'nuevaCoordenada': nuevaCoordenada, 'accion': accion}
}

async function reorganizarContenido(id, coordenadaInicio, accion, refPadre){
    let contenedorMultimedia = document.getElementById(`contenedorMultimedia_${id}`)
    contenedorMultimedia.style.opacity = '0'
    contenedorMultimedia.style.transition = '1s'
    await wait(500)
    contenedorMultimedia.style.opacity = '1'
    
    let arr = []
    //if(refPadre == 'diccionario'){
        for(u in diccionario){
            for(i in diccionario[u]){
                if(diccionario[u][i]['id'] == id){
                    arr = [diccionario[u][i]['linkSlideGalery']][0]
                }
            }
        }
    /*/}/* else {
        let footer = retornarObjecto('footer')
        for(u in footer['footer']['contenido']){
            let dicc = footer['footer']['contenido'][u][traducirMirar(u)]
            //console.log(dicc);
            if(u == 'slideGalery'){
                arr = dicc['linkSlideGalery']
            }
        }
    }*/

    
    arr = retornarReorganizadoDesdeIndice(arr, coordenadaInicio, accion)
    
    let idTraducido = ''
    for (let e = 11; e < id.length; e++) {
        idTraducido += id[e]
    }

    for (let u = 0; u < arr.length; u++) {
        /*console.log(arr[u]);
        console.log(`${idTraducido}imgSlide${u}`);
        console.log(`${idTraducido}textSlide${u}`);*/
        document.getElementById(`${idTraducido}imgSlide${u}`).src = arr[u][0]
        document.getElementById(`${idTraducido}textSlide${u}`).innerText = arr[u][1]
    }

    for (let u = 0; u < arr.length; u++) {
        let link = ''
        if(u == parseInt(coordenadaInicio)){
            link = `${diccBotonesOpciones['item seleccionado']}`
        } else {
            link = `${diccBotonesOpciones['item no seleccionado']}`
        }
        document.getElementById(`${idTraducido}pelotaSlide${u}`).src = link
    }
}

/*function retornarLinkImagenes(id, nombreLlave, coordenadaInicio, accion){
    let arr = []//, arreId = []
    for(u in diccionario){
        for(i in diccionario[u]){
            if(diccionario[u][i]['id'] == id){
                arr = diccionario[u][i][nombreLlave]
                diccionario[u][i]['coordenadaInicio'] = coordenadaInicio
                return diccionario[u][i][nombreLlave]
            }
        }
    }
    return arr
}*/

function retornarReorganizadoDesdeIndice(arr, coordenadaDeInicio, accion) {
    //console.log(arr);
    //console.log(coordenadaDeInicio);

    let arre = []

    for (let u = coordenadaDeInicio; u < arr.length; u++) {
        arre.push(arr[u])
    }

    for (let u = 0; u < coordenadaDeInicio; u++) {
        arre.push(arr[u])
    }

    return arre
}

function recorrerObjetosSlideGalery(){
    if(estadoModal == 'desactivado'){
        if(detenerMostrarSlideGalery == 'no'){
            let arrIdObjetos = [], arrCoordenadasInicio = [], arrLargoLinks = [], coor = 0
            for(u in diccionario){
                if(Object.keys(diccionario[u])[0] == 'slideGalery'){
                    for(i in diccionario[u]){
                        //console.log(diccionario[u][i]['id']);
                        arrIdObjetos = [], arrCoordenadasInicio = [], arrLargoLinks = [], coor = 0
                        arrIdObjetos.push(diccionario[u][i]['id'])
                        arrCoordenadasInicio.push(diccionario[u][i]['coordenadaInicio'])
                        //diccionario[u][i]['coordenadaInicio'] = parseInt(diccionario[u][i]['coordenadaInicio']) + 1
                        arrLargoLinks.push(diccionario[u][i]['linkSlideGalery'])
                        if((parseInt(diccionario[u][i]['coordenadaInicio']) + 1) < arrLargoLinks[0].length){
                            //console.log('entrass');
                            coor = parseInt(arrCoordenadasInicio[0]) + 1
                        } else {
                            coor = 0
                        }  
                        //console.log(coor);
                        diccionario[u][i]['coordenadaInicio'] =  [coor]
                        reorganizarContenido(arrIdObjetos[0][0], coor, 'derecho', 'diccionario')
                    }
                }
            }

            /*arrIdObjetos = [], arrCoordenadasInicio = [], arrLargoLinks = []
            let footer = retornarObjecto('footer')
            for(u in footer['footer']['contenido']){
                let dicc = footer['footer']['contenido'][u][traducirMirar(u)]
                //console.log(dicc);
                if(u == 'slideGalery'){
                    arrIdObjetos.push(dicc['id'])
                    arrCoordenadasInicio.push(dicc['coordenadaInicio'])
                    arrLargoLinks.push(dicc['linkSlideGalery'])

                    if((parseInt(dicc['coordenadaInicio']) + 1) < arrLargoLinks[0].length){
                        //console.log('entrass');
                        coor = parseInt(arrCoordenadasInicio[0]) + 1
                    } else {
                        coor = 0
                    }  
                    //console.log(coor);
                    dicc['coordenadaInicio'] =  [coor]
                    reorganizarContenido(arrIdObjetos[0][0], coor, 'derecho', 'footer')
                }
            }*/
        } else {
            reactivarMostrarioSlideGalery()
        }
    }
}

function retornarArregloAPartirDeCarater(texto, caracter){
    let arr = []
    let textPaso = ''
    for (let u = 0; u < texto.length; u++) {
        if(texto[u] == '&'){
            arr.push(textPaso)
            textPaso = ''
        } else {
            textPaso += texto[u]
        }      
    }
    return arr
}

async function reactivarMostrarioSlideGalery(){
    await wait(5000)
    //console.log(`mostrario reiniciado`);
    detenerMostrarSlideGalery = 'no'
}

setInterval(recorrerObjetosSlideGalery, 4000)


const divParaObservar = document.getElementById('porAhora');

//const padreBody =  document.body

// Crear una instancia del objeto ResizeObserver
const observer = new ResizeObserver(entries => {
    if(congelarActualizacionPantalla == 'si'){
        console.log('traduciendo diccionario');
        traducirDiccionario('porAhora')
    } else {
        //console.log(`congelado`);
    }
});

if(divParaObservar){
    observer.observe(divParaObservar);
}

//observer.observe(padreBody)

