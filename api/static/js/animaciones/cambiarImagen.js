function cambiarImagen(id, segundos, link){ 
    let objeto = document.getElementById(id)
    objeto.style.transition =  `${segundos}s`
    let m = separarPalabra(link, ':')[1] + separarPalabra(link, ':')[2]
    objeto.style.backgroundImage = `${m}`
} 