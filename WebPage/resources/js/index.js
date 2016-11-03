var myIndex = 0;

function onload(){
    carousel();
    loadMainInfo("maininfoIndex");
}
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
}
function loadMainInfo(id){
    var element= document.getElementById(id);
    element.innerText = requestContent(id);
}
function requestContent(id){
    switch (id){
        case "maininfoIndex":
            return "JOSHUALorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.";
    }
}
maininfoIndex