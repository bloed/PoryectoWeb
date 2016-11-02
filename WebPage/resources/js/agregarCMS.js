function crearRuta(){
	//conseguir imagen. Esto llama los php.
	var nombre = document.getElementById("nombre").value;
	var tarifa = document.getElementById("tarifa").value;
	var tiemposSalida = document.getElementsByName("tiempoSalida");
	var paradas = document.getElementsByName("parada");
	var tiemposExtra = document.getElementsByName("tiempoExtra");
	var nombresConductores = document.getElementsByName("tiempoExtra");
	var cedulas = document.getElementsByName("cedula");

	alert("ruta creada");

	//lamar al php?

}

function agregarTiempoSalida(tiempoSalida){
	if(tiempoSalida == null){
		tiempoSalida = document.getElementById("tiempoSalida").value;
	}
	var input = document.createElement("input");
	var div = document.getElementById("divTiempo");
	input.type = "text";
	input.value = tiempoSalida;
	input.name = "tiempoSalida";

	div.insertBefore(input, div.children[1]);
	var btn = document.createElement("BUTTON");
	btn.type = "button";
	btn.className = "btnSimpleDesignLong";
	btn.innerHTML = 'Borrar';
	btn.addEventListener("click", function(){
	    eliminarTiemposSalida(input,btn);
	}, false);
	div.insertBefore(btn, div.children[2]);
}

function eliminarTiemposSalida(input,btn){
	var div = document.getElementById("divTiempo");
	div.removeChild(input);
	div.removeChild(btn);
}

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
		agregarTiempoExtra(tiempoExtra,input);
	}
}


function agregarTiempoExtra(tiempoExtra,inputParada){
	var input = document.createElement("input");
	var div = document.getElementById("divTiempoExtra");
	input.type = "text";
	input.value = tiempoExtra;
	input.name = "tiempoExtra";
	div.insertBefore(input, div.children[1]);


	var btn = document.createElement("BUTTON");
	btn.type = "button";
	btn.className = "btnSimpleDesignLong";
	btn.innerHTML = 'Borrar';
	btn.addEventListener("click", function(){
	    eliminarTiempoSalidaYParada(input,inputParada,btn);
	}, false);

	var divParadas = document.getElementById("divParadas");

	divParadas.insertBefore(btn, divParadas.children[2]);
}

function eliminarTiempoSalidaYParada(inputTimepoExtra,inputParada,btn){
	var div = document.getElementById("divTiempoExtra");
	var div2 = document.getElementById("divParadas");
	div.removeChild(inputTimepoExtra);
	div2.removeChild(inputParada);
	div2.removeChild(btn);
}

function agregarConductor(){
	var cedula = document.getElementById("cedula").value;
	var nombreConductor = document.getElementById("nombreConductor").value;
	var div1 = document.getElementById("divCedula");
	var div2 = document.getElementById("divNombreConductor");
	var input1 = document.createElement("input");
	input1.type = "text";
	input1.value = cedula;
	input1.name = "cedula";
	div1.insertBefore(input1, div1.children[1]);
	var input2 = document.createElement("input");
	input2.type = "text";
	input2.value = nombreConductor;
	input2.name = "nombreConductor";
	div2.insertBefore(input2, div2.children[1]);

	var btn = document.createElement("BUTTON");
	btn.type = "button";
	btn.className = "btnSimpleDesignLong";
	btn.innerHTML = 'Borrar';
	btn.addEventListener("click", function(){
	    eliminarConductor(input1,input2,btn);
	}, false);

	div2.insertBefore(btn, div2.children[2]);
}

function eliminarConductor(inputCedula,inputNombre,btn){
	var div1 = document.getElementById("divCedula");
	var div2 = document.getElementById("divNombreConductor");
	div1.removeChild(inputCedula);
	div2.removeChild(inputNombre);
	div2.removeChild(btn);
}

function printA(array){
	var resultado = "";
	for(var i=0; i<array.length; i++){
		resultado+= array[i].value + " - ";
	}
	return resultado;
}