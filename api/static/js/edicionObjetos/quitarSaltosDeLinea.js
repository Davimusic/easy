function quitarSaltosDeLinea(text, id){
    console.log(`quitarSaltosDeLinea, text: ${text}, id: ${id} `);
    text = buscarCaracterParaReemplazar(text, `'`, '`')
    text = buscarCaracterParaReemplazar(text, `"`, '`')
    actualizarDicc(id, text.replace(/\n/g, "º"))
    ///document.getElementById(id).value = text.replace(/\n/g, "º")
}