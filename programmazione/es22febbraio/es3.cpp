/*Dopo aver caricato in memoria un array di numeri reali con N componenti, N inserito in input,
raddoppiare il valore delle prime tre componenti e stampare la media aritmetica di tutte le componenti.*/
#include <iostream>
using namespace std;

//funzione per caricare l'array
void caricaArray (int numeri[], int N) {
    int i;
    for (i = 0; i < N; i++) {
        cout<<"Inserisci numero: ";
        cin>>numeri[i];

    }
}

//funzione per raddoppiare i primi 3 numeri
void raddoppio(int numeri[], int N) {
    int i;
    for (i = 0; i < 3; i++) {
        numeri[i] *= 2;
    }
}

//funzione per calcolare la media
float calcolaMedia(int numeri[], int N) {
    int i;
    float media = 0;
    for (i = 0; i < N; i++) {
        media += numeri[i];
    }

    media /= N;

    return media;
}

int main () {

//Dichiarazione variabili
    int N;
    float media;

//sezione input
    cout<<"Inserisci il numero di componenti: ";
    cin>>N;

    int numeri[N]; // lo dichiaro dopo aver inserito N per dare una dimensione

// Elaborazione
    caricaArray(numeri, N);

    raddoppio(numeri, N);

    media = calcolaMedia(numeri, N);

//sezione di output
    cout<<"La media aritmetica è: "<<media;

    return 0;
}