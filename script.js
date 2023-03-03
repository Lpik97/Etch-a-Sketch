const h1 = document.createElement('h1');
const gridContainer = document.createElement('div');
const gridDiv = document.createElement('div');
h1.className = 'h1';
h1.innerText = 'Etch-a-Sketch';
gridContainer.className = 'grid';
gridDiv.className = 'gridDiv'
document.body.appendChild(h1);
document.body.appendChild(gridContainer);
gridContainer.appendChild(gridDiv);
