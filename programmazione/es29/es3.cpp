#include <iostream>
#include <string>

using namespace std;

int main() {
    string parola;
    int lunghezza;
    int i, ii = 0;
    cout << "Inserisci una stringa: ";
    cin >> parola;

    lunghezza = parola.size();

    // Dichiarazione di parola2 come stringa vuota
    string parola2 = "";

    // Ciclo per invertire la stringa
    for (i = lunghezza - 1; i >= 0; i--) {
        parola2 += parola[i];
    }

    if(parola == parola2)
        cout<<"palindroma"<<endl;
    else cout<<"non palindroma";

    return 0;
}
