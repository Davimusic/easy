function displayObjeto(id, segundos, acc){
    let objeto = document.getElementById(id)
    if(objeto != null){
        objeto.style.transition =  `${segundos}s`
        objeto.style.display = `${acc}`
    }
}