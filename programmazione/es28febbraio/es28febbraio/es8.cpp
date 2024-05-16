#include <iostream>
using namespace std;

// Leggere un array di N interi, N dato in input. Verificare se c’è almeno un valore presente un
// numero di volte identico al suo valore.


int richiediNumero();
void caricaArray(int[], int);
void stampaArray(int[], int);
void verificaPresenzaIdentica(int[], int);

int main() {
    int n;

    n = richiediNumero();

    int array[n];

    caricaArray(array, n);
    
    stampaArray(array, n);
    
    verificaPresenzaIdentica(array, n);
    

    return 0;
}

int richiediNumero() {
    int n;

    cout << "Inserisci il numero di elementi: ";
    cin >> n;

    return n;
}

void caricaArray(int a[], int n) {
    for (int i = 0; i < n; i++) {
        cout << "Posizione " << i + 1 << ": ";
        cin >> a[i];
    }
}

void stampaArray(int a[], int n) {
    for (int i = 0; i < n; i++) {
        cout << "Posizione " << i + 1 << ": " << a[i] << endl;
    }
}


void verificaPresenzaIdentica(int a[], int n) {
    bool trovato = false;
    for (int i = 0; i < n; i++) {
        int conteggio = 0;
        for (int j = 0; j < n; j++) {
            if (a[i] == a[j]) {
                conteggio++;
            }
        }
        if (conteggio == a[i]) {
            trovato = true;
        }
    }
    if (trovato) {
        cout << "Almeno un valore appare un numero di volte identico al suo valore." << endl;
    } else {
        cout << "Nessun valore appare un numero di volte identico al suo valore." << endl;
    }
}

