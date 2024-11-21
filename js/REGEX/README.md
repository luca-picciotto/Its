Ecco la documentazione aggiornata per includere le informazioni sulle **regular expressions (regex)** provenienti dal MDN Web Docs. Questa versione include dettagli sui concetti di base e avanzati, oltre a esempi pratici in JavaScript.

---

# Guida Completa alle Regular Expressions (Regex)

## Introduzione alle Regex

Le **regular expressions (regex)** sono sequenze di caratteri che formano un modello di ricerca. Possono essere utilizzate per cercare, sostituire o analizzare stringhe di testo in modo flessibile e potente.

### Applicazioni Comuni delle Regex
- Validazione di input (come email e numeri di telefono)
- Estrazione di informazioni da stringhe
- Sostituzione di parti di stringhe
- Parsing di dati (come log o file di testo)

## Fondamenti delle Regex

### Struttura di Base
Una regex è racchiusa tra barre (`/`). Ad esempio:
```javascript
const regex = /pattern/;
```

### Caratteri Speciali
- **`.`**: corrisponde a qualsiasi carattere tranne il carattere di nuova linea.
- **`^`**: indica l'inizio della stringa.
- **`$`**: indica la fine della stringa.
- **`*`**: corrisponde a zero o più occorrenze del carattere precedente.
- **`+`**: corrisponde a una o più occorrenze del carattere precedente.
- **`?`**: corrisponde a zero o una occorrenza del carattere precedente.
- **`{n}`**: corrisponde esattamente a `n` occorrenze del carattere precedente.
- **`{n,}`**: corrisponde a `n` o più occorrenze.
- **`{n,m}`**: corrisponde tra `n` e `m` occorrenze.
- **`[]`**: definisce una classe di caratteri. Ad esempio, `[abc]` corrisponde a `a`, `b` o `c`.
- **`|`**: operatore OR. Ad esempio, `a|b` corrisponde a `a` o `b`.

### Escaping dei Caratteri Speciali
Per utilizzare i caratteri speciali come normali caratteri, è necessario precederli con un backslash (`\`). Ad esempio, per cercare un punto (.), si usa `\.`.

### Flags delle Regex
- **`g`**: ricerca globale (trovare tutte le occorrenze).
- **`i`**: ignorare la distinzione tra maiuscole e minuscole.
- **`m`**: modalità multilinea (consente il `^` e `$` di funzionare su ogni riga).

## Esempi Comuni

### Validazione delle Email

Una regex comune per validare indirizzi email è:
```javascript
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(emailRegex.test("esempio@dominio.com")); // true
console.log(emailRegex.test("esempio@.com")); // false
```

### Validazione degli URL

Una regex per validare URL potrebbe essere:
```javascript
const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+)\.[a-z]{2,}\/?$/;

console.log(urlRegex.test("https://www.esempio.com")); // true
console.log(urlRegex.test("www.sito.it")); // true
console.log(urlRegex.test("sito")); // false
```

### Estrarre Numeri da una Stringa

Per estrarre numeri da una stringa, si può utilizzare:
```javascript
const str = "Oggi sono 27 gradi e domani saranno 30.";
const numbers = str.match(/\d+/g);

console.log(numbers); // ["27", "30"]
```

### Sostituzione di Parole

Per sostituire una parola in una stringa:
```javascript
const str = "Ciao, mondo!";
const newStr = str.replace(/mondo/, "universo");

console.log(newStr); // "Ciao, universo!"
```

### Rimozione di Spazi Inutili

Per rimuovere spazi all'inizio e alla fine e sostituire spazi multipli con un singolo spazio:
```javascript
const str = "   Ciao     mondo!   ";
const trimmedStr = str.trim().replace(/\s+/g, ' ');

console.log(trimmedStr); // "Ciao mondo!"
```

## Concetti Avanzati

### Lookahead e Lookbehind

- **Lookahead positivo**: `(?=...)` verifica se esiste un certo pattern dopo la posizione corrente.
- **Lookahead negativo**: `(?!...)` verifica che non esista un certo pattern dopo la posizione corrente.
- **Lookbehind positivo**: `(?<=...)` verifica se esiste un certo pattern prima della posizione corrente.
- **Lookbehind negativo**: `(?<!...)` verifica che non esista un certo pattern prima della posizione corrente.

**Esempio di Lookahead**:
```javascript
const regex = /\d(?= years)/; // Trova un numero seguito da "years"
console.log("Il tuo contratto è di 5 years".match(regex)); // ["5"]
```

### Gruppi di Cattura

I gruppi di cattura possono essere creati usando le parentesi tonde `(...)`. Questi gruppi possono essere utilizzati per estrarre parti specifiche della corrispondenza.

**Esempio di Gruppi di Cattura**:
```javascript
const str = "Nome: Mario, Età: 30";
const regex = /Nome: (\w+), Età: (\d+)/;
const match = str.match(regex);

console.log(match[1]); // "Mario"
console.log(match[2]); // "30"
```

### Metacaratteri e Sequenze di Escape
Alcuni caratteri speciali sono utilizzati per definire metacaratteri o per scopi speciali:
- **`\d`**: corrisponde a qualsiasi cifra (equivalente a `[0-9]`).
- **`\D`**: corrisponde a qualsiasi carattere non numerico.
- **`\w`**: corrisponde a qualsiasi carattere alfanumerico (equivalente a `[a-zA-Z0-9_]`).
- **`\W`**: corrisponde a qualsiasi carattere non alfanumerico.
- **`\s`**: corrisponde a qualsiasi carattere di spazio (spazi, tabulazioni, nuove righe).
- **`\S`**: corrisponde a qualsiasi carattere non di spazio.

## Risorse Utili per Imparare Regex

- [Regex101](https://regex101.com/): Un ottimo strumento per testare e comprendere le regex con spiegazioni dettagliate.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions): Documentazione completa sulle regex in JavaScript.
- [Regular-Expressions.info](https://www.regular-expressions.info/): Una risorsa completa per imparare tutto sulle regex.

## Esempi di Applicazione in Situazioni Comuni

### Validazione di Numeri di Telefono

Ecco un esempio di regex per validare un numero di telefono:
```javascript
const phoneRegex = /^\+?[0-9]{1,4}?[-. ]?([0-9]{1,4}[-. ]?){1,3}[0-9]{1,4}$/;

console.log(phoneRegex.test("+39 123 456 7890")); // true
console.log(phoneRegex.test("123-456-7890")); // true
console.log(phoneRegex.test("1234567890")); // true
```

### Estrazione di Data

Per estrarre date in formato `YYYY-MM-DD`:
```javascript
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;

const str = "La data di oggi è 2024-09-27.";
const match = str.match(dateRegex);

if (match) {
    console.log(`Anno: ${match[1]}, Mese: ${match[2]}, Giorno: ${match[3]}`); 
}
```

## Conclusione

Le regular expressions sono uno strumento potente per lavorare con stringhe di testo. Con la pratica e l'esplorazione, puoi diventare esperto nell'uso delle regex per risolvere una vasta gamma di problemi di manipolazione delle stringhe. Utilizza le risorse e gli esempi forniti in questa guida per iniziare il tuo viaggio nel mondo delle regex!

--- 

Se hai ulteriori domande o hai bisogno di chiarimenti, sentiti libero di chiedere!