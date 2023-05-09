function retornarOpcionesEventos(id, nombreDicPadre, i, u, titulo){
    let arrEventos = [' ', `rotar`, `cambiarColor`, `cambiarColorLetra`, `opacidad`, `desplazar`, `cambiarTamano`]
    let idRuta = ``// en prueba aùn
    if(titulo == 'click'){// porque la opcion cero es inyectada para editar
        idRuta = `${id}$${u+1}`
    } else {
        idRuta = `${id}$${u}`
    }
    let idSelectPadreEventos = `padreSelectEventos${id}$${i}`
    let evento = `onchange="actualizarRequerimintosEventos('${idRuta}', this.value, ${nombreDicPadre}, '${id}', ${i}, '${idSelectPadreEventos}')"`
    let cod = `
    <div style='display: flex; flex-wrap: wrap; height: fit-content; margin: 2%; justify-content: space-around;'>
        ${retornarSelects(idSelectPadreEventos, arrEventos, evento )}
        <div id='${idRuta}' style='display: flex; padding-right: 5%; padding-left: 5%; padding-top: 2%; border-radius:0.5em; width: fit-content; height: fit-content; background: #175555c5;'></div>
    </div>`
    return cod    
}