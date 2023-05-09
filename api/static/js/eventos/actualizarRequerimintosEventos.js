function actualizarRequerimintosEventos(idRuta, evento, nombreDicPadre, id, i, idSelectPadreEventos){
    
    arrAccEventos = []
    let cod = ``, diccArr = {}, diccLabel = {}, diccOp = {}

    if(evento == 'rotar'){
        
        diccArr = {0: retornarArregloConRangoNumerico(0, 10, 1), 1: retornarArregloConRangoNumerico(-360, 360, 20)}
        diccLabel = {0: 'segundos', 1: 'grados'}
        diccOp = {0: 2, 1: 40}
        cod += retornarOpcionesDetalladasEventos(diccArr, diccLabel, diccOp, i, '')

    } else if(evento == 'cambiarColor'){
        
        diccArr = {0: retornarArregloConRangoNumerico(1, 10, 1)}
        diccLabel = {0: 'segundos', 1: 'color', 2: 'opacidad'}
        diccOp = {0: 2}
        console.log(`actualizarRequerimintosEventos, idRuta: ${idRuta}, evento: ${evento}, nombreDicPadre: ${nombreDicPadre}, id: ${id}, i: ${i}, idSelectPadreEventos: ${idSelectPadreEventos}`);
        codigoAdicional = `<div style='display: block; margin: 10px; justify-content: space-around;'>
                                <h3>Color</h3>
                                <input class='inputColor' style='border-radius: 0.7em; border: none;' id='op1$${i}' value='' type='color'>
                            </div>
                            <div style='display: block; margin: 10px; justify-content: space-around;'>
                                <h3>Opacidad</h3>
                                <input class='inputRange' type="range" id='op2$${i}' value='' name="transparencia" min="0" max="10">
                            </div>`

        cod += retornarOpcionesDetalladasEventos(diccArr, diccLabel, diccOp, i, codigoAdicional)
        //cod += `<img  style="border-radius: 50%; width: 50px; height: 50px;" onclick="crearNuevoEvento()"  src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597776/nuevo_dwrcbu.png">`
    } else if(evento == 'cambiarColorLetra'){
        
        diccArr = {0: retornarArregloConRangoNumerico(1, 10, 1)}
        diccLabel = {0: 'segundos', 1: 'color', 2: 'opacidad'}
        diccOp = {0: 2}
        console.log(`actualizarRequerimintosEventos, idRuta: ${idRuta}, evento: ${evento}, nombreDicPadre: ${nombreDicPadre}, id: ${id}, i: ${i}, idSelectPadreEventos: ${idSelectPadreEventos}`);
        codigoAdicional = `<div style='display: block; margin: 10px; justify-content: space-around;'>
                                <h3>Color</h3>
                                <input class='inputColor' style='border-radius: 0.7em; border: none;' id='op1$${i}' value='' type='color'>
                            </div>
                            <div style='display: block; margin: 10px; justify-content: space-around;'>
                                <h3>Opacidad</h3>
                                <input class='inputRange' type="range" id='op2$${i}' value='' name="transparencia" min="0" max="10">
                            </div>`

        cod += retornarOpcionesDetalladasEventos(diccArr, diccLabel, diccOp, i, codigoAdicional)
        //cod += `<img  style="border-radius: 50%; width: 50px; height: 50px;" onclick="crearNuevoEvento()"  src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597776/nuevo_dwrcbu.png">`
    } else if(evento == 'opacidad'){

        diccArr = {0: retornarArregloConRangoNumerico(0, 10, 1), 1: retornarArregloConRangoNumerico(0, 1, 0.2)}
        diccLabel = {0: 'segundos', 1: 'grado opacidad'}
        diccOp = {0: 2, 1: 0.8}
        cod += retornarOpcionesDetalladasEventos(diccArr, diccLabel, diccOp, i, '')

    } else if(evento == 'desplazar'){

        diccArr = {0: retornarArregloConRangoNumerico(0, 10, 1), 1: retornarArregloConRangoNumerico(0, 200, 10), 2: retornarArregloConRangoNumerico(0, 200, 10)}
        diccLabel = {0: 'segundos', 1: 'rango x', 2:  'rango y'}
        diccOp = {0: 2, 1: 50, 2: 50}
        cod += retornarOpcionesDetalladasEventos(diccArr, diccLabel, diccOp, i, '')

    } else if(evento == 'cambiarTamano'){

        diccArr = {0: retornarArregloConRangoNumerico(0, 10, 1), 1: ['width', 'height'], 2: retornarArregloConRangoNumerico(20, 300, 10)}
        diccLabel = {0: 'segundos', 1: 'especificacion', 2:  'tamano'}
        diccOp = {0: 2, 1: 'width', 2: 50}
        cod += retornarOpcionesDetalladasEventos(diccArr, diccLabel, diccOp, i, '')

    }

    let arr = crearArreglo(id, '$')
    let idU = eval(`diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}].length`)
    arrAccEventos.push(id, nombreDicPadre, idU, i, Object.keys(diccLabel).length)
    console.log(arrAccEventos); 
    document.getElementById(idRuta).innerHTML = cod
}