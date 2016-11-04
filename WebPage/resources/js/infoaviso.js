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

     var avisos = document.getElementById("avisos");

    var advises = requestAvisos(idRuta);

    for (var i = 0; i< advises.avisos.length;i++){
        var divAviso = document.createElement("div");
        divAviso.className = "aviso";

        var p = document.createElement("p");
        p.innerText = advises.avisos[i].aviso;

        divAviso.appendChild(p);

        avisos.appendChild(divAviso);

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
function requestAvisos(idRuta){
    return {
        avisos:[
            {
                aviso:"Juorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.",
            },
            {
                aviso:"Juorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.",
            }
        ]
    }
}
