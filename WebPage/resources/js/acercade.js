function onload(){
    getRequeriments();
    getAcercaDe();
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

function getAcercaDe(){
    var element= document.getElementById("infoAcercaDe");
    element.innerText = requestAcercaDe();
}
function requestAcercaDe(){
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.";
}