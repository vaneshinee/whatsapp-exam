function gettextoValue() {
	var texto = document.getElementById("texto");
	return texto.value;
}
function añadir() {
	var textoValue = gettextoValue();
	if (textoValue !== "") {
		doañadir(textoValue);
		clean();
	}
}

function doañadir(textoDeContenido) {
	var place = document.getElementById("place");
	var content = '<div class="box">' +
    '<div class="check" id="check">' +  
    textoDeContenido +
    '</div>' + '</div>';
	content.onchange = function() {
		if(this.checked){
			tachado.innerHTML = textoDeContenido.strike();
		}else {
			tachado.innerHTML = textoDeContenido;
		}
	var tachado = document.getElementById("tachado");
	tachado.innerHTML= textoDeContenido;
	}
	//Crear el elemento
	
	var elemento = document.createElement("div");
	elemento.className = "añadir";
	elemento.innerHTML = content;

	//Agregar elementos
	place.appendChild(elemento);
	var icono = document.getElementById("icono");
	var ex = place.lastChild;
	icono.onclick = function(){
		alert("Seguro deseas eliminar lo escrito?");
		place.removeChild(elemento);
	}
	
}
function clean() {
	var texto = document.getElementById("texto");
	texto.value = "";
	texto.focus();
}