async function retornarCambioFondoContenedorBody(){
    await wait(50)
    for (let u = 0; u < paletaDeColores.length; u++) {
        if(paletaDeColores[u][0] == fondoContenedorColorBody){
            colorFondoBody = paletaDeColores[u][1]
        }
    }

    document.getElementById('fondoPantalla').innerHTML =
    `
    <div style='display: flex;'>
        ${retornarSelects(`opcionesFondoBody`, ['color', 'imagen'], `onchange= "edicionFondoBody(this.value, 'incrementarConteo')"`, `${TipoUsoFondoBody}`)}
        <div style='display: block' id='colorFondoBody'>
            ${retornarSelects('paletaColoresFondoPantalla', ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7'], `onchange="actualizarFondoBody('incrementarConteo')"`, fondoContenedorColorBody)}
        </div>
        <div style='display: none' id='imagenFondoBody'>
            <input oninput="actualizarFondoImagenContenedorBody('incrementarConteo')" style="border-radius:0.5em; border:none; width: 100%; height: 20px; margin-top: 15px; margin-right: 15px;" type="text" name="" placeholder='link de la imagen' value="${fondoContenedorImagenBody}" id="fondoImagenBody">
        </div>
    </div>` 
}