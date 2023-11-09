let container = document.querySelector(".container");


function createBoard(){
  for(let i = 0 ; i < 256 ; i++){
    const block = document.createElement('div'); //used to create block for grid 
    block.classList.add("square");
    block.addEventListener("mouseover", ()=> {
      block.classList.add("hover");
    });
    block.addEventListener("mousedown",()=>{
      block.classList.add("hover");
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



