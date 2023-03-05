const askingButton = document.createElement('button');
askingButton.innerText = 'Select a number';
askingButton.addEventListener('click', createGrid);
document.body.appendChild(askingButton);

function addDivs (size) {
    const h1 = document.createElement('h1');
    const gridContainer = document.createElement('div');
    const totalPixels = (size * size);
    h1.className = 'h1';
    h1.innerText = 'Etch-a-Sketch';
    gridContainer.className = 'gridContainer';
    document.body.appendChild(h1);
    document.body.appendChild(gridContainer);
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < totalPixels; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.addEventListener('mouseover', function () {
            gridDiv.style.backgroundColor = 'black';  
        });
        gridContainer.appendChild(gridDiv);
    }
}

function createGrid () {
   let size = Number(prompt('Select a number between 2 and 100', '2-100'));
    if (size >= 2 && size <= 100) {
        addDivs(size);
    } else {
        alert('You need to select a number between 2 and 100, try again');
        createGrid();
    }
}





