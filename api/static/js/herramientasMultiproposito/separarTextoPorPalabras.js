function separarTextoPorPalabras(text, primerPalabra){
    let num = (primerPalabra.length - 1), arr = [], cod = ``
    for (let u = 0; u < text.length; u++) {
        cod += text[u]
        if(u == num){
            arr.push(cod)
            cod = ``
        } 
    }
    arr.push(cod)
    return arr
}