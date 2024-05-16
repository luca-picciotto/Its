#include <iostream>
using namespace std;

// Leggere un array di N interi, N dato in input. Verificare se c’è almeno un valore presente un
// numero di volte identico al suo valore.


int richiediNumero();
void caricaArray(int[], int);
void stampaArray(int[], int);
void verificaSommaPrecedenti(int[], int);

int main() {
    int n;

    n = richiediNumero();

    int array[n];

    caricaArray(array, n);
    
    stampaArray(array, n);
    
    verificaSommaPrecedenti(array, n);


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

void verificaSommaPrecedenti(int a[], int n) {
    for (int i = 1; i < n; i++) { 
        int sommaPrecedenti = 0;
        for (int j = 0; j < i; j++) {
            sommaPrecedenti += a[j];
        }
        if (a[i] >= sommaPrecedenti) { 
            cout << "Il valore " << a[i] << " non è minore della somma dei numeri precedenti." << endl;
            return; 
        }
    }
    cout << "Ogni valore nell'array è minore della somma dei numeri precedenti." << endl;
}

