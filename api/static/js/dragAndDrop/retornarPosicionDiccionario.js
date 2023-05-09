function retornarPosicionDiccionario(id){
    let numId = 0
    for(u in diccionario){
        for(i in diccionario[u]){
            if(diccionario[u][i]['id'] == id){
                numId = u
            }
        }
    }
    return numId
}