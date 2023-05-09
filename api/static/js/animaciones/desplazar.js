function desplazar(id, segundos, x, y){
    let objeto = document.getElementById(id)
    objeto.style.transition =  `${segundos}s`
    eval(`objeto.style.transform = 'translate(${x}px, ${y}px)'`)
}