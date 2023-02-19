const container = document.querySelector('.container');

// variable Anzahl an Divs zu container hinzufugen
function addDivs(num) {
  for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
  }
}

addDivs(256);

// aendert Hintergrundfarbe, sobald Mousehover
function changeBackgroundColor() {
  let divs = document.querySelectorAll('.container > div');

  divs.forEach(div => {
    div.addEventListener('mouseover', function() {
      div.style.backgroundColor='red';
    })
  })
}

changeBackgroundColor();
