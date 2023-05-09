function separarPalabra(palabra, referencia){
    let arr = [], text = ''
    for (let u = 0; u < palabra.length; u++) {
        if(palabra[u] != ' '){
            text += palabra[u]
        }
        
        if(palabra[u] == referencia){
            arr.push(text)
            text = ''
        } 
    }
    arr.push(text)
    //console.log(arr);
    return arr
}