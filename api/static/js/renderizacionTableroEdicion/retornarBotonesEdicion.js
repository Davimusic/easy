function retornarBotonesEdicion(ubiAct){
    retornarCambioFondoContenedorBody()
    let style = ``, sin = `style="margin: 0px; padding: 0px;"`
    inyectarPaletaColorMostrador()
    return  `
            <div id="tablaEdicion" style='position: fixed; color: white; background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(79,79,82,0.6783088235294117) 100%);  z-index: 999; width: 100%; display: flex; justify-content: space-around; flex-wrap: wrap; border: none;'>
                <div id="editoresObjetos" ${retornarEventosEdicionModal('Editores objetos')}>
                    ${retornarModalBotonesEdicion('editoresObjetosModal')}
                    ${retornarBotonDetenerOnclickModal()}
                    ${retornarBotonDragAndDrop()}
                </div>
                <div id="tipoDeLetra" ${retornarEventosEdicionModal('Tipo de letra')}>
                    ${retornarModalBotonesEdicion('tipoDeLetraModal')}
                    ${retornarTipoDeLetra()}
                </div>
                <div id="responsive" ${retornarEventosEdicionModal('Acciòn responsive')}>
                    ${retornarModalBotonesEdicion('responsiveModal')}
                    <input onchange= "actualizarAnchoContenedorPadre(this.value)" class='inputRange' type="range" style="background: none; margin-top: 20px;" id='' value='${medidaAnchoPantallaPadre}' name="" min="20" max="100">
                </div>
                <div id="fondoPantallaEditor" ${retornarEventosEdicionModal('Fondo de pantalla')}>
                    ${retornarModalBotonesEdicion('fondoPantallaEditorModal')}
                    <div id='fondoPantalla'></div>
                </div>
                <div id="Guardar" ${retornarEventosEdicionModal('Guardar')}>
                    ${retornarModalBotonesEdicion('GuardarModal')}
                    <form method="POST" action="${ubiAct}">
                        <input type="hidden" id='enviarDicc' name="infoDiccionario" value="">
                        <input type="hidden" id='styleBody'  name="infostyleBody" value="">
                        <input type="hidden" id='paletaColores'  name="infoPaletaColores" value="">
                        <input type="hidden" id='tipoUsoFondoBody'  name="infoTipoUsoFondoBody" value="color">
                        <button style='box-shadow: none !important; background: none; border: none; width: 25px; height: 25px; border-radius: 50%;' type="submit"><img class='efectoResaltar' style="width: width: 25px; height: 25px; border-radius: 50%;" src="https://res.cloudinary.com/dplncudbq/image/upload/v1677804971/mias/guardar_znpd3r.png" alt="editar pagina web"></button>
                    </form>
                </div>
                <div id="historial" ${retornarEventosEdicionModal('Historial')}>
                    ${retornarModalBotonesEdicion('historialModal')}
                    <button onclick="historialDicc('adelante')" style='box-shadow: none !important; background: none; border: none; width: 25px; height: 25px; border-radius: 50%;'><img class='efectoResaltar' style="width: 25px; height: 25px; border-radius: 50%;" src="https://res.cloudinary.com/dplncudbq/image/upload/v1676133410/mias/adelante_ztqvpx.png" alt="editar pagina web"></button>
                    <button onclick="historialDicc('atras')" style='box-shadow: none !important; background: none; border: none; width: 25px; height: 25px; border-radius: 50%;'><img class='efectoResaltar' style="width: 25px; height: 25px; border-radius: 50%;" src="https://res.cloudinary.com/dplncudbq/image/upload/v1676133407/mias/atras_lfyntg.png" alt="editar pagina web"></button>                    
                </div>
                <div id="editorPaletaColores" ${retornarEventosEdicionModal('Editor de paleta de colores')}>
                    ${retornarModalBotonesEdicion('editorPaletaColoresModal')}
                    ${retornarSelects('selectPaletaColores', paletaDeColores, `onchange="inyectarPaletaColorMostrador('selectPaletaColor')"`, 'color2' )}
                    <input onchange= "inyectarPaletaColorMostrador('incrementarConteo')" style='background: none; padding: none; margin: none; margin-left: 5px; height: 25px; width: 25px; border-radius: 0.7em;' id='paletaColorEditor' value='' type='color'>
                    <input onchange= "inyectarPaletaColorMostrador('incrementarConteo')" class="inputRange" type="range" style="background: none;" id="transparenciaPaletaColorEditor" value="10" name="transparenciaFondoBody" min="0" max="10">
                </div>
            </div>`
}