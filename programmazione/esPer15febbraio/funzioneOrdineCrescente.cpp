#include <iostream>

using namespace std;

// Funzione per ordinare due variabili in ordine crescente
void ordina(int &a, int &b) {
    if (a > b) {
        int temp = a;
        a = b;
        b = temp;
    }
}

int main() {
    int A, B, C;

    // Input da parte dell'utente
    cout << "Inserisci tre numeri: ";
    cin >> A >> B >> C;

    // Ordina i numeri
    ordina(A, B);
    ordina(B, C);
    ordina(A, B);

    // Stampa i numeri ordinati
    cout << "Numeri ordinati: A = " << A << " B = " << B << " C = " << C << endl;

    return 0;
}
