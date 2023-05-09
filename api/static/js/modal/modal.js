let bloqueEnUso = "sin activar", estadoModal = 'desactivado;' 

function actualizarBloqueEnUso(text){
    bloqueEnUso = text
    //console.log(`bloqueEnUso: ${bloqueEnUso}`);
}

function ActivarModal(contenido){
    if(bloqueEnUso == "sin activar"){
        alert("elija bloque")
    } else {
		if(contenido != undefined){
			document.getElementById("root").innerHTML = modal(contenido)
			activarInputs()
			actualizarModal()
		} 
    }
}

function actualizarModal(){
	let idModal = document.getElementById("modala");
	idModal.style.display = "block";
    setTimeout(mostrarModal, 100)
}

async function mostrarModal(){
	let idModal = document.getElementById("modala");
	let idPanelEdicion = document.getElementById('editor')
	idModal.style.height = `${window.innerHeight - idPanelEdicion.offsetHeight}px`//"50%";
	idModal.style.width = "95%";
    //await wait(1000)
	//idModal.style.transition = "1s";
	idModal.style.opacity = "1";
}

function desactivarModal(){
	let idModal = document.getElementById("modala");
	//idModal.style.transition = "1s";
	idModal.style.height = "0px";
	idModal.style.opacity = "0";
	estadoModal = 'desactivado'
	esconderModal()
	//setTimeout(esconderModal, 0)
}

function esconderModal(){
	let idModal = document.getElementById("modala");
	idModal.style.display = "none";
}

function modal(contenido){
	estadoModal = 'activado'
	let conte = ""

	if(contenido != undefined){
		conte = contenido
	} 
		//position: -webkit-sticky; position: sticky; top: ${alturaTablaEdicion};
    let alturaTablaEdicion = `${document.getElementById('tablaEdicion').clientHeight}px`
	cod = `
	<div style = "position: -webkit-sticky; position: sticky; top: ${alturaTablaEdicion}; background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(5px); display: none; padding-left: 2%; padding-right: 2%; opacity: 0; height: 0%; width: 0%; overflow-y: scroll;" id="modala">
		<header style = "position: sticky; top: 0; z-index: 100; border-radius: 0.5em; color:white; padding: 1%; padding-top: 0%; height:fit-content; background: #1e7070; display:flex; justify-content: space-between;">
			<div style="display:flex; justify-content: space-between;">
				<h3>Usando bloque de: ${bloqueEnUso}</h3>
			</div>
			<div style="justify-content: left;" onclick="desactivarModal()" >
				<h3 style='cursor: pointer;'>X</h3>
			</div>
		</header>
		<div class="">
				${retornarToast()}
                ${conte}
		</div>
	</div>
	`
    return cod
}

function saludar(text){
	alert(text);
}

function crearArreglo(text, referencia){
	let arr = []
	let cod =  '';
	for (let u = 0; u < text.length; u++) {
		
		if(text[u] == referencia){
			arr.push(cod)
			cod = ''
		} else {
			cod += text[u]
		}
	}
	arr.push(cod)
	return arr
}

function actualizarDicc(idRuta, Valor){
	let cloneDiccionarioPaso = JSON.stringify(diccionario)
	console.log(`actualizarDicc: idRuta: ${idRuta}, Valor: ${Valor}`);
	
	let nuevoValor = Valor
	
	if(nuevoValor == ''){
		//alert('ni idea')
	}	console.log(`actualizarDicc: nuevoValor: ${nuevoValor}`);

	let arr = crearArreglo(idRuta, '$')
	console.log(arr);

	let cod = 'diccionario'
	for (let u = 0; u < arr.length; u++) {
		if(u == 0){
			cod += `[${arr[u]}].`
		} else if(u == 1){
			cod += `${arr[u]}.`
		} else if(u == 2){
			cod += `${arr[u]}`
		} else {
			cod += `[${arr[u]}]`
		}
	}

	/*for(u in diccionario[arr[0]]){
		reubicar(diccionario[arr[0]][u]['id'][0])
	}*/

	let codEvaluar = `${cod} = '${nuevoValor}'`
	console.log(codEvaluar);
	eval(codEvaluar)

	/*if(arr.length == 4){
		console.log(`diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}] = '${nuevoValor}';`);
		eval(`diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}] = '${nuevoValor}';`)
	} else if(arr.length == 5) { // pensado para los que tienen arreglos en la parte final de el diccionario
		console.log(`diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}][${arr[4]}] = '${nuevoValor}';`);
		console.log(diccionario);
		eval(`diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}][${arr[4]}] = '${nuevoValor}';`)
	}  else if(arr.length == 6) {
		console.log(`diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}][${arr[4]}][${arr[5]}] = '${nuevoValor}';`);
		console.log(diccionario);
		eval(`diccionario[${arr[0]}].${arr[1]}.${arr[2]}[${arr[3]}][${arr[4]}][${arr[5]}] = '${nuevoValor}';`)
	}*/

	//console.log(eval(`diccionario[${arr[0]}].${arr[1]}.id[0]`));

	let dicc = eval(`diccionario[${arr[0]}].${arr[1]}`);

	let divADestruir = document.getElementById(dicc['id'][0]);
	divADestruir.setAttribute("id", "proximoDesaparecer");

	let strDicc = JSON.stringify(dicc);
	let objetoActualizado = eval(`decidirAccionArmadoComponents('${arr[1]}', ${strDicc}, '')`)

	
	divADestruir.innerHTML = objetoActualizado

	let nuevoDiv = document.getElementById(dicc['id'][0])
	divADestruir.replaceWith(nuevoDiv);


	//console.log(diccionario);
	if(JSON.stringify(diccionario) != cloneDiccionarioPaso){
		console.log('si entra');
		aderirHistorial(diccionario)
	}

    /*console.log(diccionario);
	console.log(eval(historial[historial.length - 1]));
	console.log(eval(document.getElementById('enviarDicc').value));*/
	//actualizarColoresClases()
	actualizarDiccStyleBody()
    inyectarPaletaColorMostrador('noIncrementar')
	//traducirDiccionario('porAhora') estaba, en prueba para reemplazarlo
}

function retornarToast(){
	let cod = `<H3 id='toast' style='display: none; color: black; background: white;'></H3>`
	return cod
}

function avisoCorto(mensaje){
	let toast = document.getElementById('toast')
	toast.style.display = 'flex'
	toast.innerText = mensaje
	setTimeout(cerraAviso, 1000)
}

function cerraAviso(){
	//console.log('entra');
	let toast = document.getElementById('toast')
	toast.style.display = 'none'
}

