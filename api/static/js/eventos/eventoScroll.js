//activarEventosScroll([['miDiv1', [`rotar('miDiv1', 2, -360)`,`rotar('miDiv1', 2, 360)`, `desplazar('miDiv1', 2, 10, 120)`, `desplazar('miDiv1', 2, 0, 0)`]], ['miDiv2', [`rotar('miDiv2', 2, -360)`,`rotar('miDiv2', 2, 360)`, `desplazar('miDiv2', 2, 10, 120)`, `desplazar('miDiv2', 2, 0, 0)`]]])

//let bander = 0
async function eventoScroll(id, eventsEntrada, eventsSalida){
    await wait(500)
    //let numEve = 0;
    var miID = document.getElementById(id);
    //console.log(miID);
    window.addEventListener("scroll", function() {
        var rect = miID.getBoundingClientRect();
        //console.log(rect);
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0) {
            //if(bander == 0){
                //bander = 1
                for (let u = 0; u < eventsEntrada.length; u++) {
                    eval(eventsEntrada[u])
                    //console.log('va la madre ' +  id + ' ' + u)
                }
            //}
        } else {
            //if(bander == 0){
                //bander = 1
                for (let u = 0; u < eventsSalida.length; u++) {
                    eval(eventsSalida[u])
                    //console.log('va la madre salida ' +  id + ' ' + u)
                }
            //}
        }
        //setTimeout(rehabilitarBandera, 500)
    });
}

