const askingButton = document.createElement('button');
askingButton.className = 'askingButton';
askingButton.innerText = 'Select a number';
askingButton.addEventListener('click', createGrid);
document.body.appendChild(askingButton);

const h1 = document.createElement('h1');
const gridContainer = document.createElement('div');
h1.className = 'h1';
h1.innerText = 'Etch-a-Sketch';
gridContainer.className = 'gridContainer';
document.body.insertBefore(h1, askingButton);
document.body.appendChild(gridContainer);

function addDivs (size) {
    const totalPixels = (size * size); 
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < totalPixels; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.addEventListener('mouseover', function () {
            gridDiv.style.backgroundColor = generateColor();  
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

function generateColor () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color; 
}