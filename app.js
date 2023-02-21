let board = document.querySelector('.board');
let setSizeHeading = document.querySelector('h2');

function changeColor() {
  let pixels = document.querySelectorAll('.board > div');
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function() {
      pixel.style.backgroundColor = 'black';
    })
  })
}

function clearBoard() {
  board.innerHTML = '';
}

function fillBoard() {
  clearBoard();
  let inputField = document.querySelector('input').value;
  let size = inputField;

  if (size > 100) {
    setSizeHeading.textContent = '!!!choose a lower size!!!';
  } else {
    setSizeHeading.textContent = 'set size below';
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < size * size; i++) {
      let pixel = document.createElement('div');
      pixel.style.backgroundColor = 'lightgrey';
      board.insertAdjacentElement('beforeend', pixel);
    }

    changeColor();
  }
}

