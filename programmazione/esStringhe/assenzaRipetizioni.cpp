#include <iostream>
#include <string>
using namespace std;

int main()
{
    // Dichiarazione variabili
    string frase;
    int i, j;
    int conteggioRipetizioni = 0;

    // Input della stringa
    cout <<"Inserisci la stringa: ";
    cin >> frase; 

    // Verifica dei caratteri ripetuti
    for (i = 0; i < frase.size(); i++) {
        for (j = i + 1; j < frase.size(); j++) {
            if (frase[i] == frase[j]) {
                conteggioRipetizioni++;
                break; // Esci dal loop interno se trovi un carattere ripetuto
            }
        }
        if (conteggioRipetizioni > 0) {
            break; // Esci dal loop esterno se trovi un carattere ripetuto
        }
    }

    // Output del risultato
    if (conteggioRipetizioni > 0) {
        cout <<"Ci sono delle ripetizioni" << endl;
    } else {
        cout <<"Non ci sono ripetizioni" << endl;
    }

    return 0;
}

