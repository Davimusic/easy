function DetenerOnclickModal(){

    if(detenerOnclickModal == 'no'){
        //textoBotonEdicion = 'edicion'
        colorBotonEdicion = 'red';
        detenerOnclickModal = 'si' 
        //dragAndDropEnUso = 'si' 
        //document.getElementById('cambiarDragAndDrop').style.background = 'green'
    } else {
        //textoBotonEdicion = 'edicion'
        colorBotonEdicion = 'green';
        detenerOnclickModal = 'no'
        dragAndDropEnUso = 'no'
        document.getElementById('cambiarDragAndDrop').style.background = 'red'
    }
    traducirDiccionario('porAhora')//tratar de quitarlo para eficiencia de velocidad a futuro

    //actualizarColoresClases() buscar solucion al llamarlo sin que me dañe imagenes

    setTimeout(actBotonEditar, 80)
    console.log(`DetenerOnclickModal: ${detenerOnclickModal}`);
}