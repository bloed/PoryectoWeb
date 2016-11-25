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
        string += "<p>Fecha: "+obj.Fecha + "</p><p>"+obj.Comentario+"</p></div>";
        string += "<div class='gallery-button'><a class='clickable' onclick=eliminarComment("+obj.Id+")>Eliminar</a></div></div>";
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

function eliminarComment(myId){
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

  if(esRuta){
    xhttp.open("GET", "../php/deleteCommentRuta.php?id=" + myId, true);
  }else{
    xhttp.open("GET", "../php/deleteCommentChofer.php?id=" + myId, true);
  }
  xhttp.send();
  xhttp.send();
}

cargarDatosBasicos();
cargarComentarios();







