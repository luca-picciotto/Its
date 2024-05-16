#include <iostream>
using namespace std;

// Creare una funzione che calcoli il prodotto e la somma tra tre numeri interi e restituisca la
// differenza tra il prodotto e la somma calcolati.
// Creare poi un main che consenta di usare la funzione.
int sommaProdotto(int n1, int n2, int n3){
    int somma; 
    int prodotto;
    int risultato; 

    somma = n1 + n2 + n3;

    prodotto = n1 * n2 * n3;

    risultato = prodotto - somma; 

    cout<<"La differenza tra il prodotto e la somma calcolati vale: "<<risultato<<endl;
    return risultato;
}

int main(){
    int numero1, numero2, numero3;
    int risultato;
    int scelta, esci;
    
    scelta = 0;
    do{
        cout<<"Inserisci il primo numero: ";
        cin>>numero1;
        cout<<"Inserisci il secondo numero: ";
        cin>>numero2;
        cout<<"Inserisci il terzo numero: ";
        cin>>numero3;
        
        risultato = sommaProdotto(numero1, numero2, numero3);

        
	
        do{
            cout<<"Vuoi uscire? (0 per NO, 1 per SI): ";
            cin>>esci;
        }while(esci < 0 || esci > 1);
		if(esci == 1)
            scelta = 1;

    } while(scelta == 0);
        

}