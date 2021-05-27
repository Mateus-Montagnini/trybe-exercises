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

function correctTitle () {
  let title = document.getElementsByTagName('h1')[0];
  title.innerHTML = 'Exercício 5.1 - Javascript';
}
correctTitle();

function paragraphUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphUpperCase();

function showAllParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
      for (let index = 0; index < paragraphs.length; index += 1) {
        console.log(paragraphs[index].innerHTML);
      }
    }
    showParagraphs();
