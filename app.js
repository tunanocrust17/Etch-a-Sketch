let gridWidth = 10;
let gridHeight = gridWidth;
let totalDivs = gridWidth * gridHeight;
let autoWidth = (100/gridWidth);
let autoWidthPercentage = autoWidth+'%'

let btn = document.querySelector('.btn');
btn.addEventListener('click', e =>{
    buttonClick();
    handleClick();
})

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
let coloredDiv = document.querySelectorAll('.box');
coloredDiv.forEach( item => {
    item.addEventListener('mouseover', e=>{
        item.classList.add('newStyle')
    })
})


let clearButton = document.querySelector('.clrbtn');
clearButton.addEventListener('click', ()=>{
    coloredDiv.forEach(item =>{
        item.remove();
    })
    console.log("board cleared");
});