function retornarRutaObjetoFooter(id, llavePadre){
    console.log(id);
    let coorDicc = 0, coorFoo = 0, dicc = {}
    for(u in diccionario){
        for(i in diccionario[u]){
            if(i == 'footer'){
                dicc['coorDicc'] = coorDicc
                for(a in diccionario[u][i]['contenido']){
                    for(o in diccionario[u][i]['contenido'][a]){
                        if(diccionario[u][i]['contenido'][a][o]['id'][0] == id){
                            console.log(`dentro coorFoo: ${coorFoo}`);
                            dicc['coorFoo'] = coorFoo
                        }
                        coorFoo = coorFoo + 1 // coorFoo aun ni està en uso
                    }
                }
            }
        }
        coorDicc += 1
    }

    return `diccionario[${dicc['coorDicc']}]['footer']['contenido']['${llavePadre}']`
}