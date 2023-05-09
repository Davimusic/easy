function activarInput(id, placeHolder, valor, contenido){
    console.log(`id: ${id}`);
    let obj = document.getElementById(id)
    if(valor == 'hiperLink'){
        obj.style.display = 'flex';
        obj.placeholder= placeHolder;
        if(contenido != undefined){
            obj.value = contenido
        }
    } else {
        obj.style.display = 'none';
    }
}