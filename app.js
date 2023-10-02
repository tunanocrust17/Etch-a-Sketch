let gridWidth = 4;

function setGrid(){
    let gridHeight = gridWidth;
    let totalDivs = gridWidth * gridHeight;
    let autoWidth = (100/gridWidth);
    let autoWidthPercentage = autoWidth+'%'

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
        item.classList.add('newStyle')
    })
})
}

setGrid();


let btn = document.querySelector('.btn');
btn.addEventListener('click', () =>{
    gridWidth = 8;
    setGrid();
    console.log('test')
})


let clearBtn = document.querySelector('.clrbtn');
clearBtn.addEventListener('click', () => {
    let selectDiv = document.querySelectorAll('.box');   
    selectDiv.forEach(item=>{
        item.remove();
    })
    console.log('board cleared');
});