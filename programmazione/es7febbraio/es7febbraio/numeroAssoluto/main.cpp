#include <iostream>
using namespace std;

//Creare una funzione che calcoli e restituisca il valore assoluto di un numero intero. Nel
//programma main andare a provare la funzione implementata provandola con due numeri
//differenti.

int valoreAssoluto(int numero){
	int assoluto;
	
	 if (numero < 0) {
        assoluto = -numero;
    } else {
        assoluto = numero;
    }
    
    return assoluto;
}

int main()
{
// Dichiarazione variabili
	int numero;
	int assoluto;
	int scelta; 
	
	scelta = 1;
// Sezione di input Dati
	do{
		cout<<"Inserisci il numero: ";
		cin>>numero;
		
		assoluto = valoreAssoluto(numero);
		cout<<"Il valore assoluto del nuemero " <<numero <<" vale: " <<assoluto <<endl;
		
		cout<<"Continuare? ( 0: No; 1: Si )";
		cin>>scelta;
		
	}while(scelta == 1);

	
// Elaborazione
	
// Eventuali sotto processi di Elaborazione
// ---
// ---
// Sezione di output
return 0;
}
