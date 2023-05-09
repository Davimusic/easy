function eliminarContenido(arr, info){
    //console.log(info);
    let arre = []
    for (let u = 0; u < arr.length; u++) {
        let bandera = 0
        for (let e = 0; e < info.length; e++) {
            if(arr[u][0] == info[e]){
                bandera = 1
            }
        }
        if(bandera == 0){
            arre.push(arr[u])
        }
    }
    //console.log(arre);
    return arre
}