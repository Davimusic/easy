let arr = [];

function crearMenu(arrMenu, eventos, estilos, clas){
    let textEventos = JSON.stringify(eventos);
    eventos = quitarComasDeArreglo(agregarEventos(eventos, 'menu'))

    let estiloColor = quitarComasDeArreglo(estilos[5], '; ')
    estiloColor = `color: ${separarPalabra(estiloColor, ':')[1]}`

    let estiloColorFondo = quitarComasDeArreglo(estilos[6], '; ')
    estiloColorFondo = `background: ${separarPalabra(estiloColorFondo, ':')[1]}`
    
    //console.log(estilos);
    let textEstilos = JSON.stringify(estilos);
    let estilosPadre = eliminarContenido(eval(textEstilos), ['margen', 'relleno', 'alto', 'mostrar en modo', 'radio de borde'])
    estilosPadre = quitarComasDeArreglo(unificarArreglos(estilosPadre, '; '))
    estilosPadre = buscarCaracterParaReemplazar(estilosPadre, '`', `'`)

    let textSoloHeight = JSON.stringify(estilos);
    textSoloHeight = eliminarContenido(eval(textSoloHeight), ['margen', 'relleno', 'ancho', 'alto', 'radio de borde', 'color letra', 'fondo', 'mostrar en modo'])
    textSoloHeight = quitarComasDeArreglo(unificarArreglos(textSoloHeight, '; '))
    textSoloHeight = buscarCaracterParaReemplazar(textSoloHeight, '`', `'`)
    //console.log(textSoloHeight);
    
    estilos = quitarComasDeArreglo(unificarArreglos(estilos, '; '))
    estilos = buscarCaracterParaReemplazar(estilos, '`', `'`)



    arr = arrMenu
    //let menuID = document.getElementById("menu");
    let divPadre = document.getElementById("porAhora")
    divPadre.style.height = window.innerHeight;
    divPadre.style.overflow = "scroll";
    //divPadre.style.background = "red"
    let anchoPantalla = divPadre.offsetWidth
    let cod = "", display = "", anchoAUsar = "", imagenMenu = '', clasEsconder = "", eventoMenuCelular = "", eventoMenuNav = ""
    disposicionMenu = '';
    let alturaMenu = 30;

    if(anchoPantalla <= 1000){ //para hacer que sea en modo celular siempre
        display = "none"
        anchoAUsar = `height: 0px;`
        clasEsconder = "none"
        eventoMenuCelular = 'onclick="menuCelular()"'
        eventoMenuNav = `onclick="eventoUnico(this.id, 'accionMenu()')"`
        imagenMenu = 'flex'
        disposicionMenu = 'display: block; '
    } else {
        console.log(anchoPantalla);
        display = "flex"
        imagenMenu = 'none'
        disposicionMenu = ''
    }

    let alturaTablaEdicion = `${document.getElementById('tablaEdicion').clientHeight}px`
    
    let filtroClases = ['mi']
    let clasesNav = clas
    for (let u = 0; u < filtroClases.length; u++) {
        clasesNav = sobreescribirPalabra(clasesNav, filtroClases[u], '')
    }

    cod +=          
    ` 
    <img id="accionMenu" onclick="eventoUnico(this.id, 'accionMenu()')" style="display: ${imagenMenu}; width: 25px; height: 25px; padding-top: ${alturaTablaEdicion};" src="https://res.cloudinary.com/dplncudbq/image/upload/v1658015902/mias/i1_ndc8ga.png">              
    <nav ${eventoMenuNav} id="menu" ${eventos} class="${clasesNav}" style=" ${retornarDecicionResponsiva(`${estiloColorFondo}; width: 100%;`, estilosPadre)} display: ${display}; ${anchoAUsar} position: sticky; top: 0; padding-top: ${alturaTablaEdicion};">
        <ul style="" class="espacioEquilatero ListaLimpia">
    `
    
        for (let i = 0; i < arr.length; i++) {
            if(arr[i][0] != 'imagen'){ 

                let resaltar = ""
                let arrePath = window.location.pathname.split('/');
                arrePath = arrePath[arrePath.length - 1].replace(/%20/g, ' ')
                if(arr[i][0] == arrePath){
                    resaltar = "color2 sombra"
                }    
                for (let u = 0; u < arr[i][1].length; u++) {
                    if(arr[i][1][u] == arrePath){
                        resaltar = "color2 sombra"
                    } 
                }
                
                cod +=`    
                <li id='opcionMenu${i}' onclick="eventoUnico(this.id, 'accionSubmenus(${acc}opcionMenu${i}${acc})')" onmouseover="accionSubmenus(this.id)" onmouseout="accionSubmenus(this.id, 'esconderSubmenus')" style="${disposicionMenu} height: min-content; width: fit-content;"><a id='opcionMenuLink${i}' ${agregarEventosImagenes('menu', `opcionMenuLink${i}`, eval(textEventos))}  class='${clas} ${resaltar}' style="${estilos}" href="${desicionHabilitarLinks(arr[i][0], arr[i][1], 'padre')}">${arr[i][0]}</a>`
                    if(arr[i][1].length != 0){              
                        cod += `<ul id='submenuPadre${i}' ${agregarEventosImagenes('menu', `submenuPadre${i}`, eval(textEventos))} style="padding: 10px; border: none;" class="${retornarPalabraParecida(clas, 'color')} espacioEquilatero ListaLimpia">`
                        for (let u = 0; u < arr[i][1].length; u++) {
                            resaltar = ""
                            if(arr[i][1][u] == arrePath){
                                resaltar = "color2 sombra"
                            } 
                            cod += `<li id='submenu${i}$${u}'><a id='submenuLink${i}$${u}' ${agregarEventosImagenes('menu', `submenuLink${i}$${u}`, eval(textEventos))} class="${clas} ${resaltar}" style="${estilos} padding: 0px important!; margin: 15px;"  href="${desicionHabilitarLinks(arr[i][1][u], arr[i][1], 'hijo')}">${arr[i][1][u]}</a></li>`
                        }
                        cod += `</ul>`
                    }
        cod += `</li>`
            }
        }
    cod += 
    ` 
        </ul>
    </nav>
    <div id="contenedorAbsoluto" style="position: fixed; display: block;">
            <a href="https://wa.me/573138860917?text=lamadre que sI" target="_blank" ><img id='botomWhatsap' class='efectoResaltar' style="display: none; background: white; z-index: 9000; width: 60px; height: 60px; border-radius: 50%;" src="https://res.cloudinary.com/dplncudbq/image/upload/v1655558248/mias/whatsapp_wlntmv.png" alt="editar pagina web"></a>
            <img id='botonSubirMenu' class='efectoResaltar' onclick="reubicar('menu')" style="display: none; top: 80px; background: white; z-index: 9000; width: 60px; height: 60px; border-radius: 50%;" src="https://res.cloudinary.com/dplncudbq/image/upload/v1671160860/mias/descarga_uomlyb.png" alt="editar pagina web">
    </div>
    `
    botonSubirParteSuperiorMenu()
    eventosBotonesFlotantes()
    return cod;
}

