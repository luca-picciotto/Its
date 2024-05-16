#include <iostream>

using namespace std;

int main() {
    int N;

    cout << "Inserisci il numero N: ";
    cin >> N;

    int positivi = 0, negativi = 0, zeri = 0;

    for (int i = 0; i < N; ++i) {
        int numero;
        cout << "Inserisci il numero " << i + 1 << ": ";
        cin >> numero;

        if (numero > 0) {
            positivi++;
        } else if (numero < 0) {
            negativi++;
        } else {
            zeri++;
        }
    }

    cout << "Numero di numeri positivi: " << positivi << endl;
    cout << "Numero di numeri negativi: " << negativi << endl;
    cout << "Numero di zeri: " << zeri << endl;

    return 0;
}
