let color = 'rainbow';

function createBoard(size){
 let board = document.querySelector('.board');
 let squares = board.querySelectorAll('div');

 squares.forEach((div) => div.remove());

 board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
 board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;

  for(let i = 0 ; i <amount; i++){
   let square = document.createElement('div');
   square.addEventListener('mouseover',changeColor);
   square.style.backgroundColor = 'white';
   board.insertAdjacentElement('beforeend',square);
   
 }
}
 
createBoard(16);

function changeSize(input){
 createBoard(input);
}

function colorChoice(choice){
 color = choice;
}

function changeColor(){
 if(color === 'rainbow'){
  this.style.backgroundColor = `hsl(${Math.random() *360},100%,50%)`; //later on add a color wheel
 }
 else if (color=== 'black'){
  this.style.backgroundColor = 'black';
 }
 else{
  this.style.backgroundColor = 'white';
 }
}









