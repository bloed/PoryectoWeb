var myParam = location.search.split('empresa=')[1];

localStorage.setItem("empresa",myParam);

function generarResultParada(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var jsonObj = JSON.parse(this.responseText);
        var cont = document.getElementById("contResult");
        for(var i = 0; i< jsonObj.length;i++){
          (function () {

          var obj = jsonObj[i];
          console.log(obj.Id);
          var divImg = document.createElement("div");
          var a = document.createElement("a");
          var img = document.createElement("img");
          var divData = document.createElement("div");
          var h4 = document.createElement("h4");
          var precio = document.createElement("p");
          var paradas = document.createElement("p");
          var paradas2 = document.createElement("p");
          var jornada = document.createElement("p");
          var divResult = document.createElement("div");
          var divBut = document.createElement("div");
          var aBut = document.createElement("a");
          var aBut2 = document.createElement("a");

          aBut.href = "modificarGeneralCMS.html?ruta="+obj.Id;
          aBut.innerHTML = "Modificar";

          aBut2.innerHTML = "&#160Eliminar&#160&#160";
          aBut2.className = "clickable";
          aBut2.addEventListener("click", function(){
              eliminarRuta(obj.Id);
              });

          divBut.className = "gallery-button";
          divBut.appendChild(aBut);
          divBut.appendChild(aBut2);
          divResult.className = "gallery-grid";

          img.className = "rImage";
          img.src = obj.Imagen //temporal
          divImg.className = "resultImage";
          a.appendChild(img);
          divImg.appendChild(a);

          divData.className = "resultData";
          h4.innerHTML = obj.Nombre;
          precio.innerHTML = "Precio: "+obj.Tarifa+" colones";
          paradas.innerHTML = "Parada inicial: "+obj.Inicial;
          paradas2.innerHTML = "Parada final: "+obj.Final;
          jornada.innerHTML = "Jornada inicial: "+ obj.Init +"&#160&#160&#160&#160 Jornada Final: "+obj.Fin; 
          divData.appendChild(h4);
          divData.appendChild(precio);
          divData.appendChild(paradas);
          divData.appendChild(paradas2);
          divData.appendChild(jornada);

          divResult.appendChild(divImg);
          divResult.appendChild(divData);
          divResult.appendChild(divBut);

          cont.appendChild(divResult);
          }());
        }
    }
  };
  xhttp.open("GET", "../php/buscarEmpresaRuta.php?Empresa="+myParam, true);
  xhttp.send();	
}

function generarResultadoChofer(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var jsonObj = JSON.parse(this.responseText);
        var cont = document.getElementById("contResult");
        for(var i = 0; i< jsonObj.length;i++){
          (function () {
          var obj = jsonObj[i];
          var divImg = document.createElement("div");
          var a = document.createElement("a");
          var img = document.createElement("img");
          var divData = document.createElement("div");
          var h4 = document.createElement("h4");
          var cedula = document.createElement("p");
          var rutas = document.createElement("p");
          var divResult = document.createElement("div");
          var divBut = document.createElement("div");
          var aBut = document.createElement("a");
          var aBut2 = document.createElement("a");

          aBut.href = "choferCMS.html?chofer="+obj.Id;
          aBut.innerHTML = "Modificar";
          aBut2.innerHTML = "&#160Eliminar&#160&#160";
          aBut2.className = "clickable";
          aBut2.addEventListener("click", function(){
              eliminarChofer(obj.Id);
              });

          divBut.className = "gallery-button";
          divBut.appendChild(aBut);
          divBut.appendChild(aBut2);
          divResult.className = "gallery-grid";

          img.className = "rImage";
          img.src = obj.Imagen //temporal
          divImg.className = "resultImage";
          a.appendChild(img);
          divImg.appendChild(a);

          divData.className = "resultData";
          h4.innerHTML = obj.Nombre;
          cedula.innerHTML = "Cedula: "+obj.Id;

          if(obj.Rutas == null){
            obj.Rutas = "Sin rutas asignadas";
          }
          rutas.innerHTML = "Rutas respecivas: "+obj.Rutas;
          divData.appendChild(h4);
          divData.appendChild(cedula);
          divData.appendChild(rutas);

          divResult.appendChild(divImg);
          divResult.appendChild(divData);
          divResult.appendChild(divBut);

          cont.appendChild(divResult);
          }());
        }
    }
  };
  xhttp.open("GET", "../php/buscarEmpresaChofer.php?Empresa="+myParam, true);
  xhttp.send(); 
}

function cargarNombre(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      var jsonObj = JSON.parse(this.responseText)[0];
      document.getElementById("nombre").innerHTML = jsonObj.Nombre;
    }
  };

  xhttp.open("GET", "../php/getEmpresa.php?id=" + myParam, true);
  xhttp.send();
}

function eliminarChofer(id){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      window.location = "empresarioCMS.html?empresa="+myParam;
    }
  };

  xhttp.open("GET", "../php/deleteChofer.php?cedula=" + id, true);
  xhttp.send();
}

function eliminarRuta(id){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      window.location = "empresarioCMS.html?empresa="+myParam;
    }
  };

  xhttp.open("GET", "../php/deleteRuta.php?id=" + id, true);
  xhttp.send();
}

function nuevaRuta(){
  localStorage.setItem("nuevo",true);
  window.location = "modificarGeneralCMS.html";
}



cargarNombre();
generarResultParada();
generarResultadoChofer();

