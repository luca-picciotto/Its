### 1. Email Address
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;
```
**Descrizione:**
Questa regex verifica se una stringa è un indirizzo email valido.

**Componenti:**
- `^`: Inizio della stringa.
- `[^\s@]+`: Uno o più caratteri che non sono spazi bianchi (`\s`) o simboli `@`.
  - `^` all'interno di `[]` significa "non".
  - `\s` corrisponde a qualsiasi spazio bianco.
- `@`: Simbolo `@` letterale.
- `[^\s@]+`: Uno o più caratteri che non sono spazi bianchi o simboli `@`.
- `\.`: Punto letterale.
- `[a-zA-Z]{2,4}`: Da 2 a 4 lettere maiuscole o minuscole.
- `$`: Fine della stringa.

### 2. Phone Number
```javascript
const phoneRegex = /^\+?[\d\s-]+$/;
```
**Descrizione:**
Questa regex verifica se una stringa è un numero di telefono valido.

**Componenti:**
- `^`: Inizio della stringa.
- `\+?`: Simbolo `+` opzionale.
- `[\d\s-]+`: Uno o più caratteri che sono cifre (`\d`), spazi (`\s`) o trattini (`-`).
  - `\d` corrisponde a qualsiasi cifra.
- `$`: Fine della stringa.

### 3. Password
```javascript
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
```
**Descrizione:**
Questa regex verifica se una stringa è una password valida secondo criteri di complessità.

**Componenti:**
- `^`: Inizio della stringa.
- `(?=.*[a-z])`: Lookahead positivo che richiede almeno una lettera minuscola.
  - `(?=...)` è un lookahead positivo.
- `(?=.*[A-Z])`: Lookahead positivo che richiede almeno una lettera maiuscola.
- `(?=.*\d)`: Lookahead positivo che richiede almeno una cifra.
  - `\d` corrisponde a qualsiasi cifra.
- `(?=.*[\W_])`: Lookahead positivo che richiede almeno un carattere speciale.
  - `\W` corrisponde a qualsiasi carattere non alfanumerico.
  - `_` corrisponde al carattere underscore.
- `.{8,}`: Almeno 8 caratteri di qualsiasi tipo.
- `$`: Fine della stringa.

### 4. URL
```javascript
const urlRegex = /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/.*)?(\?.*)?(#.*)?$/;
```
**Descrizione:**
Questa regex verifica se una stringa è un URL valido.

**Componenti:**
- `^`: Inizio della stringa.
- `(https?:\/\/)?`: Protocollo opzionale (http o https) seguito da `://`.
  - `https?` corrisponde a `http` o `https`.
- `[\w.-]+`: Uno o più caratteri alfanumerici (`\w`), punti (`.`) o trattini (`-`).
- `\.`: Punto letterale.
- `[a-zA-Z]{2,}`: Almeno 2 lettere maiuscole o minuscole.
- `(\/.*)?`: Path opzionale che inizia con `/` seguito da zero o più caratteri qualsiasi.
- `(\?.*)?`: Query string opzionale che inizia con `?` seguito da zero o più caratteri qualsiasi.
- `(#.*)?`: Fragment opzionale che inizia con `#` seguito da zero o più caratteri qualsiasi.
- `$`: Fine della stringa.

### Esempio di utilizzo:

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^\+?[\d\s-]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const urlRegex = /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/.*)?(\?.*)?(#.*)?$/;

// Esempi
console.log(emailRegex.test("test@example.com")); // true
console.log(phoneRegex.test("+1 800-555-5555")); // true
console.log(passwordRegex.test("Aa1!aaaa")); // true
console.log(urlRegex.test("https://www.example.com")); // true
