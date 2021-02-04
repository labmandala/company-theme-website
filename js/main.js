let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here

// changes the text in the view element
function textChange(){
    view.innerHTML = 'Hello, World';
}
  
// change the text of the view element variable back to 
// 'View', the original text for the view element
function textReturn(){
  view.innerHTML = 'View';
}
  
// assign textChange as an event handler function to a 
// click event fired on the view variable
view.addEventListener('click', textChange);

// assign textReturn as an event handler function to a 
// click event fired on the close variable
close.addEventListener('click', textReturn);
