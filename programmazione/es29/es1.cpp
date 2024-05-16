#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    // Inizializza il generatore di numeri casuali con il tempo corrente
    srand(time(0));

    // Genera un numero casuale compreso tra 1 e 100
    int numeroDaIndovinare = rand() % 100 + 1;

    int tentativo;

    do {
        // Richiede all'utente di inserire un numero
        cout << "Inserisci un numero: ";
        cin >> tentativo;

        // Verifica se il numero inserito è corretto
        if (tentativo == numeroDaIndovinare) {
            cout << "Complimenti! Hai indovinato il numero in ";
        } else if (tentativo < numeroDaIndovinare) {
            cout << "Il numero inserito è troppo basso. Prova ancora.\n";
        } else {
            cout << "Il numero inserito è troppo alto. Prova ancora.\n";
        }

    } while (tentativo != numeroDaIndovinare);

    return 0;
}
