var contGeneral = document.getElementById("resultados");
var oculto = true;

function cargarResultado(id, imgBase, descripcion, nombreRuta){
	var contResultado = document.createElement("div");
	var img = document.createElement("img");
	var contDescrip = document.createElement("div");
	var nombre = document.createElement("h4");
	var par = document.createElement("p");
	var link = document.createElement("a");
	var but = document.createElement("button");

	//but
	but.className = "btnVerMas";
	but.innerHTML = "Ver mas";

	//link
	link.href="infoParadas.html?idRuta=" + id;
	link.appendChild(but);

	//nombre
	nombre.innerHTML = nombreRuta;

	//par
	par.innerHTML = descripcion;

	//img
	img.className = "imgResultado";
	img.src = imgBase;

	//contDescrip
	contDescrip.className = "descripcionResultado";
	contDescrip.appendChild(nombre);
	contDescrip.appendChild(par);
	

	//contResultado
	contResultado.className = "resultado";
	contResultado.appendChild(img);
	contResultado.appendChild(contDescrip);
	contResultado.appendChild(link);

	contGeneral.appendChild(contResultado);


	
}

function mostarOpcionAvanzada(){
	if(oculto == true){
		document.getElementById("Avanzada").className = "visible";
		oculto = false;
		document.getElementById("textAvanzado").innerHTML = "Ocultar opciones avanzadas";
	}else{
		document.getElementById("Avanzada").className = "oculto";
		oculto = true;
		document.getElementById("textAvanzado").innerHTML = "Mostrar opciones avanzadas";
	}
}

function buscar(){
	var busqueda = document.getElementById("textBusqueda").value;
	//mandar a buscar el dato y cargar las respuestas.
}

cargarResultado("1","resources/images/ruta.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.", "Juanito Perez");
cargarResultado("2","resources/images/ruta.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.", "Juanito Perez");
cargarResultado("1","resources/images/ruta.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.", "Juanito Perez");
cargarResultado("1","resources/images/ruta.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.", "Juanito Perez");
cargarResultado("1","resources/images/ruta.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.", "Juanito Perez");
cargarResultado("1","resources/images/ruta.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.", "Juanito Perez");
cargarResultado("1","resources/images/ruta.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.", "Juanito Perez");




