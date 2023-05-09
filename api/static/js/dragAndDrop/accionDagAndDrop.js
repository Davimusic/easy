function accionDagAndDrop(){
    arrObjetos = []
    if(dragAndDropEnUso == 'no'){
        dragAndDropEnUso = 'si'
        colorBotonEdicion = 'red', detenerOnclickModal = 'si'
        traducirDiccionario('porAhora')
        actBotonEditar()
        
        renderizarDicc()
        let arrColores = ['rgba(66, 5, 66, 1)', 'rgba(214, 15, 214, 1)'], num = 0
        let colObj = {'text': 'rgba(33, 141, 173, 1)', 'img': 'rgba(77, 173, 33, 1)', 
                    'video': 'rgba(221, 224, 11, 1)', 'slideGalery': 'rgba(50, 50, 11, 1)',
                    'codEmbebido': 'rgba(20, 75, 61, 1)'}
        let col2 = {'text': 'rgba(255, 255, 255, 1)', 'img': 'rgba(77, 173, 33, 1)', 
                    'video': 'rgba(221, 224, 11, 1)', 'slideGalery': 'rgba(221, 224, 11, 1)',
                    'codEmbebido': 'rgba(0, 146, 110, 1)'}
        for(u in diccionario){
            for(i in diccionario[u]){
                let id = diccionario[u][i]['id'][0]
                if(i == 'section'){
                    document.getElementById(id).style.background = arrColores[num]
                    if(num == (arrColores.length - 1)){
                        num = 0
                    } else {
                        num += 1
                    }
                } else {
                    document.getElementById(id).style.background = colObj[i]
                    document.getElementById(id).style.color = col2[i]
                }
            }
        }
        document.getElementById('cambiarDragAndDrop').style.background = 'green'
    } else {
        dragAndDropEnUso = 'no'
        traducirDiccionario('porAhora')
        document.getElementById('cambiarDragAndDrop').style.background = 'red'
    }
    setTimeout(actBotonEditar, 1000)
}