async function eventosBotonesFlotantes(){
    await wait(750)
    let desMenu = ''
    if(document.getElementById("menu").style.display != 'none'){
        desMenu = 'menu'
    } else {
        desMenu = 'accionMenu'
    }
    
    eventoScroll(desMenu, [`opacidad('botonSubirMenu', 2, 0)`], [`opacidad('botonSubirMenu', 2, 1)`])
}


async function botonSubirParteSuperiorMenu(){
    await wait(500)
    //let margenIzquierdo = 90
    let botonSubirMenu = document.getElementById('botonSubirMenu')
    let botomWhatsap = document.getElementById('botomWhatsap')
    let ventana = parseInt(screen.height)
    let porAhora = document.getElementById("porAhora")
    let anchoPorAhora = parseInt(buscarCaracterParaReemplazar(porAhora.style.width, '%', ''))
    botonSubirMenu.style.display = 'flex'
    //botonSubirMenu.style.position = 'relative'
    botomWhatsap.style.display = 'flex'
    //botomWhatsap.style.position = 'relative'
    let contenedorAbsoluto =  document.getElementById('contenedorAbsoluto')
    contenedorAbsoluto.style.top = `${(ventana / 100) * 65}px`
    contenedorAbsoluto.style.marginLeft = `${(anchoPorAhora / 100) * 90}%`

    console.log(botonSubirMenu);
    console.log(botomWhatsap);
}

