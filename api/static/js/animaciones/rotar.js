function rotar(id, segundos, grados){
    //console.log(`id: ${id}, segundos: ${segundos}, grados: ${grados}`);
    let objeto = document.getElementById(id)
    objeto.style.transition =  `${segundos}s`
    objeto.style.transform = `rotate(${grados}deg)`
}