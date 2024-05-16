#include <iostream>
using namespace std;

// Function prototypes
int richiediNumero();
void caricaArray(int[], int);
void stampaArray(int[], int);
bool controllOrdine(int[], int);

int main() {
    int n;
    bool ordinati;

    n = richiediNumero();

    int array[n];

    caricaArray(array, n);
    ordinati = controllOrdine(array, n);
    cout<<ordinati<<endl;
    if (ordinati == true) {
        cout << "I valori memorizzati nell'array sono in ordine crescente." << endl;
    } else {
        cout << "I valori memorizzati nell'array non sono in ordine crescente." << endl;
    }

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

bool controllOrdine(int a[], int n) {
    bool ordinati;

    ordinati = true;
    for (int i = 0; i < n - 1 && ordinati; i++) {
        if (a[i] > a[i + 1]) {
            ordinati = false;
            
        }
    }
    return ordinati;
}
