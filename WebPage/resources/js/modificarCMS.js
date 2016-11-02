/* COMENTARIOS*/
function cargarComentario(id,header,comentario){
	var ul = document.getElementById("listaComentarios");
	var li = document.createElement("li");
	var h2 = document.createElement("h2");
	h2.innerHTML = header;
	h2.className = "comentarioHeader"
	var p = document.createElement("p");
	p.innerHTML = comentario;
	var idd = document.createElement("p");
	idd.innerHTML = id;
	idd.setAttribute("id", id);

	var btn1 = document.createElement("BUTTON");
	btn1.type = "button";
	btn1.className = "btnSimpleDesign";
	btn1.innerHTML = 'Aceptar';
	btn1.addEventListener("click", function(){
	    aceptaComentario(li,id);
	}, false);

	var btn2 = document.createElement("BUTTON");
	btn2.type = "button";
	btn2.className = "btnSimpleDesign";
	btn2.innerHTML = 'Rechazar';
	btn2.addEventListener("click", function(){
	    rechazaComentario(li,id);
	}, false);

	li.appendChild(h2);
	li.appendChild(idd);
	li.appendChild(p);
	li.appendChild(btn1);
	li.appendChild(btn2);
	ul.appendChild(li);
}

function aceptaComentario(li,id){
	var ul = document.getElementById("listaComentarios");
	ul.removeChild(li);
	alert("Comentario Acepetado con id " + id);
	//llama php
}

function rechazaComentario(li,id){
	var ul = document.getElementById("listaComentarios");
	ul.removeChild(li);
	alert("Comentario Rechazado con id " + id);
	//llama php
}

cargarComentario(1,"Este es un header automático 1", "Este es un comentario agregado dinámicamente 1 ");
cargarComentario(2,"Este es un header automático 2", "Este es un comentario agregado dinámicamente 2 ");

/* AVISOS */

function cargarAvisos(avisos){
	var div = document.getElementById("divAvisos");
	var p = document.createElement("textarea");
	p.value = avisos;
	p.setAttribute("id", "avisos");
	p.setAttribute("name", "avisos");
	p.cols = 150;
	p.rows = 15;
	div.appendChild(p);
}

function modificarAvisos(){
	var p = document.getElementById("avisos");

	alert("Avisos modificados: " + p.value);
	//llamar php
}

cargarAvisos("Iorem Ipsum Dolor!!! Este es un aviso cargado dinámicamente.")

/* PARADAS */

function cargarNombreParada(nombre){
	document.getElementById("nombreParada").innerHTML = nombre;
}
cargarNombreParada("Nombre Cargado");

/* TARIFAS */

function cargarTarifa(monto){
	document.getElementById("tarifa").value = monto;
}

function modificarTarifa(){
	var nuevaTarifa = document.getElementById("tarifa").value;

	alert("Tarifa cambiada a: " + nuevaTarifa);
	//llamar php
}

cargarTarifa(999);

/* TIEMPO SALIDAS, PARADAS Y TIEMPOS EXTRAS */
function agregarTiempoSalida(tiempoSalida,cont){
	if(tiempoSalida == null){
		tiempoSalida = document.getElementById("tiempoSalida").value;
	}
	var input = document.createElement("input");
	var div = document.getElementById("divTiempo");
	input.type = "text";
	input.value = tiempoSalida;
	input.name = "tiempoSalida";
	div.insertBefore(input, div.children[1]);
	if(cont == 1){
		
	}
	else{
		/*agregarParadas("NuevaParada",1);
		agregarTiempoExtra("+5 min");*/
	}
}

function eliminarTiempoSalida(){
	var div = document.getElementById("divTiempo");
	if(div.children[1].name == "tiempoSalida"){
		div.removeChild(div.children[1]);
	}
}
agregarTiempoSalida("1:00");
agregarTiempoSalida("2:00");
agregarTiempoSalida("3:00");


function agregarParadas(parada,cont,tiempoExtra){
	if(parada == null){
		parada = document.getElementById("paradas").value;
		tiempoExtra = "+5 min";
	}
	var input = document.createElement("input");
	var div = document.getElementById("divParadas");
	input.type = "text";
	input.value = parada;
	input.name = "parada";
	div.insertBefore(input, div.children[1]);
	if(cont == 1){
		
	}
	else{
		//agregarTiempoSalida("NuevoTiempoSalida",1);
		agregarTiempoExtra(tiempoExtra);
	}
}

function eliminarParadas(){
	var div = document.getElementById("divParadas");
	var div2 = document.getElementById("divTiempoExtra");
	if(div.children[1].name == "parada"){
		div.removeChild(div.children[1]);
		div2.removeChild(div2.children[1]);
	}
}

agregarParadas("Parada automática 1",null,"+10 min");
agregarParadas("Parada automática 2",null,"+5 min");

function agregarTiempoExtra(tiempoExtra,cont){
	var input = document.createElement("input");
	var div = document.getElementById("divTiempoExtra");
	input.type = "text";
	input.value = tiempoExtra;
	input.name = "tiempoExtra";
	div.insertBefore(input, div.children[1]);
}

//agregarTiempoExtra("+5 min");
//agregarTiempoExtra("+10 min");

function modificarTodo(){
	var tiemposSalida = document.getElementsByName("tiempoSalida");
	var paradas = document.getElementsByName("parada");
	var tiemposExtra = document.getElementsByName("tiempoExtra");
	var conductores = document.getElementsByName("conductores");

	//llamar php?
	alert("Todo modificado referente a paradas, tiempos de salida, tiempos extra y conductores.");
}

/* CONDUCTORES */

function agregarConductor(nombreConductor,cedula){
	if(nombreConductor == null){
		cedula = document.getElementById("cedula").value;
		nombreConductor = document.getElementById("nombreConductor").value;
	}
	var div = document.getElementById("divConductores");
	var p = document.createElement("p");
	p.innerHTML = nombreConductor;
	p.setAttribute("name", "conductores");

	var btn = document.createElement("BUTTON");
	btn.type = "button";
	btn.className = "btnSimpleDesignLong";
	btn.innerHTML = 'Borrar';
	btn.addEventListener("click", function(){
	    quitarConductor(p,nombreConductor);
	}, false);

	p.appendChild(btn);

	div.insertBefore(p,div.children[1]);
	//llama php
}


function quitarConductor(p,nombre){
	var div = document.getElementById("divConductores");
	div.removeChild(p);
	alert("Conductor quitado con nombre " + nombre);
	//llama php
}