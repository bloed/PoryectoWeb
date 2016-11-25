
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

function cargarAvisos(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   	  var jsonObj = JSON.parse(this.responseText);
      var cont = document.getElementById("avisoCont");
      for(var i = 0; i< jsonObj.length;i++){
	   	  var obj = jsonObj[i];
	   	  var a = document.createElement("a");
	   	  var p = document.createElement("p");

	   	  a.innerHTML = "Aviso #"+ (i+1) + "&#160&#160&#160&#160Fecha " + obj.Fecha;
	   	  p.innerHTML = obj.Aviso;
	   	  cont.appendChild(a);
	   	  cont.appendChild(p);
	   }
   }
  };

  xhttp.open("GET", "../php/getAvisosRutas.php?Ruta=" + myParam, true);
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

function validateForm(){
  var form = document.forms["myForm"];
  if(nuevo){
    if(form["nombre"].value == "" || form["codigo"].value == "" || form["tarifa"].value == ""){
      alert("Por favor rellenar los campos de nombre, codigo y tarifa");
      return false;
    }
  }
}


var nuevo = localStorage.getItem("nuevo");
var empresaId = localStorage.getItem("empresa");
if(nuevo == "true"){
  document.getElementById("divChofer").className = "special-grid special-grid-left fFloatR hidden";
  document.getElementById("type").action = "../php/insertRuta.php";
  document.getElementById("mensaje2").innerHTML = "Ingrese los datos basicos para crear una nueva ruta, no olvide ingresar los horarios y paradas en los siguientes pasos para que la ruta sea visible para las personas. Puede ingresar una imagen ahora o le asignaremos una por un default.";
  document.getElementById("butform").value = "Agregar ruta";
  document.getElementById("imagenGeneral").src ="../images/busqueda2.jpg";
  document.getElementById("a1").href = "empresarioCMS.html?empresa="+ empresaId;
  document.getElementById("a2").href = "modificarGeneralCMS.html?ruta="+myParam;
  document.getElementById("id").value = empresaId;
}else{
  var myParam = location.search.split('ruta=')[1];

  document.getElementById("id").value = myParam;
  document.getElementById("id2").value = empresaId;
  document.getElementById("id3").value = myParam;
  cargarDatosBasicos();
  cargarChoferes();
  cargarChoferesEmpresa();
  index();
}


window.onbeforeunload = function (e) {
  localStorage.setItem("nuevo",false);
};




