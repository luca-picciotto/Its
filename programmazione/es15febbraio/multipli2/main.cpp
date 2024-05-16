#include <iostream>

using namespace std;

int main() {
    int A, N;

    cout << "Inserisci due numeri interi, A e N: ";
    cin >> A >> N;

    int contatoreMultipli = 0;

    for (int i = 0; i < N; ++i) {
        int numero;
        cout << "Inserisci il numero " << i + 1 << ": ";
        cin >> numero;

        if (numero % A == 0) {
            contatoreMultipli++;
        }
    }

    cout << "Il numero di multipli di " << A << " tra i numeri inseriti è: " << contatoreMultipli << endl;

    return 0;
}

