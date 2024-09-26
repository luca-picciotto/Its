
### Descrizione delle Componenti

#### Costanti
- **min**: Il numero minimo di piatti sporchi generati.
- **max**: Il numero massimo di piatti sporchi generati.

#### Variabili del DOM
- **dirtyDishNode**: Nodo del DOM che rappresenta lo stack dei piatti sporchi.
- **washDishNode**: Nodo del DOM che rappresenta lo stack dei piatti lavati.
- **pageNode**: Nodo del body della pagina.

#### Array degli Stack
- **dirtyStack**: Array che rappresenta lo stack dei piatti sporchi.
- **washStack**: Array che rappresenta lo stack dei piatti lavati.

#### Funzioni
- **getDirtyNumber**: Genera un numero casuale tra min e max.
- **getDish**: Genera un array di piatti sporchi.
- **printDirty**: Stampa i piatti sporchi nel DOM.
- **removeAndAdd**: Rimuove un piatto dallo stack dei piatti sporchi e lo aggiunge allo stack dei piatti lavati.
- **washDish**: Lava i piatti dallo stack dei piatti sporchi e li aggiunge allo stack dei piatti lavati.

#### Avvio del Processo
- **washDish(dirtyStack, washStack)**: Inizia il processo di lavaggio dei piatti.

### Eventi
- **test.addEventListener('click', startWash)**: Associa l'evento click alla callback `startWash` (commentato).