//Creare una funzione che riceva una quantità di tempo in formato ore, minuti e secondi e la
//restituisca espressa solamente in secondi.
//Creare un programma principale che chieda in input all’utente due quantità di tempo e
//stampi in output quale quantità di tempo è maggiore


#include <iostream>
using namespace std;

	int calcolaTempo(int ore, int minuti, int secondi){
		int tempoTotale;
		
		tempoTotale = ore * 60;
		tempoTotale += minuti * 60;
		tempoTotale += secondi;
		
		return tempoTotale;
		
	}
	
	
int main()
{
// Dichiarazione variabili

	int ore, minuti, secondi;
	int i;
	int tempo, tempo1;
	
	
// Sezione di input Dati
		cout<<"Inserisci ore: ";
		cin>>ore;
		cout<<"Insersici minuti: ";
		cin>>minuti;
		cout<<"Inserisci secondi: ";
		cin>>secondi;
		
		tempo = calcolaTempo(ore, minuti, secondi);
		
		cout<<"Inserisci ore: ";
		cin>>ore;
		cout<<"Insersici minuti: ";
		cin>>minuti;
		cout<<"Inserisci secondi: ";
		cin>>secondi;
		
		tempo1 = calcolaTempo(ore, minuti, secondi);
	
	
	if(tempo > tempo1)
		cout<<"Il primo tempo e' maggiore"<<endl;
	else if(tempo < tempo1)
		cout<<"Il secondo tempo e' minore"<<endl;
	else if(tempo == tempo1)
		cout<<"I tempi sono uguali"<<endl;

	
	

// Elaborazione
// Eventuali sotto processi di Elaborazione
// ---
// ---
// Sezione di output
return 0;
}
