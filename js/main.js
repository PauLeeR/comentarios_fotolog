/*aquí va tu código*/
function guardar(){
	var boton = document.getElementById("save");
	boton.addEventListener("click", save);
	saveData();
}

function save(){
	var name = document.getElementById("clave").value;
	var post = document.getElementById("valor").value;
	localStorage.setItem(name, post);
	saveData();
	document.getElementById("clave").value = "";
	document.getElementById("valor").value = "";
}

function saveData(){
	var container = document.getElementById("ale");
	container.innerHTML = "";

	for (var i = 0; i < localStorage.length; i++) {
		var kei = localStorage.key(i);  
		var valuee = localStorage.getItem(kei);
		// con = se sobreescribe, mejor usar +=
		/*container.innerHTML += "<p>" + kei + " " + valuee + "</p>"; NO USAR INNER HTML, SINO APPENCHILD*/

		var comment = document.createElement("div");//creamos un div que contendrá cada comentario
		comment.classList.add("comentario"); //le damos una clase al div

		var nombre = document.createElement("h4"); // dentro del div contenedor del comentario irá el nombre de la persona que postea (acá en un título h4)
		var nombreText = document.createTextNode(kei); //texto que se escribe en ese h4
		nombre.classList.add("nombreText"); //texto del h4 es hijo de h4
		nombre.appendChild(nombreText);

		var comentario = document.createElement("p"); //dentro del div que tiene el nombre en el h4, abajo de eso está el post propiamente tal, en este lugar (pero primero creamos el elmento donde irá ese texto, un p)
		var comentarioTxt = document.createTextNode(valuee);
		comentario.classList.add("post");
		comentario.appendChild(comentarioTxt);

		comment.appendChild(nombre);
		comment.appendChild(comentario);

		container.appendChild(comment);
	}
};

guardar();


	var borrar = document.getElementById("clear");
	borrar.addEventListener("click", cleanData);

function cleanData(){
	window.localStorage.clear();
	saveData();
}

