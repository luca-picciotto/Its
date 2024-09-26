### Spiegazione delle Funzioni:

1. **usefulFunction(number)**:
   - Funzione principale che avvia una serie di calcoli con il numero fornito come argomento.

2. **squareNumber(a)**:
   - Calcola e stampa il quadrato del numero `a`.
   - @param {number} a - Il numero da elevare al quadrato.
   - @returns {number} Il risultato del quadrato di `a`.

3. **halfNumber(a)**:
   - Calcola e stampa la metà del numero `a`.
   - @param {number} a - Il numero da dividere a metà.
   - @returns {number} La metà di `a`.

4. **percentOf(percent, a)**:
   - Calcola e stampa il `percent` percento del numero `a`.
   - @param {number} percent - La percentuale da calcolare.
   - @param {number} a - Il numero su cui calcolare la percentuale.
   - @returns {number} Il `percent` percento di `a`.

5. **areaOfCircle(radius)**:
   - Calcola e stampa l'area di un cerchio con raggio `radius`.
   - @param {number} radius - Il raggio del cerchio.
   - @returns {number} L'area del cerchio.

6. **calculator(a)**:
   - Esegue una serie di calcoli:
     - Divide `a` a metà.
     - Eleva al quadrato il risultato.
     - Calcola l'area di un cerchio con il risultato come raggio.
     - Calcola la percentuale dell'area rispetto al quadrato.
   - @param {number} a - Il numero su cui eseguire i calcoli.

7. **play e stop**:
   - Imposta un timeout per eseguire `usefulFunction(3)` dopo 10 secondi.
   - Imposta un timeout per cancellare il primo timeout dopo 5 secondi e stampare "Function cancelled!".