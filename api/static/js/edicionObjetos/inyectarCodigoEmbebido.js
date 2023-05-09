function inyectarCodigoEmbebido(id){
    let text = document.getElementById(`${id}input`).value
    crearNuevoObjeto(id, 'codEmbebido', `${text}`)
}
