#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;
#define N 10

int main() {
    // Inizializza il generatore di numeri casuali con il tempo corrente
    srand(time(0));

    // Genera un numero casuale compreso tra 1 e 100
    int numeroDaIndovinare = rand() % 100 + 1;

    int tentativo, contatoreTentativi = 0;

    cout << "Benvenuto al gioco dell'indovina il numero!\n"<<numeroDaIndovinare;

    do {
        // Richiede all'utente di inserire un numero
        cout << "Inserisci un numero: ";
        cin >> tentativo;

        // Incrementa il contatore dei tentativi
        contatoreTentativi++;

        // Verifica se il numero inserito è corretto
        if (tentativo == numeroDaIndovinare) {
            cout << "Complimenti! Hai indovinato il numero in " << contatoreTentativi << " tentativi.\n";
        } else if (tentativo < numeroDaIndovinare) {
            cout << "Il numero inserito è troppo basso. Prova ancora.\n";
        } else {
            cout << "Il numero inserito è troppo alto. Prova ancora.\n";
        }

    } while (tentativo != numeroDaIndovinare && contatoreTentativi != N);
    if (contatoreTentativi == N)
        cout<<"hai esaurito i tentativi!"<<endl;

    return 0;
}
