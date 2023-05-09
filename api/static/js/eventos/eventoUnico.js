function eventoUnico(id, accion){
    if(habilitarUsoEvento == true){
        //console.log(`eventoUnico, id: ${id},accion: ${accion}`);
        habilitarUsoEvento = false;
        //console.log(`eventoUnico: ${accion}`);
        arre = accion.split('/'); 
        
        //console.log(arre);
        for (let u = 0; u < arre.length; u++) {
            //console.log(`arre[u]: ${arre[u]}, id: ${id}`);
            document.getElementById(id).addEventListener("click", eval(arre[u]))
        }
        setTimeout(rehabilitarUsoEventos, 500)
    } 
}