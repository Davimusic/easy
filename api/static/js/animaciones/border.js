function border(id, acc){
    let idPaso = document.getElementById(id)
    //idPaso.style.transition = '1s'
    if(acc == 'aparecer'){
        idPaso.style.outline = 'solid white'
    } else {
        idPaso.style.outline = 'none'
    }
}