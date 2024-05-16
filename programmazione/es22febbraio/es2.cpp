/*Dopo aver caricato in memoria un array di numeri interi con 10 componenti, contare le componenti che 
hanno valore superiore a M inserito in input */
#include <iostream>
using namespace std;

int contaSuperiori (int array[], int dimensione, int M) {
      int contatore = 0;
      int i;

      for (i = 0; i < dimensione; i++) {
        if (array[i] > M) {
            contatore++;
        }
      }

      return contatore;
}

int main () {
// Dichiarazione variabili
    int M;
    int array[10];
    int dimensione = 10;
    int i;
    int conteggio;

// Sezione input
    cout<<"Inserisci M: ";
    cin>>M;

// Elaborazione
    for (i = 0; i < dimensione; i++) {
        cout<<"Inserisci il numero: ";
        cin>>array[i];
    }

// Chiamata funzione
    conteggio = contaSuperiori (array, dimensione, M);

// Sezione output
    cout<<"I numeri maggiori di "<<M<<" sono "<<conteggio;

    return 0;
}