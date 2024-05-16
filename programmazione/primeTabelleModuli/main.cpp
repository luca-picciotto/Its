#include "caricaPazientiVisite.h"

#include <iostream>
#include <string>

// #define MAX 100


using namespace std;

/*
    il programma gestisce un sistema di inserimento manuale o automatico di pazienti dell'ambulatorio e 
    un sistema di prenotazioni per tutto l'anno.
*/


// Terzo Esercizio
// Un ambulatorio dentistico utilizza una tabella per memorizzare tutte le prenotazioni
// effettuate per il mese di Luglio. Le prenotazioni hanno il seguente tracciato record:
// cognome e data (numero compreso da 1 a 30).
// Si scriva una funzione che stampi sullo standard output quali siano i giorni liberi.     
// Si costruisca il programma che carichi la tabella e provi la funzione progettata.




int main(){
    int N;
    Persona persona[MAX];       //persone registrate
    Prenotazioni visite[MAX];       //visite prenotate

    N = richiestaN();

    inserimentoPersonaFittizio(persona, N);
    // inserimentoPersonaInput(persona, N);

    stampaPersone(persona, N);
    caricaPrenotazioni(persona, N, visite);
}