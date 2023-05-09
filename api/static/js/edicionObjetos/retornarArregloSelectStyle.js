function retornarArregloSelectStyle(tipo) {
    let arr = []
    if(tipo == 'pixeles'){
        arr = retornarArregloConRangoNumerico(0, 500, 10, 'px')
    } else if(tipo == 'porcentajes'){
        arr = retornarArregloConRangoNumerico(2, 100, 1, '%')
    } else if(tipo == 'em'){
        arr = retornarArregloConRangoNumerico(0, 100, 1, 'em')
    } else if(tipo == 'relativo') {
        arr = ['min-content', 'max-content', 'fit-content']
    }
    return arr
}