let banderaMenu = 0
function accionMenu(){
    let menuNav = document.getElementById('menu')
    menuNav.style.transition = '1s'
    if(banderaMenu == 0){
        banderaMenu = 1
        menuNav.style.display = 'block'
        setTimeout(mostrarMenu, 100)
    } else {
        banderaMenu = 0
        setTimeout(ocultarMenu, 1000)
        menuNav.style.height = `0px`
    }
}

function mostrarMenu(){
    let menuNav = document.getElementById('menu')
    menuNav.style.height = `${window.innerHeight}px`//`${window.innerHeight}px`
}

function ocultarMenu(){
    let menuNav = document.getElementById('menu')
    menuNav.style.display = 'none'
}

function desicionHabilitarLinks(link, largoLinksHijos, roll){
    let cod = '#'
    if(detenerOnclickModal == 'si' && dragAndDropEnUso == 'no'){
        if(roll == 'padre' && largoLinksHijos.length == 0 || roll == 'hijo'){
            //console.log('entra');
            //console.log(largoLinksHijos);
            //console.log(largoLinksHijos.length);
            cod = link
        } 
    }
    return cod
}

let bandera = 0
function menuCelular(){
    let alturaPantalla = window.innerHeight;
    let menu = document.getElementById("menuDesplegable")
    let botonMenu = document.getElementById("eventoMenuCelular")
    //document.getElementById('menu').style.display = 'block'
    //let titulo = document.getElementById('titulo')

    menu.style.transition = "0.5s";
    botonMenu.style.transition = "0.5s";
    //titulo.style.transition = "0.5s";
    if(bandera  == 0 ){
        bandera = 1
        menu.style.height = `${alturaPantalla}px`
        menu.style.background = 'gold'
        setTimeout(mostrarTextoMenu, 600);
        botonMenu.style.marginTop = `${((window.innerHeight / 100) * 20)}px`
        //titulo.style.marginLeft= retornarDecicionResponsiva('padding-left: 15%;', 'padding-left:35%;');
    } else {
        bandera = 0
        menu.style.height = `0px` //sacado de la altura que queda al renderizar en modo Movil
        mostrarTextoMenu("cerrar")
        botonMenu.style.marginTop = `0px`
        //titulo.style.marginLeft= retornarDecicionResponsiva('padding-left: 35%;', 'padding-left:15%;');;
    }
}

function mostrarTextoMenu(acc){
    let arreglo = document.getElementsByClassName("textoMenu"); //arrojada por la variable clasEsconder
    for (let i = 0; i < arreglo.length; i++) {
        if(acc == "cerrar"  || bandera == 0){
            arreglo[i].classList.replace("flex", "none")
        } else {
            arreglo[i].classList.replace("none", "flex")
        }
    }
}

function accionSubmenus(id, acc){
    let idTraducido = 0, paso = ''
    for (let u = 10; u < id.length; u++) {
        paso += id[u]
    }
    idTraducido = parseInt(paso)

    for (let e = 0; e < arr.length; e++) {
        for (let u = 0; u < arr[e][1].length; u++) {

            //let objetoPadre = document.getElementById(`submenuPadre${e}`)
            //objetoPadre.style.transition = `1s`
            let objetoHijo = document.getElementById(`submenu${e}$${u}`)
            objetoHijo.style.transition = `0.5s`

            if(e == idTraducido && acc != 'esconderSubmenus'){
                //objetoPadre.style.height = '100px'
                objetoHijo.style.opacity = '1'
            } else {
                //objetoPadre.style.height = '0px'
                objetoHijo.style.opacity = '0'
            }
        }
    }
}

