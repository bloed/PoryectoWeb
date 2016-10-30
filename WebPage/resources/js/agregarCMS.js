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

function agregarParadas(parada,cont){
	if(parada == null){
		parada = document.getElementById("paradas").value;
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
		agregarTiempoExtra("+5 min");
	}
}

function agregarTiempoExtra(tiempoExtra,cont){
	var input = document.createElement("input");
	var div = document.getElementById("divTiempoExtra");
	input.type = "text";
	input.value = tiempoExtra;
	input.name = "tiempoExtra";
	div.insertBefore(input, div.children[1]);
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
}

function printA(array){
	var resultado = "";
	for(var i=0; i<array.length; i++){
		resultado+= array[i].value + " - ";
	}
	return resultado;
}