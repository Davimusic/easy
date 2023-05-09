function retornarBotonCrear(id, nombreObjeto){
    return `<img class="opcionSeleccionable" style="border-radius: 50%; width: 50px; height: 50px;" onclick="crearItem('${id}', ${nombreObjeto})" src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597776/nuevo_dwrcbu.png">`
}