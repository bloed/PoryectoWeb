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
      document.getElementById("nombre").innerHTML = jsonObj.Nombre;
   }
  };

  xhttp.open("GET", "../php/getInfoRuta.php?Ruta=" + myParam, true);
  xhttp.send();
}

function cargarAvisos(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   	  var jsonObj = JSON.parse(this.responseText);
      var cont = document.getElementById("actuales");
      var string = "";
      for(var i = 0; i< jsonObj.length;i++){
	   	  var obj = jsonObj[i];
        string += "<a href='#'>Aviso #"+(i+1)+" Fecha "+obj.Fecha+"</a><p>Fecha de borrado:";
        string += "<input id='tiempo"+obj.Id+"' name='userName' type='date' class='textbox' value='"+obj.FechaEliminar+"'></p><span>";
        string += "<textarea id='texto"+obj.Id+"' name='userMsg' class='txtComment'>"+obj.Aviso+"</textarea></span><div class='gallery-button modify-button'>";
        string += "<a href='#'' onclick = 'eleminarAviso("+obj.Id+")'>Eliminar</a><a class='clickable' onclick = 'modAviso("+obj.Id+")'>Modificar</a></div><br>";
	   }
     cont.innerHTML = string;
   }
  };

  xhttp.open("GET", "../php/getAvisosRutas.php?Ruta=" + myParam, true);
  xhttp.send();	
}

function modAviso(id){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      cargarAvisos();
    }
  };
  var fecha2 = document.getElementById("tiempo"+id).value;
  var texto = document.getElementById("texto"+id).value;
  var fecha = getFecha();

  xhttp.open("GET", "../php/updateAviso.php?fecha=" + fecha+"&id="+id+"&mensaje="+texto+"&fecha2="+fecha2, true);
  xhttp.send();
}

function getFecha(){
  var d = new Date();
  return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
}

function eleminarAviso(id){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      window.location = "modificarAvisosCMS.html?ruta="+myParam;
    }
  };

  xhttp.open("GET", "../php/deleteAviso.php?id="+id, true);
  xhttp.send();
}

function agregarAviso(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      window.location = "modificarAvisosCMS.html?ruta="+myParam;
    }
  };
  var fecha2 = document.getElementById("nuevoTiempo").value;
  var texto = document.getElementById("nuevoTexto").value;
  var fecha = getFecha();

  xhttp.open("GET", "../php/insertAviso.php?fecha=" + fecha+"&ruta="+myParam+"&mensaje="+texto+"&fecha2="+fecha2, true);
  xhttp.send();
}



function cargarTiempos(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
   	  var jsonObj = JSON.parse(this.responseText);
      var cont = document.getElementById("tiemposSalida");
      for(var i = 0; i< jsonObj.length -1 ;i++){
      	var obj = jsonObj[i];
      	cont.innerHTML += obj.Salida + ", ";
      }
      cont.innerHTML += jsonObj[jsonObj.length-1].Salida;
   }
  };

  xhttp.open("GET", "../php/getTiemposRuta.php?Ruta=" + myParam, true);
  xhttp.send();	
}

function cargarParadas(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
   	  var jsonObj = JSON.parse(this.responseText);
      var cont = document.getElementById("paradas");
      var string = "<table border='0px' style='width:100%; text-align: center'><col width='80%''><col width='20%''>"
      for(var i = 0; i< jsonObj.length;i++){
      	var obj = jsonObj[i];
      	string += "<tr><td><a class='aStyle underlineA'>"+ obj.Nombre +"</a></td>";
      	string += "<td><a class='aStyle underlineA'>+ "+ obj.Tiempo +" mins </a></td></tr>";
      }
      string += "</table>";
      cont.innerHTML = string;
     
   }
  };

  xhttp.open("GET", "../php/getParadasRuta.php?Ruta=" + myParam, true);
  xhttp.send();	
}

function cargarChoferes(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  var jsonObj = JSON.parse(this.responseText);
      var cont = document.getElementById("choferes");
      var string = "";
      for(var i = 0; i< jsonObj.length;i++){
      	var obj = jsonObj[i];
      	string += "<div class='gallery-grid'><div class='resultImageChofer'>";
      	string += "<a><img class='rImage' src='"+ obj.Imagen+"'></a></div><div class='resultDataChofer'>";
      	string += "<h4>"+obj.Nombre+"</h4><div class='gallery-button modify-button'><a href='comentarios.html?chofer="+obj.Cedula+"'>Ver Comentarios</a><br><br><a class='clickable' onclick = 'eliminarChofer("+obj.Cedula+")' >&#160&#160Eliminar&#160&#160</a></div></div></div>";
   	  }
   	  cont.innerHTML = string;
   	}
  };

  xhttp.open("GET", "../php/getChoferesRuta.php?Ruta=" + myParam, true);
  xhttp.send();	
}
function cargarChoferesEmpresa(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var jsonObj = JSON.parse(this.responseText);
      var cont = document.getElementById("selectActual");
      var string = "";
      for(var i = 0; i< jsonObj.length;i++){
        var obj = jsonObj[i];
        string += "<option value='"+obj.Id+"'>"+obj.Nombre+"</option>";
      }
      cont.innerHTML = string;
    }
  };

  xhttp.open("GET", "../php/buscarEmpresaChofer.php?Empresa=" + empresaId, true);
  xhttp.send(); 
}

function eliminarChofer(myId){
  console.log(myId);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      window.location = "modificarGeneralCMS.html?ruta="+myParam;
    }
  };

  xhttp.open("GET", "../php/deleteChoferRuta.php?cedula=" + myId+"&ruta="+myParam, true);
  xhttp.send();
}

function agregarChoferExistente(){
  var cedula = document.getElementById("selectActual").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      window.location = "modificarGeneralCMS.html?ruta="+myParam;
    }
  };

  xhttp.open("GET", "../php/insertChoferRuta.php?cedula=" + cedula+"&ruta="+myParam, true);
  xhttp.send();
}





cargarDatosBasicos();
cargarAvisos();
index();