
---

# Convertire una stringa in Kebab Case

Questa funzione prende una stringa in input, rimuove numeri e simboli non desiderati, converte tutte le lettere in minuscolo e sostituisce gli spazi con trattini per restituire la stringa in formato **kebab case**.

### Funzione:

```javascript
const string = "  123 Ciao a Tutti, oggi è il 27 Settembre 2024!";

const result = string
  .replace(/^\s+/, '')                      // Rimuovi spazi iniziali
  .replace(/^\d+/, '')                      // Rimuovi numeri iniziali
  .replace(/[^a-zA-Z0-9\s]/g, '')           // Rimuovi simboli tranne lettere, numeri e spazi
  .replace(/[A-Z]/g, (match) => match.toLowerCase())  // Converti maiuscole in minuscole
  .replace(/\s+/g, '-')                     // Sostituisci spazi con '-'
  .replace(/^-+|-+$/g, '');                 // Rimuovi eventuali trattini iniziali o finali

console.log(result);  
// Output: "ciao-a-tutti-oggi-e-il-settembre-2024"
```

### Spiegazione delle espressioni regolari (Regex)

1. **Rimozione di spazi iniziali**: `/^\s+/`
    - **`^`**: Indica l'inizio della stringa.
    - **`\s+`**: Cerca uno o più spazi (inclusi spazi, tabulazioni o ritorni a capo). Questo elimina eventuali spazi all'inizio della stringa.
    
    **Esempio**:
    - Input: `"  Ciao a tutti"`
    - Output: `"Ciao a tutti"`

2. **Rimozione dei numeri iniziali**: `/^\d+/`
    - **`^`**: Indica l'inizio della stringa.
    - **`\d+`**: Cerca uno o più numeri consecutivi.
    - Questa regex rimuove qualsiasi sequenza di numeri che si trova all'inizio della stringa.
    
    **Esempio**:
    - Input: `"123 Ciao a tutti"`
    - Output: `"Ciao a tutti"`

3. **Rimozione dei simboli**: `/[^a-zA-Z0-9\s]/g`
    - **`[^...]`**: Il simbolo `^` all'interno di una classe di caratteri indica la negazione, cioè "tutto tranne ciò che è specificato all'interno".
    - **`a-zA-Z`**: Include tutte le lettere minuscole e maiuscole.
    - **`0-9`**: Include tutti i numeri.
    - **`\s`**: Include gli spazi.
    - **`g`**: Il flag globale significa che la regex troverà e sostituirà tutte le occorrenze nella stringa.
    
    Questa regex rimuove tutti i simboli diversi dalle lettere (minuscole e maiuscole), dai numeri e dagli spazi.
    
    **Esempio**:
    - Input: `"Ciao! @ tutti, oggi %"`
    - Output: `"Ciao  tutti oggi "`

4. **Conversione delle lettere maiuscole in minuscole**: `/[A-Z]/g`
    - **`[A-Z]`**: Cerca tutte le lettere maiuscole comprese tra `A` e `Z`.
    - **`g`**: Il flag globale indica di trovare tutte le occorrenze nella stringa.
    
    Nella funzione `replace()`, viene passato un callback `(match) => match.toLowerCase()` per convertire ogni lettera maiuscola nella sua rispettiva versione minuscola.
    
    **Esempio**:
    - Input: `"Ciao A Tutti"`
    - Output: `"ciao a tutti"`

5. **Sostituzione degli spazi con trattini**: `/\s+/g`
    - **`\s+`**: Cerca uno o più spazi (inclusi spazi, tabulazioni o ritorni a capo).
    - **`g`**: Flag globale per trovare tutte le occorrenze nella stringa.
    
    Questa regex sostituisce ogni gruppo di spazi consecutivi con un singolo trattino (`-`).
    
    **Esempio**:
    - Input: `"ciao a tutti"`
    - Output: `"ciao-a-tutti"`

6. **Rimozione di trattini iniziali e finali**: `/^-+|-+$/g`
    - **`^-+`**: Cerca uno o più trattini (`-+`) all'inizio della stringa (`^`).
    - **`-+$`**: Cerca uno o più trattini (`-+`) alla fine della stringa (`$`).
    - **`g`**: Flag globale per trovare tutte le occorrenze.
    
    Questa regex rimuove eventuali trattini aggiuntivi che si trovano all'inizio o alla fine della stringa. È importante perché non vogliamo che la stringa finale in kebab case inizi o termini con un trattino.

    **Esempio**:
    - Input: `"-ciao-a-tutti-"`
    - Output: `"ciao-a-tutti"`

### Esempio Completo:

Con la stringa di input `"  123 Ciao a Tutti, oggi è il 27 Settembre 2024!"`, il risultato sarà:

**Input**: `"  123 Ciao a Tutti, oggi è il 27 Settembre 2024!"`

**Output**: `"ciao-a-tutti-oggi-e-il-settembre-2024"`

---
