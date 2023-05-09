function retornarObjecto(obj){
    for( i in diccionario){
        for(e in diccionario[i])
        if(e == obj){
            return diccionario[i]
        }
    }
}