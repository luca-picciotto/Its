const populationElements = document.querySelectorAll(".coloum.right");

populationElements.forEach(element => {
    const populationText = element.textContent.trim();
    const number = parseInt(populationText.replace(/,/g, ''), 10);
    if (number > 5000000) {
        element.style.color = "red"; // Cambia il colore a rosso, puoi scegliere il colore che preferisci
    }
});


// Seleziona tutti gli elementi con la classe .coloum.right.
// Usa un ciclo forEach per iterare su tutti gli elementi selezionati.
// Rimuove le virgole dal testo del numero di popolazione e converte il testo in un numero intero.
// Se il numero è maggiore di 5,000,000, cambia il colore del testo.