dragWindow("about")

function dragWindow(element) {
    var position = [0, 0, 0, 0];
    const dragElement = document.getElementById(element);

    function dragMouseDown(e) {
        e = e || window.event; // for IE...
        e.preventDefault();
        position[2] = e.clientX;
        position[3] = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    };
  
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    };

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        position[0] = position[2] - e.clientX;
        position[1] = position[3] - e.clientY;
        // position[2] = e.clientX;
        // position[3] = e.clientY;
        position[2] = -(position[0] - position[2]);
        position[3] = -(position[1] - position[3]);
        dragElement.style.top = (dragElement.offsetTop - position[1]) + 'px';
        dragElement.style.top = (dragElement.offsetLeft - position[0]) + 'px';
    };
    dragElement.onmousedown = dragMouseDown;
};
