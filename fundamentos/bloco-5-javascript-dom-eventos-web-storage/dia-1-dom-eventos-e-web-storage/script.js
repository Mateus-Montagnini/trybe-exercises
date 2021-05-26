function changeText() {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = 'Estar formado em Engenharia e trabalhando com programacao'
}
changeText();

function changeSquareColor() {
  let square = document.getElementsByClassName('main-content')[0];
  square.style.backgroundColor = 'rgb(76, 164, 109)';
}
changeSquareColor();

function changeRedSquare() {
  let redSquare = document.getElementsByClassName('center-content')[0];
  redSquare.style.backgroundColor = 'white';
}
changeRedSquare();