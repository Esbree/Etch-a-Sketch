function fillBoard(size) {
  let board = document.querySelector('.board');
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (i = 0; i < size * size; i++) {
    let pixel = document.createElement('div');
    pixel.style.backgroundColor = 'grey';
    board.insertAdjacentElement('beforeend', pixel);
  }
}

fillBoard(32);
