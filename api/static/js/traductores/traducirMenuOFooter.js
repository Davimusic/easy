function traducirMenuOFooter(cod, obj){
    cod = buscarCaracterParaReemplazar(cod, '&', '"')
    for( i in diccionario){
        for( llaveHija in diccionario[i]){
            if(llaveHija == obj && cod.length != 0){
                cod = eval(`[${cod}]`)
                diccionario[i] = cod[0]
            }
        }
    }
}