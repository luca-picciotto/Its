// Adding Event Listeners


function onClick(event){
    console.log('Window clicked');
}
window.addEventListener('click', onClick);

window.addEventListener('click', function(event){
    console.log('Windows Clicked');
});

let counterButton = document.getElementById('counter');
let onButtonClick = function (event){
    counterButton.textContent = parseInt(counterButton.textContent) + 1;
    console.log('clicked element: ', event.target);
};
counterButton.addEventListener('click', onButtonClick, false);



// Processing input


let button  = document.getElementById('button');
let inputField = document.getElementById('myname');
// event handler
let onEvent  =function (event){
    console.log('Hi, ' + inputField.value);
    console.log('event type: ', event.type);
};
// event listeners
button.addEventListener('click', onEvent);
inputField.addEventListener('blur', onEvent);



// Event type


window resize handler
let onWindowResize= function (event) {
 console.log('Window resized');
};
window.addEventListener('resize', onWindowResize);
// document scroll handler
let onDocumentScroll= function (event) {
 console.log('Document scrolled');
};
document.addEventListener('scroll', onDocumentScroll);
// mousemove handling on 'myElement'
let element= document.getElementById('myElement');
let onMouseMove= function (event) {
 console.log('Mouse moved over the element');
};
element.addEventListener('mousemove', onMouseMove);



// Event target


document.getElementById('list').addEventListener('click', event => {
    const target = event.target;
    // if clicked element is a button
    if (target.tagName === 'BUTTON') {
    const parent = target.parentElement;
    parent.classList.toggle('highlighted'); // mark as highlighted
    }
});