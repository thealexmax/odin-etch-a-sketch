function createGrid() {
    let size = prompt("Enter the size of the grid NxN");
    if(size > 100) {
        createGrid();
        return;
    }
    for(i = 0; i < size; i++) {
        let element = document.createElement("div");
        //element.setAttribute("id", "element");
        element.setAttribute("class", "row");
        document.getElementById("container").appendChild(element)
        for(j = 0; j < size; j++) {
            let divelem = document.createElement("div");
            divelem.setAttribute("id", "element");
            divelem.setAttribute("style", `width: ${Math.floor(960/size)}px; height:${Math.floor(960/size)}px`);
            //divelem.appendChild(document.createTextNode(j));
            element.appendChild(divelem);
        }
    }
}

function clearGrid() {
    document.getElementById("container").innerHTML = "";
}

document.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
    if(target.id == "element" && target.className != "row") {
        target.style.background = 'black';
    }
});