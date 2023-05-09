function actualizarColoresClases(){
    for (let u = 1; u < 8; u++) {
        let paletaColor = document.querySelectorAll(`.color${u}`);
        for (let i = 0; i < paletaColor.length; i++) {
            paletaColor[i].style.background = paletaDeColores[u-1][0];
        }
        let paletaColorLetra = document.querySelectorAll(`.color${u}Letra`);
        for (let i = 0; i < paletaColorLetra.length; i++) {
            paletaColorLetra[i].style.color = paletaDeColores[u-1][0];
        }
    }
    document.getElementById('paletaColores').value = JSON.stringify(paletaDeColores)
}