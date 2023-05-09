let p = 0
function actualizarFondoBody(acc){
    p += 1
    console.log(p);
    console.log(JSON.stringify(paletaDeColores));
    fondoContenedorColorBody  = document.getElementById('paletaColoresFondoPantalla').value
    let porAhora = document.getElementById('porAhora')

    // Obtener todas las clases del objeto en un array
    var allClasses = Array.from(porAhora.classList);

    // Buscar todas las clases que contienen la palabra "color"
    var colorClasses = allClasses.filter(function(className) {
    return className.includes('color');
    });

    // Imprimir todas las clases que contienen la palabra "color"
    console.log(colorClasses);

    // Remueva la clase antigua y agrega la nueva
    porAhora.classList.remove(colorClasses[0]);
    porAhora.classList.add(fondoContenedorColorBody);



    TipoUsoFondoBody = 'color'
    edicionFondoBody('color', acc)
}