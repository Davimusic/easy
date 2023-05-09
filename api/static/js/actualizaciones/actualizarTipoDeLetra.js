function actualizarTipoDeLetra(cod, acc){
    let ref = ''
    for (let u = 0; u < cod.length; u++) {
        if(cod[u] != ' '){
            ref += cod[u]
        } else {
            ref += '+'
        }
    }

    document.getElementById('linkLetra').innerHTML = `<link id="linkLetra" href='https://fonts.googleapis.com/css2?family=${ref}' rel='stylesheet'>`
    tipoDeletra = cod
    document.getElementById('tipoLetra').value = cod
    document.body.style.fontFamily = `'${tipoDeletra}', sans-serif`;

    if(acc == 'incrementarConteo'){
        console.log('entra actualizarTipoDeLetra');
        aderirHistorial(diccionario)
    }
    
    //console.log(historialStyleBody[numHistorialActual]);
    actualizarDiccStyleBody()
}