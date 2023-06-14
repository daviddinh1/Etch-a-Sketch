const container = document.querySelector('.container');


//rows
for(let i = 0; i<256; i++){
 const square = document.createElement('div');
 square.className = 'squares';
 container.appendChild(square);
}




