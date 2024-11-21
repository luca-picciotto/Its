
let trackBTN = document.getElementById('track');
let visuaBTN = document.getElementById('percorso');
let stopBTN = document.getElementById('stop');
let p = document.querySelector('p');
let spostamenti = document.querySelector('div#spostamenti');
let message = document.createElement('p');


const positions  = []; 

function trackPosition(){
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(position => {
            let p = document.createElement('p');
            positions.push({latitudine: `${position.coords.latitude}`, longitudine: `${position.coords.longitude}`})
            console.log(positions);
            
        })
    } else {
    console.log('Geolocation is not supported by this browser.');
   }
}
trackBTN.addEventListener('click' ,() => {
    setInterval(trackPosition, 2000);
})