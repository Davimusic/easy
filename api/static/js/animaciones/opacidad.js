
function opacidad(id, segundos, porcentaje){
    let objeto = document.getElementById(id)
    objeto.style.transition =  `${segundos}s`
    objeto.style.opacity = `${porcentaje}`
}