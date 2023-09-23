

//seleting divs
let coloredDiv = document.querySelectorAll('.box');
coloredDiv.forEach( item => {
    item.addEventListener('mouseover', e=>{
        item.classList.add('newStyle')
    })
})