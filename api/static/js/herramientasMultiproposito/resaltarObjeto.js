function resaltarObjeto(id, acc){
    border(id, acc)
    if(acc == 'aparecer'){
        sombra(id, 1, 'rgba(0,0,0,1)')
    } else {
        sombra(id, 1, 'rgba(0,0,0,0)')
    }
    
}