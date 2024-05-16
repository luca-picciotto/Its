#include <iostream>
#include <string>
#include <cstring>
using namespace std;


/*Si abbia in input una stringa, si vuole in output la stessa stringa con le lettere minuscole
trasformate in maiuscole.*/
int main()
{
    // Dichiarazione variabili
    string parola;
    // string parola2;
    // char cartattere;
    int lunghezza;
    int i;

    // Inizializzazioni variabili
  
    // Sezione di input Dati
    cout << "Inserisci una stringa";
    getline(cin, parola);
    lunghezza = parola.size();
    
    // Elaborazione
    for(i = 0; i < lunghezza;  i++){
        if(parola[i] >= 97 && parola[i] <= 122){
            // cartattere = parola[i];
            // cartattere -= 32;
            // cout <<cartattere <<endl;
            parola[i] -= 32;
            // cout<<parola2 <<endl;
        }

        else if( parola[i] >= 65 && parola[i] <= 92)
            // cartattere = parola[i];
            // cartattere += 32;
            // cout << cartattere <<endl; 
            parola[i] += 32;
            // cout<<parola2 <<endl;
    }
    cout << "La stringa invertita: " <<parola<<endl;
    // Eventuali sotto processi di Elaborazione
    // ---
    // ---
    
    // Sezione di output
    
    return 0;
}