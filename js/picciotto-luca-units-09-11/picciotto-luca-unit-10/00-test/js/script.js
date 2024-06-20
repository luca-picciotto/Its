// // Adding Event Listeners


// function onClick(event){
//     console.log('Window clicked');
// }
// window.addEventListener('click', onClick);

// window.addEventListener('click', function(event){
//     console.log('Windows Clicked');
// });

// let counterButton = document.getElementById('counter');
// let onButtonClick = function (event){
//     counterButton.textContent = parseInt(counterButton.textContent) + 1;
//     console.log('clicked element: ', event.target);
// };
// counterButton.addEventListener('click', onButtonClick, false);



// // Processing input


// let button  = document.getElementById('button');
// let inputField = document.getElementById('myname');
// // event handler
// let onEvent  =function (event){
//     console.log('Hi, ' + inputField.value);
//     console.log('event type: ', event.type);
// };
// // event listeners
// button.addEventListener('click', onEvent);
// inputField.addEventListener('blur', onEvent);



// // Event type


// window resize handler
// let onWindowResize= function (event) {
//  console.log('Window resized');
// };
// window.addEventListener('resize', onWindowResize);
// // document scroll handler
// let onDocumentScroll= function (event) {
//  console.log('Document scrolled');
// };
// document.addEventListener('scroll', onDocumentScroll);
// // mousemove handling on 'myElement'
// let element= document.getElementById('myElement');
// let onMouseMove= function (event) {
//  console.log('Mouse moved over the element');
// };
// element.addEventListener('mousemove', onMouseMove);



// // Event target


// document.getElementById('list').addEventListener('click', event => {
//     const target = event.target;
//     // if clicked element is a button
//     if (target.tagName === 'BUTTON') {
//     const parent = target.parentElement;
//     parent.classList.toggle('highlighted'); // mark as highlighted
//     }
// });

// let button  = document.getElementById('buttonk-01');
// document.addEventListener('mousemove', event => {
//     console.log('Mouse coordinates:', {
//     x: event.clientX,
//     y: event.clientY
//     });
//    });
//    // log key press
//    document.addEventListener('keydown', event => console.log('Key pressed:', event.key));
//    // log event timestamp
//    document.addEventListener('click', event => console.log('Event timestamp:', event.timeStamp));
   
// let container = document.getElementById('container');
// let special = document.getElementById('special');
// special.addEventListener('click', function(event) {
//  console.log('Special', getLabel(event.eventPhase));
// });
// // capturing
// container.addEventListener('click', function(event) {
//     console.log('Container', getLabel(event.eventPhase));
//    },true);
//    // bubbling
//    container.addEventListener('click', function(event) {
//     console.log('Container', getLabel(event.eventPhase));
//    });
//    // get phase label
//    function getLabel(phase) {
//     return phase === 3 ? 'bubbling' : phase === 2 ? 'on target' : 'capturing';
//    }
// window.setTimeout(callbackFunction, delayMilliseconds);
// window.setInterval(callbackFunction, delayMilliseconds);
// just an example
// let makeImageBigger = function () {
//  let img = document.getElementsByTagName('img')[0];
//  img.setAttribute('width', img.width + 10);
// };
// window.setInterval(makeImageBigger, 1000);
// // just an example
// let fadeAway = function () {
//     img.style.opacity = img.style.opacity - 0.1;
//    };
//    let img = document.getElementsByTagName('img')[0];
//    img.style.opacity = 1.0;
//    window.setInterval(fadeAway, 1000);

let watchKittyFall = function () {
    let oldTop = parseInt(img.style.top);
    let newTop = oldTop + 10;
    img.style.top = newTop + 'px';
   };
   let img = document.getElementsByTagName('img')[0];
   img.style.position = 'absolute';
   img.style.top = '0px';
   window.setInterval(watchKittyFall, 100);
   