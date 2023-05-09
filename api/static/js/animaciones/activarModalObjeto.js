let ultimoModalObjeto = ''

function activarModalObjeto(id, acc){
    
    ultimoModalObjeto = id
    actualizarBloqueEnUso(ultimoModalObjeto)

    for (let u = 0; u < arrNombreObjetos.length; u++) {
        let idPaso = document.getElementById(`${arrNombreObjetos[u]}Modal`)
        if(idPaso != null){
            if(arrNombreObjetos[u] == ultimoModalObjeto){
                idPaso.style.display = 'block'
                idPaso.style.padding = '10px'
                idPaso.style.borderRadius = '7px'
                let objetoPadreModal = document.getElementById(arrNombreObjetos[u])
                idPaso.style.top = `${objetoPadreModal.clientHeight}px`
                //idPaso.style.background = `green`
                idPaso.innerHTML = `<h3 class="esconderBarraScroll" style='color: white; max-height: 500px; overflow: auto;'>${bloqueEnUso} <img id="" onclick="activarModalObjeto('')" style="display: flex; width: 25px; height: 25px; position: absolute; z-index: 1000; top: 0;" src="https://res.cloudinary.com/dplncudbq/image/upload/v1683151296/cerrar_g3yzya.png"> ${modalAtributos(id)}</h3>`
            } else {
                idPaso.style.display = 'none'
            }
        }
    }
}
