function buscarCaracterParaReemplazar(text, buscar, cambiar){
    let cod = ``
    for (let u = 0; u < text.length; u++) {
        if(text[u] == buscar){
            cod += cambiar
        } else {
            cod += text[u]
        }
    }
    return cod
}