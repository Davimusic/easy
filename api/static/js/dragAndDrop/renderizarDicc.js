function renderizarDicc(){
    //banderaCambioUbicacion = 0
        for(u in diccionario){
            let cod = ''
            for(i in diccionario[u]){
                cod += `document.getElementById('${diccionario[u][i]['id'][0]}').addEventListener("click",function() {
                    cambioUbicacion('${diccionario[u][i]['id'][0]}');
                }); `
            }
            //console.log(cod);
            eval(cod)
        }
}