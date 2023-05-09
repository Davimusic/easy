function retornarValorSelectStyle(text){
    let sel = ''//['pixeles', 'porcentajes', 'relativo]
    if(text.indexOf('px') != -1){
        sel = 'pixeles'
    } else if(text.indexOf('%') != -1){
        sel = 'porcentajes'
    } else if(text.indexOf('em') != -1){
        sel = 'em'
    } else if(text.indexOf('min-content') != -1 || text.indexOf('max-content') != -1 || text.indexOf('fit-content') != -1){
        sel = 'relativo'
    }
   //console.log(`retornarValorSelectStyle, text: ${text}, retorna: ${sel}`);
    return sel
}