/**
 * L'endpoint da cui viene recuperato il file JSON contenente le informazioni sugli stati.
 * @constant {string}
 */
const endpoint = 'http://localhost:8081/Its/html/picciotto-units-12-14/12-flexbox/03-columns-and-nations/json/nations.json';

/**
 * Esegue una richiesta Fetch all'endpoint per ottenere i dati sugli stati,
 * quindi li visualizza dinamicamente nel DOM.
 * Se la risposta è valida, converte il contenuto in formato JSON e lo elabora,
 * altrimenti viene generato un errore di rete.
 */
fetch(endpoint)
    .then(response => {
        /**
         * Controlla se la risposta è valida.
         * @param {Response} response - L'oggetto Response restituito dalla fetch.
         * @returns {Promise<Object>} - Un oggetto JSON se la risposta è OK.
         * @throws {Error} - Se la risposta non è valida.
         */
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => {
        /**
         * Itera sugli stati recuperati dal file JSON e crea dinamicamente gli elementi HTML
         * per visualizzare nome, popolazione e bandiera di ciascuno stato.
         * @param {Object} data - Il JSON contenente i dati degli stati.
         * @param {Array<Object>} data.states - L'array di stati.
         * @param {string} data.states[].name - Il nome dello stato.
         * @param {string} data.states[].population - La popolazione dello stato.
         * @param {string} data.states[].flag - L'URL della bandiera dello stato.
         */
        console.log(data.states);
        data.states.forEach(element => {
            let bodyContent = document.body;

            // Creazione dei vari elementi
            let nation = document.createElement('div');
            let nationName = document.createElement('div');
            let nationPop = document.createElement('div');
            let flag = document.createElement('img');

            // Assegnazione dei dati agli elementi
            flag.src = element.flag;
            nationName.textContent = element.name;
            nationPop.textContent = element.population;

            // Assegnazione delle classi CSS
            nation.className = 'states';
            nationName.className = 'name';
            nationPop.className = 'population';
            flag.className = 'flag';

            // Aggiunta degli elementi al contenitore principale
            nation.appendChild(nationName);
            nation.appendChild(nationPop);
            nation.appendChild(flag);

            // Aggiunta del contenitore al body del documento
            bodyContent.appendChild(nation);
        });
    })
    .catch(error => {
        /**
         * Gestione degli errori, mostra un messaggio nella console se si verifica un errore
         * durante la richiesta o il recupero dei dati.
         * @param {Error} error - L'errore generato durante il processo di fetch.
         */
        console.error('Error fetching data: ', error);
    });
