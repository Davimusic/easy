function imagen(link, style, clas, events, id){
    let cod = ` <div style="display: block; position: relative;">
                    ${retornarModalObjetos(id)}
                    <img id="${id}" src="${link}" style="${buscarCaracterParaReemplazar(style, '`', `'`)}" class="${clas}" ${events} alt="">
                </div>`
    return cod;
}