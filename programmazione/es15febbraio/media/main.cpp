#include <iostream>

using namespace std;

int main() {
    int N;

    cout << "Inserisci il numero N: ";
    cin >> N;

    int sommaPari = 0, contPari = 0;
    int sommaDispari = 0, contDispari = 0;

    for (int i = 0; i < N; ++i) {
        int numero;
        cout << "Inserisci il numero " << i + 1 << ": ";
        cin >> numero;

        if (numero % 2 == 0) {
            sommaPari += numero;
            contPari++;
        } else {
            sommaDispari += numero;
            contDispari++;
        }
    }

    if (contPari > 0) {
        double mediaPari = static_cast<double>(sommaPari) / contPari;
        cout << "Media aritmetica dei numeri pari: " << mediaPari << endl;
    } else {
        cout << "Nessun numero pari inserito." << endl;
    }

    if (contDispari > 0) {
        double mediaDispari = static_cast<double>(sommaDispari) / contDispari;
        cout << "Media aritmetica dei numeri dispari: " << mediaDispari << endl;
    } else {
        cout << "Nessun numero dispari inserito." << endl;
    }

    return 0;
}
