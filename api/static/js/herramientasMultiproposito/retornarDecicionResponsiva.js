function retornarDecicionResponsiva(celular, desdeTablet){
    let anchoPantalla = document.getElementById('porAhora').offsetWidth
    
    if(anchoPantalla <= 1000){ //estaba en 640
        return celular
    } else {
        return desdeTablet
    }
}