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


let btn8 = document.getElementById('btn8');
btn8.addEventListener('click', e =>{
    clearDivs();
    gridWidth = 8;
    setGrid();
    console.log(e)
})

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


let clearBtn = document.getElementById('clrbtn');
clearBtn.addEventListener('click', () => {
    
    let boxes = document.querySelectorAll('.box');   
    boxes.forEach(box=>{
        box.style.backgroundColor='aquamarine';
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