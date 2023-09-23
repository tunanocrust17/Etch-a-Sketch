let gridWidth = 16;
let gridHeight = gridWidth;
let totalDivs = gridWidth * gridHeight;
console.log(totalDivs);

let container = document.querySelector('.container');

for (i = 0 ; i <= totalDivs ; i++ ){
    container.createNewElement('div');
    container.appendChild('div');

}

//seleting divs
let coloredDiv = document.querySelectorAll('.box');
coloredDiv.forEach( item => {
    item.addEventListener('mouseover', e=>{
        item.classList.add('newStyle')
    })
})