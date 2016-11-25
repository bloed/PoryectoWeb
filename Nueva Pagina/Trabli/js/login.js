function login(){
  	var xmlhttp = new XMLHttpRequest();
  	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      if(this.responseText == "admin"){
          document.cookie = "session=admin";
          window.location = "CommentAdmin/busqueda.html";
      }else if(this.responseText != ''){
        	//crear cookie
        	document.cookie = "session=empresa";
        	window.location = "CMS/empresarioCMS.html?empresa="+ this.responseText;
      }
      else{
        	alert("Usuario o contraseña equivocadas");
      }

    }

  };

  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;

  xmlhttp.open("POST", "php/login.php?User=" + user +"&Pass="+pass, true);
  xmlhttp.send();
}

