#include <iostream>
#include <string>

using namespace std;

int main() {
    string frase;

    cout << "Inserisci una frase: ";
    getline(cin, frase);

    int lunghezza = frase.size();

    cout << "La frase originale: " << frase << endl;

    cout << "La frase invertita: ";
    for (int i = lunghezza - 1; i >= 0; i--) {
        cout << frase[i];
    }

    cout << endl;

    return 0;
}
