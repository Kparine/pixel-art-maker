function makeGrid() {

let grid = document.querySelector('#grid')

    for (let i = 0; i < 100; i++) {
        let cell = document.createElement('div')
        grid.appendChild(cell)
    
    }
}

function addClickEvents() {
    let cells = document.getElementsByClassName('cell')
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click',  function(event) {
        let clickedCell = event.target
        clickedCell.style.backgroundColor = selectedColor
      })
    }
  }
  



// 1. Create a small, 2x2 grid canvas made up of white, square `div` tags with a border.
// 1. Add an event listener to each `div` so when clicked the background turns red.
// 1. Create a small palette of two colors (e.g. red and blue) below the canvas using more `div` tags.
// 1. Add an event listener to these `div` tags so when clicked the brush color is saved.
// 1. Expand the dimensions of the pixel canvas.
// 1. Expand the palette with more colors. (i.e. red, orange, yellow, green, blue, purple, brown, gray, black, white, etc.)
// 1. Expand the palette with a brush color indicator.
// 1. Improve the look and feel of the canvas and color palette. Be careful not to break your program's behavior!