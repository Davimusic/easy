function rotar3d(id, segundos, grados){
    let objeto = document.getElementById(id)
    objeto.style.transition =  `${segundos}s`
    objeto.style.transformStyle = 'preserve-3d'
    objeto.style.webkitBackfaceVisibility = "hidden";
    objeto.style.backfaceVisibility = "hidden";
    eval(`objeto.style.transform = 'rotateY(${grados}deg)'`)
}