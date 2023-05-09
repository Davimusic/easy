function retornarValidarAccionesDeEdicion(accEnUso, accSinUso){
    let code = ''
    if(detenerOnclickModal == 'si' && dragAndDropEnUso == 'no'){
        code = accEnUso
    } else {
        code = accSinUso
    }
    console.log(code);
    return code
}