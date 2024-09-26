
### Spiegazione delle Funzioni e Variabili:

1. **dayEn**:
   - Un array che rappresenta i giorni della settimana in inglese.
   - @type {Array<string>}

2. **dayIt**:
   - Un array che rappresenta i giorni della settimana in italiano.
   - @type {Array<string>}

3. **dayLang**:
   - Un oggetto che mappa i codici linguistici agli array dei giorni della settimana.
   - @type {Object<string, Array<string>>}

4. **getWeekDay(date, lang = 'en')**:
   - Restituisce il giorno della settimana per una data specifica e una lingua specificata.
   - @param {string} date - La stringa della data nel formato 'YYYY-MM-DD'.
   - @param {string} [lang='en'] - Il codice linguistico ('en' per inglese, 'it' per italiano).
   - @returns {string} Il giorno della settimana nella lingua specificata.

### Esempi di Utilizzo:
- `console.log(getWeekDay('2024-05-22', 'en'));` stampa 'WE' (Mercoledì in inglese).
- `console.log(getWeekDay('2024-05-22', 'it'));` stampa 'ME' (Mercoledì in italiano).