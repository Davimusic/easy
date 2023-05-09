function sombra(id, segundos, color){
    let objeto = document.getElementById(id)
    objeto.style.transition =  `${segundos}s`
    objeto.style.boxShadow = `2px 3px 17px 7px ${color}`
}