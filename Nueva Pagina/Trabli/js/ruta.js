var myParam = location.search.split('ruta=')[1];

function cargarDatosBasicos(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   	  var jsonObj = JSON.parse(this.responseText)[0];
      document.getElementById("nombre").innerHTML = jsonObj.Nombre;
      document.getElementById("tarifa").innerHTML = "Costo: " + jsonObj.Tarifa+" colones";
      document.getElementById("codigo").innerHTML = "Codigo: "+jsonObj.Codigo;
      document.getElementById("empresa").innerHTML = "Empresa: "+ jsonObj.NombreEmpresa;
      document.getElementById("imagenGeneral").src = jsonObj.Imagen;
      document.getElementById("commentsBut").href = "comentarios.html?ruta="+myParam;
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
      	string += "<h4>"+obj.Nombre+"</h4><div class='gallery-button'><a href='comentarios.html?chofer="+obj.Cedula+"'>Ver Comentarios</a></div></div></div>";
   	  }
   	  cont.innerHTML = string;
   	}
  };

  xhttp.open("GET", "../php/getChoferesRuta.php?Ruta=" + myParam, true);
  xhttp.send();	
}




cargarDatosBasicos();
cargarAvisos();
cargarTiempos();
cargarParadas();
cargarChoferes();


