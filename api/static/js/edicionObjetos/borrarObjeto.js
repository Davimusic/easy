function borrarObjeto(id){
    if(diccionario.length <= 1){
        alert('unico objeto disponible, no es posible borrarlo, debe haber minimo un existente!!!')
    } else {
        let arr = crearArreglo(id, '$')
        //alert(arr)
        let arrPaso = []
        for( i in diccionario){
            //console.log(diccionario[i]);
            if(i != arr[0]){
                arrPaso.push(diccionario[i])
            }
            
        }
        
        console.log(arrPaso);
        diccionario = arrPaso
        console.log(diccionario);
        traducirDiccionario('porAhora')
        desactivarModal()
        console.log(`borrarObjeto: diccionario:`);
        console.log(diccionario);
        aderirHistorial(diccionario, 'arranque')
        avisoCorto(`se elminò el objeto con exito `)

        for(u in diccionario[arr[0]]){
            reubicar(diccionario[arr[0]][u]['id'][0])
        }
    }
}