/**
 * @file: main.js
 * @author: Daniele Margiacchi
 * Purpose of file
 *
 * Detailed explanation of what the file does
 * on multiple lines
 */



let trackBTN = document.getElementById('track');
let visuaBTN = document.getElementById('percorso');
let stopBTN = document.getElementById('stop');
let p = document.querySelector('p');
let spostamenti = document.querySelector('div#spostamenti');
let message = document.createElement('p');


function trackPosition() {
    if (navigator.geolocation) {
        try {
            // even if geolocation is supported, it won't work if the user doesn't give permission
        navigator.geolocation.getCurrentPosition(position => {
            let p = document.createElement('p');
            p.textContent += `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
            spostamenti.appendChild(p);
            });
        } catch (error) {
            let p = document.createElement('p');
            p.textContent = `${error.message}`;
            spostamenti.appendChild(p);
        }
       } else {
        console.log('Geolocation is not supported by this browser.');
       }
}


trackBTN.addEventListener('click' ,() => {
    let tracking = setInterval(trackPosition, 2000);
    message.textContent = 'hai avviato il tracking';
    document.body.appendChild(message);

    stopBTN.classList.remove('hidden');
    trackBTN.classList.add('hidden');

    stopBTN.addEventListener('click', ()=>{
        message.textContent = 'hai stoppato il tracking';
        trackBTN.classList.remove('hidden');
        stopBTN.classList.add('hidden');
        clearInterval(tracking);
    })
    
})







visuaBTN.addEventListener('click', ()=>{
    spostamenti.classList.toggle('hidden');
})