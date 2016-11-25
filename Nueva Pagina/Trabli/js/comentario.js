var myParam = location.search.split('chofer=')[1];
var esRuta = false;
if(!myParam){
  myParam = location.search.split('ruta=')[1];
  esRuta = true;
}
console.log(myParam);

var anonimo = true;
function anonimoSet(){
  if(anonimo == false){
    anonimo = true;
    document.getElementById("divAnonimo").className = "hidden";
  }else{
    anonimo = false;
    document.getElementById("divAnonimo").className = "show";
  }
}

var contacto = false;
function contactoSet(){
  if(contacto == false){
    contacto = true;
    document.getElementById("divContacto").className = "show";
  }else{
    contacto = false;
    document.getElementById("divContacto").className = "hidden";
  }
}

function insertComment(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        if(esRuta){
          window.location = "comentarios.html?ruta="+ myParam;
        }else{
          window.location = "comentarios.html?chofer="+myParam;
        }
     }
   };

  var comment = document.getElementById("comment").value;
  var nombre = document.getElementById("userName").value;
  if(anonimo){
    nombre = "Anonimo";
  }
  var contact = document.getElementById("contact").value;
  var fecha = getFecha();

  if(esRuta){
    xhttp.open("GET", "../php/insertComentarioRuta.php?comment=" + comment+"&id="+myParam+"&nombre="+nombre+"&contact="+contact+"&fecha="+fecha, true);
  }else{
    xhttp.open("GET", "../php/insertComentarioChofer.php?comment=" + comment+"&id="+myParam+"&nombre="+nombre+"&contact="+contact+"&fecha="+fecha, true);
  }
  xhttp.send();

}

function getFecha(){
  var d = new Date();
  return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
}

function cargarDatosBasicos(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   	  var jsonObj = JSON.parse(this.responseText)[0];
      var sign = "CHOFER: ";
      if(esRuta){
        sign = "RUTA: ";
      }
      document.getElementById("nameComment").innerHTML += sign + jsonObj.Nombre;
      document.getElementById("image").src = jsonObj.Imagen;
   }
  };
  if(esRuta){
    xhttp.open("GET", "../php/getInfoRuta.php?Ruta=" + myParam, true);
  }else{
    xhttp.open("GET", "../php/getChofer.php?cedula=" + myParam, true);
  }
  xhttp.send();
}

function cargarComentarios(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      var jsonObj = JSON.parse(this.responseText);
      var cont = document.getElementById("contComments");
      var string = "";
      for(var i = 0; i< jsonObj.length;i++){
        var obj = jsonObj[i];
        string += "<div class='gallery-grid'><div class='commentData'><h4>Comentario de: "+ obj.Nombre+"</h4>";
        string += "<p>Fecha: "+obj.Fecha + "</p><p>"+obj.Comentario+"</p></div></div>";
      }
      cont.innerHTML = string;

                  
    }
  };
  if(esRuta){
    xhttp.open("GET", "../php/getComentariosRuta.php?id=" + myParam, true);
  }else{
    xhttp.open("GET", "../php/getComentariosChofer.php?cedula=" + myParam, true);
  }
  xhttp.send();
}

cargarDatosBasicos();
cargarComentarios();




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
      	string += "<h4>"+obj.Nombre+"</h4><div class='gallery-button'><a href='comentarios.html?Chofer="+obj.Cedula+"'>Ver Comentarios</a></div></div></div>";
   	  }
   	  cont.innerHTML = string;
   	}
  };

  xhttp.open("GET", "../php/getChoferesRuta.php?Ruta=" + myParam, true);
  xhttp.send();	
}



