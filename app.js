function changeColor(style){
    colorChoice = style;
    console.log(colorChoice);
};

let gridWidth = 4;

function setGrid(){
    let gridHeight = gridWidth;
    let totalDivs = gridWidth * gridHeight;
    let autoWidth = (100/gridWidth);
    let autoWidthPercentage = autoWidth+'%'

    colorChoice = 'black';

    let container = document.querySelector('.container');

    for (i = 1 ; i <= totalDivs ; i++ ){
        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.style.flexBasis= autoWidthPercentage;
        newDiv.style.height=autoWidthPercentage;
        newDiv.textContent='0';
        container.appendChild(newDiv);
    };

    //seleting divs
let selectDiv = document.querySelectorAll('.box');
selectDiv.forEach( item => {
    item.addEventListener('mouseover', e=>{
        item.style.backgroundColor=colorChoice;
        // item.classList.add('newStyle')
    })
})
}

setGrid();


let btn10 = document.getElementById('btn10');
btn10.addEventListener('click', e =>{
    clearDivs();
    gridWidth = 10;
    setGrid();
    console.log(e);
})

let btn25 = document.getElementById('btn25');
btn25.addEventListener('click', ()=>{
    clearDivs();
    gridWidth = 25;
    setGrid();
})

let btn50 = document.getElementById('btn50');
btn50.addEventListener('click', ()=>{
    clearDivs();
    gridWidth = 50;
    setGrid();
})


let btnInput = document.getElementById('btnInput');
btnInput.addEventListener('click', e =>{
    gridWidth = prompt("How many pixels do you want per side?");
    if(gridWidth <= 60) {
    clearDivs();
    setGrid();
    console.log(e)
    } else {
        alert("please choose a number 60 or less")
    }
})

let clearBtn = document.getElementById('clrbtn');
clearBtn.addEventListener('click', () => {
    
    let boxes = document.querySelectorAll('.box');   
    boxes.forEach(box=>{
        box.style.backgroundColor='#F5F5DC';
        // box.classList.remove('newStyle');
    })
    console.log('board cleared');
});

function clearDivs(){
    let selectDiv = document.querySelectorAll('.box');   
    selectDiv.forEach(item=>{
        item.remove();
    })
}