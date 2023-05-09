function cambiarTamano(id, segundos, especificacion, tamano){
    console.log(`id: ${id}, segundos: ${segundos}, especificacion: ${especificacion}, tamano: ${tamano}`);
    let objeto = document.getElementById(id)
    congelarActualizacionPantalla = 'si'
    objeto.style.transition =  `${segundos}s`
    //eval(`objeto.style.${especificacion} = '${tamano}px'`)
    eval(`objeto.style.width = '${tamano}px'`)
    eval(`objeto.style.height = '${tamano}px'`)
    congelarActualizacionPantalla = 'no'
}