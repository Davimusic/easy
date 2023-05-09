function cambioUbicacion(id){

    if(banderaCambioUbicacion == 0){
        banderaCambioUbicacion = 1
        if(arrObjetos.length == 0){
            console.log(id);
            if(id != 'menu' && id != 'footer'){
                document.getElementById(id).style.transition = '1s';
                document.getElementById(id).style.background = 'black';
                document.getElementById(id).style.color = 'white';
                arrObjetos.push(id)
            } else {
                alert(`${id} no es posible desplazarlo de su ubicaciòn!!!`)
            }

        } else {

            arrObjetos.push(id)
            if(arrObjetos[0] != arrObjetos[1]){

                let num = 0, code = [], objMover = arrObjetos[0], obLlegada = arrObjetos[1]

                //para cuando es de div a otro div
                let arreObjetosPaso = [], arreDivs = [], arrIdDivs = []

                let menu = retornarObjecto('menu'), footer = retornarObjecto('footer')

                for(u in diccionario){//para cuando los 2 son contenedores div
                    if(objMover.includes('contenedor') && obLlegada.includes('contenedor')){
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
                    } else {// este es para cuando son dos objetos que no sean divs, o que al menos 1 de los 2 lo sea
                        if(num == retornarPosicionDiccionario(obLlegada)){
                            code.push(diccionario[retornarPosicionDiccionario(objMover)])
                            code.push(diccionario[retornarPosicionDiccionario(obLlegada)])
                        } else if(num != retornarPosicionDiccionario(objMover)){
                            code.push(diccionario[num])
                        }
                        num += 1;
                    }
                }

                let arrPaso = []// todo estos bucles faltantes para cuando es de un div a otro div
                for (let u = 0; u < arrIdDivs.length; u++) {            
                    if(diccionario[arrIdDivs[u]]['section']['id'][0] == obLlegada){
                        for (let i = 0; i < arrIdDivs.length; i++) {
                            if(diccionario[arrIdDivs[i]]['section']['id'][0] == objMover){
                                arrPaso.push(arreDivs[i])
                            }
                        }
                        arrPaso.push(arreDivs[u])
                    } else if(diccionario[arrIdDivs[u]]['section']['id'][0] != objMover && diccionario[arrIdDivs[u]]['section']['id'][0] != obLlegada){
                        arrPaso.push(arreDivs[u])
                    }
                }

                if(objMover.includes('contenedor') && obLlegada.includes('contenedor')){
                    for (let u = 0; u < arrPaso.length; u++) {
                        for (let i = 0; i < arrPaso[u].length; i++) {
                            code.push(arrPaso[u][i])
                        }
                    }
                }

                //aqui se reubica objetos que puedan estar por debajo del ultimo div del arregloPadre, ya que de quedar ahì no serìan renderizados
                let largoDic = diccionario.length - 1
                for (let h = 0; h < largoDic; h++) {
                    let arrEvaluarReubicacion = []
                    for(u in code){
                        for(i in code[u]){
                            if(u == largoDic && i != 'section'){
                                arrEvaluarReubicacion.push(code[code.length - 1])
                                for (let a = 0; a < (code.length - 1); a++) {
                                    arrEvaluarReubicacion.push(code[a])
                                }
                                code = arrEvaluarReubicacion
                            } 
                        }
                    }
                }

                code = reubicarMenuYFooter(code, menu, footer)
                diccionario = code
                aderirHistorial(diccionario)
                reubicar(obLlegada)
            } 
            dragAndDropEnUso = 'no'
            accionDagAndDrop()
        }
    } 
    setTimeout(activarBanderaCambioUbicacion, 80)
}