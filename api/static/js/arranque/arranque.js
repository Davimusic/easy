async function arranque(dicc, stBody, ubiAct, menu, footer){
    if(dicc != ''){
        diccionario = eval(dicc)
    }

    traducirMenuOFooter(menu, 'menu')
    traducirMenuOFooter(footer, 'footer')

    ubicacionActual = ubiAct
    document.getElementById('editor').innerHTML = retornarBotonesEdicion(ubicacionActual)
    
    actualizarVariablesStyleBody(stBody)
    await wait(75)
    traducirDiccionario('porAhora')

    actualizarTipoDeLetra(tipoDeletra)   

    aderirHistorial(diccionario, 'arranque') 
    estadoModal = 'desactivado'
    detenerMostrarSlideGalery = 'no'
}


























