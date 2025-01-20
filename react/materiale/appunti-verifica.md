## ARGOMENTI
- **MPA vs SPA**
  - **MPA (Multi-Page Application)**: Un'applicazione web composta da più pagine. Ogni interazione con l'app richiede un caricamento completo della pagina. Caratteristiche: SEO migliore, caricamento più lento, più facile da gestire per contenuti statici.
  - **SPA (Single-Page Application)**: Un'applicazione web che carica una sola pagina e aggiorna dinamicamente il contenuto. Caratteristiche: esperienza utente fluida, caricamento iniziale più lento, utilizzo intensivo di JavaScript. Esempi: Gmail, Google Maps.

- **Librerie vs Framework**
  - **Librerie**: Collezioni di funzioni e metodi che possono essere utilizzati per risolvere problemi specifici. L'utente controlla il flusso dell'applicazione. Esempio: jQuery.
  - **Framework**: Strutture più complete che forniscono un'architettura per costruire applicazioni. Impongono un certo flusso di lavoro e struttura. Esempio: React, Angular.

- **Concetti base di ES6 (arrow functions e destrutturazioni)**
  - **Arrow Functions**: Sintassi concisa per scrivere funzioni. Non hanno il proprio `this`, utile per mantenere il contesto. Esempio: `const add = (a, b) => a + b;`
  - **Destrutturazione**: Permette di estrarre valori da array o oggetti in modo più semplice e leggibile. Utilizza una sintassi simile agli oggetti per assegnare variabili. Esempio:
    ```javascript
    const person = { name: "Mario", age: 30 };
    const { name, age } = person; // Destrutturazione dell'oggetto
    console.log(name); // "Mario"
    console.log(age); // 30

    const numbers = [1, 2, 3];
    const [first, second] = numbers; // Destrutturazione dell'array
    console.log(first); // 1
    console.log(second); // 2
    ```

- **Promise (then - async/await)**
  - **Promise**: Oggetto che rappresenta il completamento (o il fallimento) di un'operazione asincrona. Utilizza i metodi `.then()` e `.catch()` per gestire i risultati.
  - **Async/Await**: Sintassi per lavorare con le Promise in modo più leggibile. `async` definisce una funzione asincrona, `await` attende il completamento di una Promise. Esempio:
    ```javascript
    async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    ```
  - **Differenza tra Promise e Callback**:
    - **Callback**: Funzione passata come argomento a un'altra funzione, che viene eseguita al termine di un'operazione. Può portare a "callback hell" se ci sono molte operazioni annidate, rendendo il codice difficile da leggere e mantenere.
      ```javascript
      function fetchData(callback) {
          setTimeout(() => {
              const data = { name: "Mario" };
              callback(data);
          }, 1000);
      }
      fetchData((data) => console.log(data));
      ```
    - **Promise**: Rappresenta un valore che potrebbe non essere disponibile ora, ma lo sarà in futuro. Permette di gestire le operazioni asincrone in modo più chiaro e leggibile, evitando il problema delle callback annidate.
      ```javascript
      function fetchData() {
          return new Promise((resolve) => {
              setTimeout(() => {
                  const data = { name: "Mario" };
                  resolve(data);
              }, 1000);
          });
      }
      fetchData().then(data => console.log(data));
      ```

- **React DOM (rendering app react, virtual DOM)**
  - **React DOM**: Libreria che permette di interagire con il DOM del browser. Utilizza il Virtual DOM per ottimizzare il rendering, aggiornando solo le parti necessarie della UI.
  - **DOM (Document Object Model)**: Rappresentazione strutturata di un documento HTML o XML. Consente di accedere e manipolare il contenuto, la struttura e lo stile di un documento. Ogni elemento del documento è rappresentato come un nodo nel DOM, permettendo agli sviluppatori di modificare dinamicamente il contenuto della pagina web.
  - **Virtual DOM**: Rappresentazione in memoria del DOM reale. React confronta il Virtual DOM con il DOM reale per determinare le modifiche necessarie.

