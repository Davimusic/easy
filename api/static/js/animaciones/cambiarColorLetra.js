function cambiarColorLetra(id, segundos, color){
    let objeto = document.getElementById(id)
    objeto.style.transition =  `${segundos}s`
    objeto.style.color = `${color}`
}