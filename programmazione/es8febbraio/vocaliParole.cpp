#include <iostream>
using namespace std;

// Creare una funzione che restituisca se un carattere è una vocale.
// Creare un programma che faccia inserire la lunghezza di due parole (le due parole
// possono avere lunghezze diverse) e poi faccia inserire le due parole un carattere alla volta.
// Alla fine il programma stampa per ogni parola quante vocali contiene.
// Esempio:
// INPUT: lungh. prima parola: 4 lungh. seconda parola: 8
// prima parola: CIAO seconda parola: RIUNIONE
// OUTPUT: Vocali prima parola: 3 Vocali seconda parola: 5
// Suggerimento: creare una funzione che richieda di inserire una parola e che restituisca il
// numero di vocali.
int richiestaLunghezza(){
    int lunghezza;
    cout<<"Lunghezza parola: "<<endl;
    cin>>lunghezza;

    return lunghezza;
}
int richiestaParola(int lunghezza){
    int i;
    char c;
    int conteggio;

    conteggio = 0;

    cout<<"Inserisci parola: "<<endl;
    for(i = 0; i < lunghezza; i++){
        cin>>c;
        
        switch (c) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            conteggio ++;
            break;
        default:
            break;
        }
    }
    
    return conteggio;
}

int main(){
    int lunghezza1, lunghezza2;
    int conteggio;

    lunghezza1 = richiestaLunghezza();
    lunghezza2 = richiestaLunghezza();

    conteggio = richiestaParola(lunghezza1);
    cout<<"Vocali prima parola: "<<conteggio<<endl;

    conteggio = richiestaParola(lunghezza2);
    cout<<"Vocali seconda parola: "<<conteggio<<endl;
    

}