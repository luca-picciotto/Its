
### Descrizione delle Componenti

#### Variabili Globali
- **pageNode**: Nodo principale del body della pagina, selezionato tramite `document.body`.
- **pageHead**: Nodo principale del head della pagina, selezionato tramite `document.head`.
- **url**: Array contenente gli URL delle immagini dei libri.
- **books**: Array di oggetti rappresentanti i libri, ciascuno con proprietà `title`, `author`, e `alreadyRead`.

#### Funzioni e Timeout
- **setTimeout**: Utilizzato per aggiungere un foglio di stile esterno (`./css/style-01.css`) al head della pagina dopo un ritardo di 5 secondi.

#### Iterazione sui Libri
- **books.forEach**: Itera attraverso l'array dei libri, aggiungendo l'URL dell'immagine corrispondente a ciascun libro e creando gli elementi HTML necessari per visualizzare le informazioni di ciascun libro.

#### Creazione e Configurazione degli Elementi HTML
- **divBook**: Contenitore principale per ogni libro, creato e configurato con la classe `div-book`.
- **bookTitle**: Contenitore per il titolo del libro, creato e configurato con la classe `div-item`.
- **bookImage**: Contenitore per l'immagine del libro, creato e configurato con la classe `div-img`.
- **bookAuthor**: Contenitore per l'autore del libro, creato e configurato con la classe `div-item`.
- **bookRead**: Contenitore per lo stato di lettura del libro, creato e configurato con la classe `div-item`.

#### Aggiunta di Classi Condizionali
- **bookTitle.classList.add**: Aggiunge una classe specifica (`already-read` o `not-already-read`) al titolo del libro in base allo stato di lettura (`alreadyRead`).