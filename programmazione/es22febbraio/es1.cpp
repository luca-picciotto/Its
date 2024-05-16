//Dopo aver caricato in memoria un array di numeri interi con 10 componenti, calcolare il prodotto
#include <iostream>
using namespace std;

int prodotto (int array[], int dimensione) {
    int risultato = 1;
    int i;

    for (i = 0; i < dimensione; i++) {
        risultato *= array[i];
    }
        return risultato;    
}

int main () {
// Dichiarazione variabili
    int dimensione = 10;
    int array[dimensione];
    int risultatoProdotto;
    int i;

// Elaborazione
    for (i = 0; i < 10; i++) {
        cout<<"Inserisci il numero: ";
        cin>>array[i];
    }

    risultatoProdotto = prodotto(array, dimensione);

// Output
    cout<<"Il risultato del prodotto degli array è "<<risultatoProdotto;

    return 0;
}