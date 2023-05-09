async function edicionFondoBody(valor, acc){
    await wait(100)
    let color = document.getElementById('colorFondoBody')
    let imagen = document.getElementById('imagenFondoBody')
    let porAhora = document.getElementById('porAhora')
    if(valor == 'color'){
        color.style.display = 'block'
        imagen.style.display = 'none'
        porAhora.style.background = `${traducirColoraRBG(fondoContenedorColorBody)}`;
    } else {
        color.style.display = 'none'
        imagen.style.display = 'block'
        let inputFondoImagenBody =  document.getElementById('fondoImagenBody')
        if(fondoContenedorImagenBody != ''){
            fondoContenedorImagenBody = inputFondoImagenBody.value
        } else {
            fondoContenedorImagenBody = 'https://res.cloudinary.com/dplncudbq/image/upload/v1656549058/mias/u3_iirtlk.jpg'
        }
        inputFondoImagenBody.value = fondoContenedorImagenBody
        porAhora.style.backgroundImage = `url('${fondoContenedorImagenBody}')`;
    }
    TipoUsoFondoBody = valor

    if(acc == 'incrementarConteo'){
        aderirHistorial(diccionario)
    }
}