function retornarEventosEdicionModal(text){
    return `onmouseover = "mostrarModalOpcionesBotonesEdicion(this.id, 'aparecer', '${text}')" onmouseout = "mostrarModalOpcionesBotonesEdicion(this.id, 'desaparecer', '')"`
}