function texto(tipo, acc, text, colorYFondo, eventos, id, style){
    //console.log(`tipo: ${tipo}, acc: ${acc}, text: ${text}, colorYFondo: ${colorYFondo}, eventos: ${eventos}, id: ${id}`);
    
    let arreText = []
    for (let u = 0; u < text.length; u++) {
        for (let i = 0; i < text[u].length; i++) {
            arreText.push(text[u][i])
        }
    }

    let cantidadTextos = arreText.length / 3
    let textoPaso = ''
    let textoConcatenado = ''

    let numPaso = 0, bandera = 0
    for (let u = 0; u < cantidadTextos; u++) {
        textoPaso = agregarSaltosDeLinea(arreText[numPaso], 'º', '<br>')
        textoPaso = buscarCaracterParaReemplazar(textoPaso, '`',  `'`)
        textoPaso = buscarCaracterParaReemplazar(textoPaso, '"',  `'`)
        if(arreText[numPaso + 1] == 'hiperLink'){
            let linkFuncional = ''
            if(detenerOnclickModal == 'no'){
                linkFuncional = `#${arreText[numPaso + 2]}`
            } else {
                if(bandera == 0){
                    bandera = 1
                    alert(`antes de activar cualquier link, debes guardar la informaciòn, de lo contrario se perderìa!!!`)
                }
                linkFuncional = `${arreText[numPaso + 2]}`
            }                       // en este caso habrìa replica de id, quizas en un futuro arreglar
            
            textoConcatenado += `<a id='${id}' ${eventos} style='${separarPalabra(colorYFondo, ';')[0]}' href='${linkFuncional}'>${textoPaso}</a>`
        } else if(arreText[numPaso + 1] == 'negrita'){
            textoConcatenado += `<b> ${textoPaso} </b>`
        } else {
            textoConcatenado += `${textoPaso}`
        }
        numPaso += 3
    }

    style = buscarCaracterParaReemplazar(style, '`', `'`)
    let cod = `
        <div style="display: block; position: relative;">
            ${retornarModalObjetos(id)}
            <${tipo} ${acc} style="${style}">
                ${textoConcatenado}
            </${tipo}>
        </div>
    `

    return cod;
}