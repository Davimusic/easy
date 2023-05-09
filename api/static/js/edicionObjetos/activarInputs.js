function activarInputs(){
    //console.log(arrLinks);

    for (let u = 0; u < arrLinks.length; u++) {
        //let id = `${arrLinks[u]}$1`
        let arr = crearArreglo(`${arrLinks[u]}$1`, '$')
        let ruta = '', opcion = ''
        console.log(arr);
        if(Number.isInteger(eval(arr[0]))){
            ruta = `diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}]`
        } else {
            ruta = retornarRutaObjetoFooter(arr[0], arr[2])
        }

        console.log(diccionario);
        console.log(`ruta: ${ruta}`);

        opcion = eval(`${ruta}`)
        if(opcion[1] == 'hiperLink'){
            activarInput(`${arrLinks[u]}$${2}`,'','hiperLink', `${opcion[2]}`)
        }
    }
    arrLinks = []
}
