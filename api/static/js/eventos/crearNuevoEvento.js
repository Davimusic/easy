function crearNuevoEvento(){
    let id = arrAccEventos[0]
    let nombreDicPadre = arrAccEventos[1]
    let idU = arrAccEventos[2]
    let i = arrAccEventos[3]
    let largoAtributos = arrAccEventos[4]
    console.log(arrAccEventos);
    console.log(arrAccEventos);
    console.log(`id: ${id}, nombreDicPadre: ${nombreDicPadre}, idU: ${idU}, i: ${i}`);

    let animacion = document.getElementById(`padreSelectEventos${id}$${i}`).value
    let atributos = ''
    let acc = "`"

    for (let u = 0; u < largoAtributos; u++) {
        atributos += ` ${acc}${document.getElementById(`op${u}$${i}`).value}${acc},`
    }

    atributos = removerUltimoCaracter(atributos)
    console.log(atributos);
    
    let event = `${animacion}(${acc}${nombreDicPadre}${acc}, ${atributos})`
    console.log(event);
    crearItem(id, nombreDicPadre)
    actualizarDicc(`${id}$${idU}`, event)
    modalAtributos(nombreDicPadre)
    arrAccEventos = []
    console.log(arrAccEventos);
    console.log(diccionario);
}