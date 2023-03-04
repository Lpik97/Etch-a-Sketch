function addDivs (size) {
    const h1 = document.createElement('h1');
    const gridContainer = document.createElement('div');
    h1.className = 'h1';
    h1.innerText = 'Etch-a-Sketch';
    gridContainer.className = 'gridContainer';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    document.body.appendChild(h1);
    document.body.appendChild(gridContainer);

    for (let i = 0; i < 256; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.className = "gridDiv";
        gridContainer.appendChild(gridDiv);
    }
}
addDivs(16);


