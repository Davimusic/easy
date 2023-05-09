function traducirColoraRBG(fondoContenedorColorBody){
    for (let u = 0; u < paletaDeColores.length; u++) {
        if(paletaDeColores[u][1] == fondoContenedorColorBody){
            return paletaDeColores[u][0] 
        }
    }
}