#include <iostream>
#include <string>
using namespace std;
int main()
{

// Si abbia in input una stringa, in output si vuole sapere se la stringa contiene doppie


// Dichiarazione variabili
    string frase; 
    int lunghezza; 
    int i; 
    int conteggioDoppie;

// Inizializzazioni variabili
    conteggioDoppie = 0;
// Sezione di input Dati
    cout <<"inserisci la stringa: ";
    cin >> frase;
    

    lunghezza = frase.size();

    for(i = 0; i < lunghezza; i++){
        if(frase[i] == frase[i-1]){
            conteggioDoppie ++;
        }
    }

    cout << "la stringa contiene " <<conteggioDoppie<<endl;
// Eventuali sotto processi di Elaborazione
// ---
// ---
// Sezione di output
return 0;
}
