function RgbaToHex(rgba){
    let text = separarPalabra(rgba, '(')
    text = separarPalabra(text[1], '(')
    text = removerUltimoCaracter(text[0])
    //console.log(text);
    let valores = text.split(",");
    //console.log(`valores: ${valores}`);
    let r = parseInt(valores[0]).toString(16);
    let g = parseInt(valores[1]).toString(16);
    let b = parseInt(valores[2]).toString(16);
    let a = valores[3];
    let colorHex = "#" + r + g + b;
    return [colorHex, a]
}