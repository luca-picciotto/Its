#include <iostream>
#include <string>
using namespace std;
int main()
{

// Si abbiano in input una stringa e un carattere. In output si vuole il conteggio di quante volte
// quel carattere è contenuto nella stringa.


// Dichiarazione variabili
    char carattere;
    string frase; 
    int lunghezza; 
    int i; 
    int conteggioCarattere;

// Inizializzazioni variabili
    conteggioCarattere = 0;
// Sezione di input Dati
    cout <<"inserisci la stringa: ";
    cin >> frase; 
    cout <<"inserisci il caratter che desideri controllare: ";
    cin >> carattere;

    lunghezza = frase.size();

    for(i = 0; i < lunghezza; i++){
        if(frase[i] == carattere){
            conteggioCarattere ++;
        }
    }

    cout << "il carattere: " <<carattere <<" e' contenuto: " <<conteggioCarattere <<" volte."<<endl;
    


// Elaborazione
// Eventuali sotto processi di Elaborazione
// ---
// ---
// Sezione di output
return 0;
}