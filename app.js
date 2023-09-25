let gridWidth = 2;
let gridHeight = gridWidth;
let totalDivs = gridWidth * gridHeight;
console.log(totalDivs);
let autoWidth = (100/gridWidth);
let autoWidthPercentage = autoWidth+'%'

console.log(autoWidthPercentage);

let container = document.querySelector('.container');

for (i = 1 ; i <= totalDivs ; i++ ){
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.style.flexBasis= autoWidthPercentage;
    newDiv.style.height=autoWidthPercentage;
    newDiv.textContent='0';
    container.appendChild(newDiv);
}

//seleting divs
let coloredDiv = document.querySelectorAll('.box');
coloredDiv.forEach( item => {
    item.addEventListener('mouseover', e=>{
        item.classList.add('newStyle')
    })
})