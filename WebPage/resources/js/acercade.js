function onload(){
    getRequeriments();
}
function getRequeriments() {
    var requirements = requestRequirements();
    var ul = document.getElementById("requisitos");
    for (var i = 0;i<requirements.length;i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(requirements[i]));
        ul.appendChild(li);
    }
    
}
function requestRequirements(){
    return ['Tener celular para cada chofer de bus','Tener acceso a internet en el celular','Instalar la aplciación'];
}