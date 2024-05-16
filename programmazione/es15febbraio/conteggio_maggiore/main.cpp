#include <iostream>

using namespace std;

int main() {
    int N;

    cout << "Inserisci il numero N: ";
    cin >> N;

    int valoreMaggiore;
    int contatoreMaggiore = 0;

    for (int i = 0; i < N; ++i) {
        int numero;
        cout << "Inserisci il numero " << i + 1 << ": ";
        cin >> numero;

        if (i == 0 || numero > valoreMaggiore) {
            valoreMaggiore = numero;
            contatoreMaggiore = 1;
        } else if (numero == valoreMaggiore) {
            contatoreMaggiore++;
        }
    }

    cout << "Il valore maggiore è: " << valoreMaggiore << endl;
    cout << "Esso ricorre " << contatoreMaggiore << " volte." << endl;

    return 0;
}

