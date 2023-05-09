function cambiarColor(id, segundos, color, transparencia){
    if(transparencia != undefined){
        color = hexToRgba(color, transparencia)
    }
    //console.log(`id: ${id}, segundos: ${segundos}, color: ${color} `);
    let objeto = document.getElementById(id)
    objeto.style.transition =  `${segundos}s`
    objeto.style.background = `${color}`
}