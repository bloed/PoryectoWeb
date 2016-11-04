function onload(){
    getInfoRuta();
}
function getInfoRuta(){
    var idRuta = getIdRuta();

    var verParadas = document.getElementById("verParadas");
    verParadas.href="infoParadas.html?idRuta=" + idRuta;
    
    var verParadas = document.getElementById("infoComentarios");
    verParadas.href="infoComentarios.html?idRuta=" + idRuta;
    
    var verParadas = document.getElementById("infoAvisos");
    verParadas.href="infoAvisos.html?idRuta=" + idRuta;
    
    var ruta = requestInfoRuta(); 
    
    var nombre = document.getElementById("nombreRuta");
    nombre.innerText =ruta.nombre; 

    var img = document.getElementById("imgQR");
    img.src= ruta.urlQRImg;

    var tarifa = document.getElementById("tarifa");
    tarifa.innerText = ruta.tarifa; 

    var ul = document.getElementById("HorasSalida");
    for(var i = 0 ;i<ruta.horasSalida.length;i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(ruta.horasSalida[i]));
        ul.appendChild(li);
    }

    var ul = document.getElementById("paradas");
    for(var i = 0 ;i<ruta.paradas.length;i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(ruta.paradas[i]));
        ul.appendChild(li);
    }
}
function getIdRuta(){
    var parametros = location.search.substr(1).split("&");
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === "idRuta") result = decodeURIComponent(tmp[1]);
    }
    return result;
}
function requestInfoRuta(id){
    //request the route to the server and check the
    //current user
    return {
        nombre:"Nombre Ruta",
        urlQRImg:"resources/images/qr.png",
        tarifa:"$5",
        horasSalida:[
            "11:30","1:10","2:10","3:10","4:10",
            "6:10","7:10","8:10"
        ],
        paradas:[
            "Parada 1 + 0:00","Parada 3 + 0:10","Parada 4 + 0:20","Parada 5 + 0:30","Parada 6 + 0:35",
            "Parada 7 + 0:40","Parada 8 + 0:50"
        ]

    };
}