let items = document.querySelectorAll('div.container div.item');
idCollector = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
function changeId(){
    for (let index = 0; index < items.length; index++) {
    
        
        // Incrementa l'ID ciclicamente
        idCollector[index] = idCollector[index] + 1;
        
        // Se l'ID è maggiore di 9, torna a 1
        if (idCollector[index] > 9) {
            idCollector[index] = 1;
        }

        items[index].id = 'id-' + idCollector[index];

    }
}

let intervalId;

// Funzione per avviare l'intervallo
function startInterval() {
  intervalId = setInterval(changeId, 2000);
  console.log('Intervallo avviato');
}

// Funzione per fermare temporaneamente l'intervallo
function stopInterval() {
  clearInterval(intervalId);
  console.log('Intervallo fermato');
}

// Aggiungi eventi per mouseover e mouseout sul container usando classi
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container'); // Seleziona il contenitore
  
  // Blocca l'intervallo quando il mouse passa sopra il container
  container.addEventListener('mouseover', function () {
    console.log('Mouse sopra il container - fermo l\'intervallo');
    stopInterval();
  });

  // Riprende l'intervallo quando il mouse esce dal container
  container.addEventListener('mouseout', function () {
    console.log('Mouse fuori dal container - riavvio l\'intervallo');
    startInterval();
  });

  // Avvia l'intervallo inizialmente
  startInterval();
});

   