const h1 = document.createElement('h1');
const gridContainer = document.createElement('div');
const buttonContainer = document.createElement('div');
h1.className = 'h1';
h1.innerText = 'Etch-a-Sketch';
gridContainer.className = 'gridContainer';
buttonContainer.className = 'buttonContainer';
document.body.appendChild(h1);
document.body.appendChild(gridContainer);
document.body.appendChild(buttonContainer);

const askingButton = document.createElement('button');
askingButton.className = 'askingButton';
askingButton.innerText = 'GRID SIZE';
askingButton.addEventListener('click', createGrid);
buttonContainer.appendChild(askingButton);

const colorButton = document.createElement ('button');
colorButton.className = 'colorButton';
colorButton.innerText = 'RANDOM COLOR';
colorButton.addEventListener('click', generateColor);
buttonContainer.appendChild(colorButton);

const blackButton = document.createElement ('button');
blackButton.className = 'blackButton';
blackButton.innerText = 'BLACK';
blackButton.addEventListener('click', generateColor);
buttonContainer.appendChild(blackButton);

function addDivs (size) {
    const totalPixels = (size * size); 
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < totalPixels; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.addEventListener('mouseover', function () {
            if ()
            gridDiv.style.backgroundColor = generateColor();  
        });
        gridContainer.appendChild(gridDiv);
    }
}

function createGrid () {
   let size = Number(prompt('Select a number between 2 and 100', 'e.g: 16'));
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
    let alpha = Math.random();
    let color = `rgb(${red}, ${green}, ${blue}, ${alpha})`;
    return color;
}

