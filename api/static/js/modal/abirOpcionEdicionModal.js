function abirOpcionEdicionModal(id){
    console.log(arrTitulosHijos);
    console.log(id);
    for (let u = 0; u < arrTitulosHijos.length; u++) {
        let idPaso = document.getElementById(arrTitulosHijos[u])
        console.log(arrTitulosHijos[u]);
        idPaso.style.transition = '1s'
        idPaso.style.maxHeight = '1px';
        //idPaso.style.background = 'blue';
    }
    let idPaso = document.getElementById(id)
    idPaso.style.transition = '1s'
    idPaso.style.maxHeight = '300px';
}