- **Ciclo di vita di React (mount, update, unmount)**
  - **Mount**: Fase in cui un componente viene creato e inserito nel DOM. Metodi: `componentDidMount()`.
  - **Update**: Fase in cui un componente riceve nuove props o cambia stato. Metodi: `componentDidUpdate()`.
  - **Unmount**: Fase in cui un componente viene rimosso dal DOM. Metodo: `componentWillUnmount()`.

- **Eventi su elementi interattivi React (button onClick, input onChange)**
  - **Eventi**: React gestisce gli eventi in modo simile al DOM, ma utilizza un sistema di delega degli eventi. Esempio:
    ```javascript
    <button onClick={handleClick}>Clicca qui</button>
    <input type="text" onChange={handleChange} />
    ```

- **Componenti di classe e componenti funzionali**
  - **Componenti di Classe**: Utilizzano la sintassi delle classi ES6. Possono gestire stato e ciclo di vita. Esempio:
    ```javascript
    class MyComponent extends React.Component {
        render() {
            return <div>Hello</div>;
        }
    }
    ```
  - **Componenti Funzionali**: Funzioni JavaScript che restituiscono JSX. Possono utilizzare gli Hooks per gestire stato e ciclo di vita. Esempio:
    ```javascript
    const MyComponent = () => {
        return <div>Hello</div>;
    };
    ```

- **Hooks (useState, useEffect, custom Hooks)**
  - **useState**: Hook che permette di gestire lo stato in componenti funzionali. Esempio:
    ```javascript
    const [count, setCount] = useState(0);
    ```
  - **useEffect**: Hook che gestisce effetti collaterali, simile ai metodi del ciclo di vita. Esempio:
    ```javascript
    useEffect(() => {
        // codice da eseguire
    }, [dependencies]);
    ```
  - **Custom Hooks**: Funzioni che utilizzano altri Hooks per riutilizzare logica di stato e effetti. Esempio:
    ```javascript
    function useFetch(url) {
        const [data, setData] = useState(null);
        useEffect(() => {
            fetch(url).then(response => response.json()).then(setData);
        }, [url]);
        return data;
    }
    ```

- **Props e state**
  - **Props**: Proprietà passate ai componenti per configurare il loro comportamento. Sono immutabili all'interno del componente.
  - **State**: Dati interni di un componente che possono cambiare nel tempo. Utilizzati per gestire l'interazione dell'utente e il rendering dinamico.

- **ECMAScript**
  - **ECMAScript**: Standard per il linguaggio di programmazione JavaScript. Definisce le regole, i tipi, le strutture e le funzioni del linguaggio. Le versioni più recenti (ES6 e successive) hanno introdotto nuove funzionalità come le classi, i moduli e gli arrow functions.

- **JSON**
  - **JSON (JavaScript Object Notation)**: Formato di scambio dati leggero e facilmente leggibile. Utilizzato per rappresentare strutture dati in modo semplice. Esempio:
    ```json
    {
        "name": "Mario",
        "age": 30
    }
    ```

- **HTTP Endpoint**
  - **HTTP Endpoint**: URL che rappresenta un punto di accesso a un servizio web. Utilizzato per inviare e ricevere dati tramite richieste HTTP. Gli endpoint possono essere RESTful, GraphQL, ecc.
  - **RESTful**: Architettura per la progettazione di servizi web che utilizza le convenzioni HTTP. Le API RESTful sono basate su risorse, identificabili tramite URL, e utilizzano metodi HTTP standard (GET, POST, PUT, DELETE) per operare su queste risorse.

- **Fetch**
  - **Fetch API**: Interfaccia JavaScript per effettuare richieste HTTP. Permette di recuperare risorse da una rete. Esempio:
    ```javascript
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data));
    ```

# GLOSSARIO PER LA VERIFICA
