var myParam = location.search.split('ruta=')[1];
var empresaId = localStorage.getItem("empresa");


function index(){
  document.getElementById("a1").href = "empresarioCMS.html?empresa="+ empresaId;
  document.getElementById("a2").href = "modificarGeneralCMS.html?ruta="+myParam;
  document.getElementById("a3").href = "modificarAvisosCMS.html?ruta="+myParam;
  document.getElementById("a4").href = "modificarParadasCMS.html?ruta="+myParam;
  document.getElementById("a5").href = "comentariosRutaCMS.html?ruta="+myParam;
}

function cargarDatosBasicos(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   	  var jsonObj = JSON.parse(this.responseText)[0];
      document.getElementById("nombre").value = jsonObj.Nombre;
      document.getElementById("tarifa").value = jsonObj.Tarifa;
      document.getElementById("codigo").value = jsonObj.Codigo;
      document.getElementById("imagenGeneral").src = jsonObj.Imagen;
   }
  };

  xhttp.open("GET", "../php/getInfoRuta.php?Ruta=" + myParam, true);
  xhttp.send();
}

function cargarParadas(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
      var cont = document.getElementById("paradas");
      var string = "<table border='0px' style='width:100%; text-align: center'><col width='80%'><col width='20%'>"
      if(this.responseText != ""){
        var jsonObj = JSON.parse(this.responseText);
        for(var i = 0; i< jsonObj.length;i++){
        	var obj = jsonObj[i];
        	string += "<tr><td><textarea id='text"+obj.Id+"' class='txtParada txtAreaStyle'>"+obj.Nombre+"</textarea></td>";
        	string += "<td><a class='aStyle'> + <input style='width:35px' id='time"+obj.Id+"' type='number' class='textbox textInput' value='"+obj.Tiempo+"'> mins</a></td>"
        	string += "<td><div class='gallery-button'><button type='button' class='btnSimpleDesign clickable' onclick='modParada("+obj.Id+")'>Modificar</button><br><button type='button' class='btnSimpleDesign clickable' onclick='elimParada("+obj.Id+")'>Eliminar</button></div></td></tr>";
        }
      }
      string += "<tr><td><textarea id='textNuevo' name='userMsg' class='txtParada txtAreaStyle'></textarea></td><td><a class='aStyle'> + <input id='timeNuevo' name='userName' style='width:35px' type='number' class='textbox textInput' value=''> mins</a></td><td><div class='gallery-button'><button type='button' class='btnSimpleDesign clickable' onclick='agregarParada()'>Agregar</button></div></tr>";
      string += "</table>";
      cont.innerHTML = string;
     
   }
  };

  xhttp.open("GET", "../php/getParadasRuta.php?Ruta=" + myParam, true);
  xhttp.send();	
}

function modParada(myId){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   	console.log(this.responseText);
      cargarParadas();
    }
  };

  var nombre = document.getElementById("text"+myId).value;
  var tiempo = document.getElementById("time"+myId).value; 


  xhttp.open("GET", "../php/updateParada.php?parada=" + myId+"&nombre="+nombre+"&tiempo="+tiempo, true);
  xhttp.send();
}

function elimParada(myId){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      cargarParadas();
    }
  };

  xhttp.open("GET", "../php/deleteParada.php?parada=" + myId, true);
  xhttp.send();
}

function agregarParada(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      cargarParadas();
    }
  };

  var nombre = document.getElementById("textNuevo").value;
  var tiempo = document.getElementById("timeNuevo").value;

  xhttp.open("GET", "../php/insertParada.php?nombre="+nombre+"&tiempo="+tiempo+"&ruta="+myParam, true);
  xhttp.send();
}

function cargarTiempos(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
      var cont = document.getElementById("salidas");
      var string = "<table border='0px' style='width:100%; text-align: center'><col width='80%'><col width='20%'>";
      if(this.responseText != ""){
        var jsonObj = JSON.parse(this.responseText);
        for(var i = 0; i< jsonObj.length;i++){
        	var obj = jsonObj[i];
        	string += "<tr><td><a class='aStyle'><input style='width:120px' id='salida"+obj.Id+"' type='time' class='textbox textInput' value='"+obj.Salida+"'></a></td>";
        	string += "<td><div class='gallery-button'><button type='button' class='btnSimpleDesign clickable' onclick='modSalida("+obj.Id+")'>Modificar</button><br><button type='button' class='btnSimpleDesign' onclick='elimSalida("+obj.Id+")'>Eliminar</button></div></tr>";

        }
      }
      string+= "<tr><td><a class='aStyle'><input style='width:120px' id='nuevaSalida' name='userName' type='time' class='textbox textInput' value=''></a></td><td><div class='gallery-button'><button type='button' class='btnSimpleDesign clickable' onclick='agregarSalida()'>Agregar</button><br></div></tr>";
      string+= "</table>";
      cont.innerHTML = string;
   }
  };

  xhttp.open("GET", "../php/getTiemposRutaCMS.php?Ruta=" + myParam, true);
  xhttp.send();	
}

function modSalida(myId){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      cargarTiempos();
    }
  };

  var tiempo = document.getElementById("salida"+myId).value; 


  xhttp.open("GET", "../php/updateSalida.php?salida=" + myId+"&tiempo="+tiempo, true);
  xhttp.send();
}

function elimSalida(myId){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      cargarTiempos();
    }
  };

  xhttp.open("GET", "../php/deleteSalida.php?salida=" + myId, true);
  xhttp.send();
}

function agregarSalida(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   	console.log(this.responseText);
      cargarTiempos();
    }
  };
  var tiempo = document.getElementById("nuevaSalida").value;

  xhttp.open("GET", "../php/insertSalida.php?tiempo=" + tiempo+"&ruta="+myParam, true);
  xhttp.send();
}


cargarParadas();
cargarTiempos();
index();