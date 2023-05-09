function crearNuevoObjeto(id, valor, codigoEmbebido){
    if(valor != ''){
        //console.log(diccionario);
        //console.log(`crearNuevoObjeto, id: ${id}, valor: ${valor}`);
        let existente = 'no', incremento = 0, idPaso = ''

        while(existente == 'no'){
            idPaso = `${valor}${incremento}`
            //console.log(`bucle, idPaso: ${idPaso}`);
            
            for(u in diccionario){
                for(i in diccionario[u]){
                    if(diccionario[u][i]['id'] == idPaso){
                        existente = 'si'
                    }
                }
            }

            let footer = retornarObjecto('footer')
            for(u in footer['footer']['contenido']){
                let dicc = footer['footer']['contenido'][u][traducirMirar(u)]['id']
                if(dicc == idPaso){
                    existente = 'si'
                }
            }

            if(existente == 'no'){
                break
            } else {
                existente = 'no'
            }
            incremento += 1
        }
        
        let cod = ''
        if(valor == 'imagen'){
            cod = {"img": {
                "id": [`${idPaso}`],
                "link": ["https://res.cloudinary.com/dplncudbq/image/upload/v1657473822/mias/red-304573_xrlhrp.png"],
                "style": [['margen',"margin-top: 20px", "margin-right: 20px", "margin-left: 20px", "margin-bottom: 20px"], ['relleno',"padding-top: 20px", "padding-right: 20px", "padding-left: 20px", "padding-bottom: 20px"],  ["ancho", "width: 150px"], ["alto", "height: 25%"], ['radio de borde',"border-top-left-radius: 0.7em", "border-top-right-radius: 0.7em", "border-bottom-left-radius: 0.7em", "border-bottom-right-radius: 0.7em"], ['color letra', 'color: rgba(22, 45, 162, 1)'], ['fondo', 'background: rgba(207, 207, 207, 1)'], ['mostrar en modo', 'display: flex']],
                "class": ["prueba"],
                "eventos": [[''], [''], ['']],
                "borrar": [''] 
            }}
        } else if(valor == 'texto'){
            cod = {"text": {
                "id": [`${idPaso}`],
                "texto": [["Lorem ipsum dolor sit amet.", "", ""]],
                "style": [['margen',"margin-top: 20px", "margin-right: 20px", "margin-left: 20px", "margin-bottom: 20px"], ['relleno',"padding-top: 20px", "padding-right: 20px", "padding-left: 20px", "padding-bottom: 20px"],  ["ancho", "width: fit-content"], ["alto", "height: 50%"], ['radio de borde',"border-top-left-radius: 0.7em", "border-top-right-radius: 0.7em", "border-bottom-left-radius: 0.7em", "border-bottom-right-radius: 0.7em"], ['color letra', 'color: rgba(22, 45, 162, 0.52)'], ['fondo', 'background: rgba(207, 207, 207, 1)'], ['mostrar en modo', 'display: block']],
                "class": [""],
                "eventos": [[''], [''], ['']],
                "tipo": [`h1`],
                "borrar": [''] 
            }}
        } else if(valor == 'contenedor'){
            cod = {"section":{
                "id": [`${idPaso}`], 
                "crearNuevo": [''],
                "codigoEmbebido": [''],
                "class": ["centrar ", 'organizarPorFilas '],
                "eventos": [[''], [''], ['']],
                "style": [['margen',"margin-top: 0px", "margin-right: 0px", "margin-left: 0px", "margin-bottom: 0px"], ['relleno',"padding-top: 0px", "padding-right: 0px", "padding-left: 0px", "padding-bottom: 0px"],  ["ancho", "width: 100%"], ["alto", "min-height: 100px;"], ['radio de borde',"border-top-left-radius: 0em", "border-top-right-radius: 0em", "border-bottom-left-radius: 0em", "border-bottom-right-radius: 0em"], ['color letra', 'color: rgba(22, 45, 162, 0.52)'], ['fondo', 'background: rgba(107, 107, 107, 0)'], ['mostrar en modo', 'display: flex']],
                "absorber": ["si"],
                "borrar": [''] 
            }}
        } else if(valor == 'video'){
            cod = {"video": {
                "id": [`${idPaso}`],
                "style": [['margen',"margin-top: 20px", "margin-right: 20px", "margin-left: 20px", "margin-bottom: 20px"], ['relleno',"padding-top: 40px", "padding-right: 40px", "padding-left: 40px", "padding-bottom: 40px"],  ["ancho", "width: 200px"], ["alto", "height: 200px"], ['radio de borde',"border-top-left-radius: 0.7em", "border-top-right-radius: 0.7em", "border-bottom-left-radius: 0.7em", "border-bottom-right-radius: 0.7em"], ['color letra', 'color: rgba(22, 45, 162, 0.52)'], ['fondo', 'background: rgba(207, 207, 207, 1)'], ['mostrar en modo', 'display: flex']],
                "class": [""],
                "eventos": [[''], [''], ['']],
                "link": ["https://res.cloudinary.com/dplncudbq/video/upload/v1657988513/mias/y1_b0pxvc.mp4"],
                "borrar": [''] 
            }}
        }  else if(valor == 'slideGalery'){
            cod = {"slideGalery":{
                "id": [`${idPaso}`],
                "class": ["centrar "],
                "eventos": [[''], [''], ['']],
                "linkSlideGalery": [['https://res.cloudinary.com/dplncudbq/image/upload/v1676134087/mias/n3_hsowfh.jpg', 'texto', '0'], ['https://res.cloudinary.com/dplncudbq/image/upload/v1676134085/mias/n4_b8hoot.jpg', 'texto2', '1'], ['https://res.cloudinary.com/dplncudbq/image/upload/v1676134083/mias/c8_qndgsq.jpg', 'texto3', '2']], 
                "style": [['margen',"margin-top: 0px", "margin-right: 0px", "margin-left: 0px", "margin-bottom: 0px"], ['relleno',"padding-top: 20px", "padding-right: 20px", "padding-left: 20px", "padding-bottom: 20px"],  ["ancho", "width: fit-content"], ["alto", "height: fit-content"], ['radio de borde',"border-top-left-radius: 0em", "border-top-right-radius: 0em", "border-bottom-left-radius: 0em", "border-bottom-right-radius: 0em"], ['color letra', 'color: rgba(255, 255, 255, 1)'], ['fondo', 'background: rgba(7, 7, 107, 1)'], ['mostrar en modo', 'display: block']],
                "styleImagenes": [['margen',"margin-top: 0px", "margin-right: 0px", "margin-left: 0px", "margin-bottom: 0px"], ['radio de borde',"border-top-left-radius: 0em", "border-top-right-radius: 0em", "border-bottom-left-radius: 0em", "border-bottom-right-radius: 0em"], ['maximo imagenes', 'maximoImagenes: 3'], ['alto y ancho imagen', 'cuadrado: 200']],
                "eventosImagenes": [[''], [''], ['']],
                "linkBotonesOpciones": [['boton adelante', 'https://res.cloudinary.com/dplncudbq/image/upload/v1676133410/mias/adelante_ztqvpx.png'], ['boton atras', 'https://res.cloudinary.com/dplncudbq/image/upload/v1676133407/mias/atras_lfyntg.png'], ['item no seleccionado', 'https://res.cloudinary.com/dplncudbq/image/upload/v1676133403/mias/circuloVacio_pfaat6.png'], ['item seleccionado', 'https://res.cloudinary.com/dplncudbq/image/upload/v1676133405/mias/circuloRelleno_dehcpk.png']], 
                "coordenadaInicio" : [0],
                "borrar": [''] 
            }}
        } else if(valor == 'codEmbebido'){
            id = `${id}input`
            //console.log(codigoEmbebido);
            cod = {'codEmbebido': {
                "id": [`${idPaso}`],
                'codigo': [buscarCaracterParaReemplazar(codigoEmbebido, `"`, '`')],
                "class": ["centrar "],
                "style": [['margen',"margin-top: 0px", "margin-right: 0px", "margin-left: 0px", "margin-bottom: 0px"], ['relleno',"padding-top: 20px", "padding-right: 20px", "padding-left: 20px", "padding-bottom: 20px"],  ["ancho", "width: fit-content"], ["alto", "height: fit-content"], ['radio de borde',"border-top-left-radius: 0em", "border-top-right-radius: 0em", "border-bottom-left-radius: 0em", "border-bottom-right-radius: 0em"], ['color letra', 'color: rgb(68, 30, 30, 0.7)'], ['fondo', 'background: rgb(82, 131, 128, 0.9)'], ['mostrar en modo', 'display: block']],
                "eventos": [[''], [''], ['']],
                "borrar": [''] 
            }}
        }
        

        //console.log(cod);  

        let arre = crearArreglo(id, '$')  
        let arr = []
        
        
        //usados unicamente para cuando se crea un nuevo div, busca reubicar divs con sus contenidos
        let arreObjetosPaso = [], arreDivs = [], arrIdDivs = []

        console.log(id);console.log(retornarObjecto('footer')); console.log(arre); console.log(arre[1] );

        for( u in diccionario){
            if(valor != 'contenedor'){
                if(u == arre[0]){
                    /*if(arre[1] == "footer"){
                        console.log('llega');
                        let footer = retornarObjecto('footer')
                        console.log(footer['footer']['contenido'][valor] = cod);
                        console.log(footer);
                        arr.push(footer)
                    } else {*/
                        arr.push(cod)
                    //}
                }
                arr.push(diccionario[u])
            } else { // todo este corchete para correr el div ya creado con su conetido y poner otro nuevo encima
                for(i in diccionario[u]){ 
                    if(i == 'section'){
                        arrIdDivs.push(u)
                        arreObjetosPaso.push(diccionario[u])
                        arreDivs.push(arreObjetosPaso)
                        arreObjetosPaso = []
                    } else {
                        arreObjetosPaso.push(diccionario[u])
                    }
                }
                let arrPaso = []
                for (let u = 0; u < arreDivs.length; u++) {
                    if(arre[0] == arrIdDivs[u]){
                        arrPaso.push(cod)
                    }
                    for (let i = 0; i < arreDivs[u].length; i++) {
                        arrPaso.push(arreDivs[u][i])
                    }
                }
                arr = arrPaso
            }
        }

        
        let menu = retornarObjecto('menu'), footer = retornarObjecto('footer')
        arr = reubicarMenuYFooter(arr, menu, footer)

        
        diccionario = arr
        traducirDiccionario('porAhora')
        avisoCorto(`se creò un ${valor}`)
        console.log(diccionario);
        aderirHistorial(diccionario)
        document.getElementById(id).value = ''
        reubicar(idPaso)
    }
}