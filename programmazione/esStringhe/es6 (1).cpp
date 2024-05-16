#include <iostream>
#include <string>
using namespace std;

int main() {

    string stringa;
    int i;
    int j;
    int contaCaratteri = 0;
    bool carattereDiverso;

    cout << "Inserisci una stringa: ";
    cin >> stringa;

    for (i = 0; i < stringa.length(); i++) {
        carattereDiverso = true;

        for (j = 0; j < stringa.length(); j++) {
            if (i != j && stringa[i] == stringa[j]) {
                carattereDiverso = false;
                break;
            }
        }

        if (carattereDiverso) {
            contaCaratteri++;
        }
    }

    cout << "I caratteri diversi tra loro sono: " << contaCaratteri;

    return 0;
}
