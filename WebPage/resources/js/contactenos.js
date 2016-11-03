function onload(){
    getContactenos();
}
function getContactenos(){
    var element= document.getElementById("infoContactenos");
    element.innerText = requestContactenos();
}
function requestContactenos(){
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed laoreet mi. Fusce posuere ultrices leo nec dictum. Cras tempus pretium quam mollis tempus. Suspendisse ornare mi vel velit mattis, vitae pharetra felis feugiat. Maecenas eros mauris, cursus ac elit eu, auctor pulvinar lacus. Curabitur et tincidunt ante. Nam arcu felis, rutrum at dignissim eu, commodo et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultricies tincidunt feugiat. Maecenas consectetur leo eget mi euismod, a molestie tortor blandit.";
}