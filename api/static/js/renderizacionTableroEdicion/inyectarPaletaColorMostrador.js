async function inyectarPaletaColorMostrador(acc){
    await wait(75)
    let hex= ''
    let selectPaletaColores = document.getElementById('selectPaletaColores')
    let transparenciaPaletaColorEditor = document.getElementById('transparenciaPaletaColorEditor')
    let paletaColorEditor = document.getElementById('paletaColorEditor')
    
    if(acc == 'selectPaletaColor'){
        //acc = 'incrementarConteo'
        let valor = selectPaletaColores.value
        hex= RgbaToHex(valor)[0]
        transparenciaPaletaColorEditor.value = RgbaToHex(valor)[1] * 10

    } else {
        let coorActual = selectPaletaColores.selectedIndex
        hex = paletaColorEditor.value
        paletaDeColores[coorActual][0] = hexToRgba(hex, transparenciaPaletaColorEditor.value)
        selectPaletaColores.value = hex
        
        let nuevasOpciones = ''
        for (let u = 0; u < paletaDeColores.length; u++) {
            let select = '', colorFondo = RgbaToHex(paletaDeColores[u][0])[0]
            if(u == coorActual){
                select = 'selected'
            }
            nuevasOpciones += `<option ${select} value='${paletaDeColores[u][0]}' data-color="${colorFondo}">${paletaDeColores[u][1]}</option>`
        }
        selectPaletaColores.innerHTML = nuevasOpciones;
    } 
    paletaColorEditor.value = hex

    //actualizarColoresClases()

    if(TipoUsoFondoBody == 'color'){  
        actualizarFondoBody(acc)
    } else {
        actualizarFondoImagenContenedorBody(acc)
    }

    await wait(125)
    actualizarVariablesStyleBody(historialStyleBody[numHistorialActual])
}