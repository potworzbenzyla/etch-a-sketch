let sideLength = 32;
let color = 'black';
let isMobileMenuOpen;
let isColorDisplayed;
let isSizeDisplayed;

window.onload = () => {
    colorOptionsProperties();
    sizeInputHandler();
    setEventListeners()
}

function setEventListeners(){
    document.querySelector('#clearScreen').addEventListener('click', clearScreen);
    document.querySelector('#changeSize').addEventListener('click', changeSizeDisplay);
    document.querySelector('#changeColor').addEventListener('click', changeColorDisplay);
    document.querySelector('#menuTrigger').addEventListener('click', menuTrigger);
    document.querySelector('#sizeInput').addEventListener('change', sizeInputHandler);
}

function menuTrigger(){
    if(isMobileMenuOpen == true){
        document.querySelector("#menu").style.display = "none";
        isMobileMenuOpen = false;
    }
    else{
        document.querySelector("#menu").style.display = "block";
        isMobileMenuOpen = true;
    }
}

function changeColorDisplay(){
    if(isSizeDisplayed == true){
        changeSizeDisplay();
    }
    if(isColorDisplayed == true){
        document.querySelector('#submenuColor').style.display = 'none';
        isColorDisplayed = false;
    }
    else{
        document.querySelector('#submenuColor').style.display = 'flex';
        isColorDisplayed = true;
    }
}

function changeSizeDisplay(){
    if(isColorDisplayed==true){
        changeColorDisplay();
    }
    if(isSizeDisplayed == true){
        document.querySelector('#submenuSize').style.display = 'none';
        isSizeDisplayed = false;
    }
    else{
        document.querySelector('#submenuSize').style.display = 'flex';
        isSizeDisplayed = true;
    }
}

function sizeInputHandler(){
    if(document.querySelector('#sizeInput').value > 64){
        window.alert('Try with less than 64.')
    }
    else{
        sideLength = document.querySelector('#sizeInput').value;
    }
    setGrid();
}

function colorOptionsProperties(){
    let options = document.querySelectorAll('.colorOption');
    for(let i = 0; i < options.length; i++){
        options[i].style.backgroundColor = options[i].value;
        options[i].addEventListener('click', function() {color = this.value;})
    }
}

function clearScreen(){
    let boxes = document.querySelectorAll('.box');
    for(let i=0 ; i < boxes.length; i++){
        boxes[i].style.backgroundColor="rgb(75,75,75)";
    }
}

function setGrid() {
    let gameScreen = document.querySelector('#gameScreen');
    gameScreen.innerHTML = '';
    let totalBoxes = sideLength * sideLength;
    for (let i = 0; i < totalBoxes; i++) {
        let box = document.createElement('div');
        box.className = 'box';
        box.addEventListener('mouseover', function (){this.style.backgroundColor = color;})
        gameScreen.appendChild(box);
    }
    gameScreen.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;
    gameScreen.style.gridTemplateRows = `repeat(${sideLength}, 1fr)`;
}