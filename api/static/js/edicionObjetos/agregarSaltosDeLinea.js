function agregarSaltosDeLinea(text, buscar, cambiar){
    //console.log(`agregarSaltosDeLinea, ingresa: ${text}, buscar: ${buscar}, cambiar: ${cambiar}`)
    return text.replace(/\º/g, cambiar)  
}