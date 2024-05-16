// Progettare una funzione che verifichi se il carattere dato in input sia una lettera maiuscola.
// Creare un programma che faccia inserire all’utente tre caratteri e stampi quale di questi sia
// maiuscolo. Stampare anche il numero totale dei caratteri maiuscoli.
#include <iostream>
using namespace std;


void riconoscimentoMaiuscolaMinuscola(char c[3]){
    int i;

    for(i = 0; i < 3; i++){
        if(c[i] >= 65 && c[i] <= 90){
            cout<<"La lettera "<<c[i] <<" e' maiuscola"<<endl;    //MAIUSCOLA
        } else if (c[i] >= 97 && c[i] <= 122) {
            cout<<"La lettera "<<c[i] <<" e' minuscola"<<endl;
        }
            
    }
}




int main()
{

    char lettera[3];
    int i;
 

    for(i = 0; i <3; i++){
        cout<<"Inserisci una lettra: ";
        cin>>lettera[i];
    }
    for(i = 0; i <3; i++)
        cout<<lettera[i]<<endl;

    riconoscimentoMaiuscolaMinuscola(lettera);
return 0;
}
