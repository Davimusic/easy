function retornarOpcionesDetalladasEventos(diccArr, diccLabel, diccOp, i, codigoAdicional){
    let cod = '', acc = ''
    cod += `<div style='display: flex; justify-content: space-around;'>`
        for (u in diccArr) {
            cod += `<div style='display: block; margin: 10px; justify-content: space-around;'>
                        <h3>${diccLabel[u]}</h3>
                        ${retornarSelects(`op${u}$${i}`, diccArr[u],  '', diccOp[u])}
                    </div>`
        }
    cod += codigoAdicional 
    cod += `    <img class='opcionSeleccionable'  style="border-radius: 50%; width: 50px; height: 50px;" onclick="crearNuevoEvento()"  src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597776/nuevo_dwrcbu.png">
            </div>`    
    return cod    
}