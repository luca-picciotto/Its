#include <iostream>
using namespace std;

void sposta_debiti(int& importo1, int& importo2, int& importo3) {
    // Calcola la somma dei debiti
    int somma_debiti = 0;
    if (importo2 < 0) {
        somma_debiti += importo2;
        importo2 = 0;
    }
    if (importo3 < 0) {
        somma_debiti += importo3;
        importo3 = 0;
    }
    // Sposta la somma dei debiti solo sul primo importo
    importo1 += somma_debiti;
}

int main() {
    int importo1, importo2, importo3;

    cout << "Inserisci tre importi: ";
    cin >> importo1 >> importo2 >> importo3;

    sposta_debiti(importo1, importo2, importo3);

    cout << "Importi dopo l'applicazione della funzione: " << importo1 << " " << importo2 << " " << importo3 << endl;

    return 0;
}
