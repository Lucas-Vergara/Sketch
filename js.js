let numOfSquares = 16;
let arrayDiv = []; 
document.documentElement.style.setProperty('--size', 16);
let hover = 0;


function eraseGrid(){
    let squares = document.getElementsByClassName('square');
    while (squares.length>0){
        squares[0].parentNode.removeChild(squares[0]);
    }
}

function changeGridGrey(){
    eraseGrid();
    numOfSquares = prompt("number of squares");
    for (let i=0; i<numOfSquares*numOfSquares; i++){
        arrayDiv[i] = document.createElement('div');
        arrayDiv[i].classList.add('square');
        arrayDiv[i].addEventListener('mouseenter', changeGrey);
        document.getElementById('grid').appendChild(arrayDiv[i]);
    }
    document.documentElement.style.setProperty('--size', numOfSquares)
}

for (let i=0; i<numOfSquares*numOfSquares; i++){
    arrayDiv[i] = document.createElement('div');
    arrayDiv[i].classList.add('square');
    arrayDiv[i].addEventListener('mouseenter', changeGrey);
    document.getElementById('grid').appendChild(arrayDiv[i]);
}

function changeGrey(){
   this.style.backgroundColor = "grey";
   
    let a = window.getComputedStyle(this);
    let hover = a.getPropertyValue('--hover');
    passes = parseInt(hover) + 1;
    this.style.setProperty('--hover', passes);
    let brightness = 0;
  
    if (hover>0){
       let suma = (100 - hover*10);
       brightness = suma +"%";
       this.style.filter = `brightness(${brightness})`;
    }

  
}

function random(min, max) {
    return Math.floor(Math.random()*(max-min))+min
}

function randomColor(){
    return 'rgb('+random(0,255)+', '+random(0,255)+', '+random(0,255)+')';
}
function changeColor(){
    let a = window.getComputedStyle(this);
    let hover = a.getPropertyValue('--hover');
    passes = parseInt(hover) + 1;
    this.style.setProperty('--hover', passes);
    let brightness = 0;
    if (parseInt(hover) === 0){
        this.style.backgroundColor = randomColor();
    }
    if (hover>0){
        let suma = (100 - hover*10);
        brightness = suma +"%";
        this.style.filter = `brightness(${brightness})`;
     }    
}
function changeGridColor() {
    eraseGrid();
    numOfSquares = prompt("number of squares");
    for (let i=0; i<numOfSquares*numOfSquares; i++){
        arrayDiv[i] = document.createElement('div');
        arrayDiv[i].classList.add('square');
        arrayDiv[i].addEventListener('mouseenter', changeColor);
        document.getElementById('grid').appendChild(arrayDiv[i]);
    }
    document.documentElement.style.setProperty('--size', numOfSquares)
}

document.getElementById('greyButton').addEventListener('click', changeGridGrey);
document.getElementById('colorButton').addEventListener('click', changeGridColor);
