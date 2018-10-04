
function canvas() {
    let grid = document.querySelector('#grid')

    for (let i = 0; i < 2046; i++) {     
        let cell = document.createElement('div')
        cell.classList.add('pixel')
        grid.appendChild(cell)
    }
}
canvas()

function addClickEvents() {
    let cells = document.getElementsByClassName('pixel')
    
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click',  function(event) {
        let colorSelector = document.querySelector('#colorSelector')
        let clickedCell = event.target
        clickedCell.style.backgroundColor = colorSelector.value
      })
    }
}
addClickEvents()