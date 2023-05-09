function mostrarModalOpcionesBotonesEdicion(id, acc, text){
    console.log(id);
    let idPaso = document.getElementById(`${id}Modal`)
    let alturaObjetoPadre = `${document.getElementById(`${id}`).offsetHeight}px`
    idPaso.style.transition = '1s'
    if(acc == 'aparecer'){
        idPaso.style.display = 'flex'
        console.log(alturaObjetoPadre);
        idPaso.style.top = alturaObjetoPadre
        idPaso.innerText = text
    } else {
        idPaso.style.display = 'none'
    }
}