//1 Esercizio : Studenti
//Realizzare un programma che chieda all’utente di inserire l’età e la materia di studio. La
//materia di studio viene rappresentata utilizzando il seguente prospetto:
//? 1 -> Informatica
//? 2 -> Fisica
//? 3 -> Matematica
//In output si deve mostrare un messaggio simile ai seguenti:
//? "Ciao, hai 20 anni e studi Informatica."
//? "Ciao, hai 22 anni e studi Matematica."





#include <iostream>
using namespace std;

int main() {
	
	int eta;
	int contatore;
	int corso;


	contatore = 0;
	do{
		if(contatore != 0)
			cout<<"Non potresti frequentare nessun corso!"<<endl;
		cout<<"Inserisci un numero intero potitivo: ";		//richiest input
		cin>>eta;
		contatore++;
	}while(eta < 14);
	
	contatore = 0;
	do{
		if(contatore != 0)
			cout<<"Nessun corso selezionato"<<endl;
		cout<<"Seleziona il corso: \n1 -> Informatica \n2 -> Fisica \n3 -> Matematica \nScelta: ";		//richiest input
		cin>>corso;
		contatore++;
	}while(corso != 1 && corso != 2 && corso != 3);
	
	switch(corso){
		case 1:
			cout<<"Ciao, hai "<<eta <<" e frequenti il corso di Informatica!"<<endl;
			break;
		case 2:
			cout<<"Ciao, hai "<<eta <<" e frequenti il corso di Fisica!"<<endl;
			break; 
		case 3:
			cout<<"Ciao, hai "<<eta <<" e frequenti il corso di Matematica!"<<endl;
			break;
	}
	
	

    return 0;
}
