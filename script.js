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
colorButton.addEventListener('click', enableColorMode);
buttonContainer.appendChild(colorButton);

const blackButton = document.createElement ('button');
blackButton.className = 'blackButton';
blackButton.innerText = 'BLACK';
blackButton.addEventListener('click', enableBlackMode);
buttonContainer.appendChild(blackButton);

const eraseButton = document.createElement ('button');
eraseButton.className = 'eraseButton';
eraseButton.innerText = 'ERASE';
eraseButton.addEventListener('click', enableEraseMode);
buttonContainer.appendChild(eraseButton);

let colorMode = false; //All three modes are turn-off by default, only by clicking one of the buttons it will call the functions to turn them on.
let blackMode = false;
let eraseMode = false;

function addDivs (size) {
    const totalPixels = (size * size); //The total amount of pixels is the result of multiply the number by itself.
    gridContainer.innerHTML = ''; //Everytime addDivs is called, the gridContainer will delete all the divs inside it.
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < totalPixels; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.dataset.opacity = 0; //A data attribute is added to assign the initial opacity of the divs.
        gridDiv.addEventListener('mouseover', function () {
            if (colorMode) {
                gridDiv.style.backgroundColor = generateColor();
            } else if (blackMode) {
                let currentOpacity = parseFloat(gridDiv.dataset.opacity); //The parseFloat method will turn the string-number of the data attribute into a real number.
                if (currentOpacity < 1) { //If the currentOpacity is less than 1, a 0.1 will be sum and added to the total.
                    currentOpacity += 0.1;
                    gridDiv.dataset.opacity = currentOpacity; //The actual opacity is assgined directly to the data attribute.
                    gridDiv.style.backgroundColor = `rgb(0, 0, 0, ${currentOpacity})`; //And the variable is going inside the rgb color format.
                }
            } else if (eraseMode) {
                gridDiv.style.backgroundColor = 'white';
            }
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

function enableColorMode () { //The reason to declare the other modes is to be sure that they are turn off, specially when you switch modes.
    colorMode = true;
    blackMode = false;
    eraseMode = false;
}

function enableBlackMode () {
    colorMode = false;
    blackMode = true;
    eraseMode = false;
}

function enableEraseMode () {
    colorMode = false;
    blackMode = false;
    eraseMode = true;
}