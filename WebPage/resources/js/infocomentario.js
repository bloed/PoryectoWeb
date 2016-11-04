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

    var comments = document.getElementById("comentarios");

    var comentarios = requestComentarios(idRuta);

    for (var i = 0; i< comentarios.comentarios.length;i++){
        var divComment = document.createElement("div");
        divComment.className = "comentario";

        var h2 = document.createElement("h2");
        h2.className = "comentarioHeader"
        h2.innerText = comentarios.comentarios[i].autor;

        var p = document.createElement("p");
        p.innerText = comentarios.comentarios[i].comentario;

        divComment.appendChild(h2);
        divComment.appendChild(p);

        comments.appendChild(divComment);

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

function requestComentarios(idRuta){
    return {
        comentarios:[
            {
                autor:"Juanito:",
                comentario: "Buen servicio"
            },
            {
                autor:"Juanito2:",
                comentario: "Mal Servicio"
            },
            {
                autor:"Jousuep:",
                comentario: "El chofer me cobró más y no me quizo devolver el dinero"
            }
        ]
    }
}