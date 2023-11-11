let container = document.querySelector(".container");

let isDraw = false;

const btn = document.querySelector("#btn-input")

function createBoard(n){
  n = n * n;
  for(let i = 0 ; i < n ; i++){
    const block = document.createElement('div'); //used to create block for grid 
    block.classList.add("square"); //maybe its the class or the container?
    block.addEventListener("mousedown", () => {
      isDraw = true;
    });
    block.addEventListener("mouseover",() =>{
      if(isDraw){
        block.classList.add("hover");
      }
    });
    block.addEventListener("mouseup",() =>{
      if(isDraw){
        isDraw = false;
      }
    });
    container.appendChild(block);
  }
  
}


console.log(container.childNodes);
createBoard(16);
let size = 0;
btn.addEventListener('click', ()=>{
  size = prompt("Please enter a size: "); //get rid of old board to add a new board
  if (size < 100){
    while(container.firstChild){ //until theres no more children remove the last one 
      container.removeChild(container.lastChild);
    }
    createBoard(size);
  }
});




