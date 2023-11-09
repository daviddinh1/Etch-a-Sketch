let container = document.querySelector(".container");

let isDraw = false;


function createBoard(){
  for(let i = 0 ; i < 256 ; i++){
    const block = document.createElement('div'); //used to create block for grid 
    block.classList.add("square");
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

function changeColor(e){
  e.classList.add("hover");
}

createBoard(container);




/*
    block.addEventListener("mousedown", () => {
      block.addEventListener("mouseover",()=>{
        block.classList.add("hover")
        console.log("working");
      });
    });
*/



