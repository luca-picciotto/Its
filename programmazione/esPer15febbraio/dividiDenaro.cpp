#include <iostream>
using namespace std;

//Due persone hanno una quantità di denaro x e y. Richiamare una funzione che “livelli” le
//quantità di denaro in maniera tale da equilibrare tale quantità tra i due.

float richiediDenaro(){
	
	float denaro;
	
	cout<<"Inserisci la tua somma di denaro: ";
	cin>> denaro;
	
	return denaro;
}

float dividiDenaro(float denaro1, float denaro2){

	float somma;
	
	somma = (denaro1 + denaro2) / 2;
	
	return somma;
	
}
void stampa( float denaroD2, float denaro1, float denaro2){
	cout<<"L'utente 1 ha: " <<denaro1 <<endl <<"L'utente 2 ha: " <<denaro2 <<endl <<"Entrambi gli utenti avranno " <<denaroD2 <<" euro" <<endl;
}

int  main(){
 	float denaro1;
 	float denaro2;
 	
 	float denaroD1;
 	float denaroD2;
 	
 	denaro1 = richiediDenaro();
 	denaro2 = richiediDenaro();
 	
 	denaroD1 = dividiDenaro(denaro1, denaro2);
 	denaroD2 = dividiDenaro(denaro1, denaro2);

 	stampa(denaroD2, denaro1, denaro2);
 	
 }