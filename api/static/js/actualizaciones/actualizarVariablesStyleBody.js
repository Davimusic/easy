function actualizarVariablesStyleBody(cod){
    //console.log(`actualizarVariablesStyleBody`);

    actualizarColoresClases()
    
    let dicc = {}
    if(cod != '' && cod != undefined){
        bandera = 1
        //console.log(cod);
        dicc =  eval('(' + cod + ')')
        for(u in dicc){
            if(u == 'paletaDeColores'){
                paletaDeColores = eval(dicc[u])
                //console.log(`paletaDeColores = ${(dicc[u])}`);
            } else {
                eval(`${u} = '${dicc[u]}'`)
                //console.log((`${u} = '${dicc[u]}'`));
            }
        }

        //actualizarColoresClases()

        console.log(JSON.stringify(paletaDeColores));
        edicionFondoBody(TipoUsoFondoBody, 'NOIncrementar')
    } 
}