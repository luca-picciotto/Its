#include <iostream>
using namespace std;


//Creare una funzione che ricevuti due interi che rappresentano numeratore e denominatore
//di una frazione, riduca la frazione ai minimi termini.
//Creare poi un programma che legga due frazioni le riduca ai minimi termini e verifichi se
//abbiano lo stesso denominatore.
//Suggerimento: cercare sul web l’algoritmo che semplifichi una frazione ai minimi termini
//oppure l’algoritmo per calcolare l’M.C.D. tra due numeri.

int mcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Funzione per semplificare una frazione ai minimi termini
void semplifica_frazione(int& numeratore, int& denominatore) {
    int divisore_comune = mcd(numeratore, denominatore);
    numeratore /= divisore_comune;
    denominatore /= divisore_comune;
}

void verificaDenominatore(int denominatore, int denominatore1){
	if(denominatore == denominatore1){
		cout <<"I denominatori sono uguali" <<endl;
	} else {
		cout <<"I denominatori non sono uguali" <<endl;
	}
}

int main() {
    int numeratore, denominatore;
	int numeratore1, denominatore1;
	    
    cout << "Inserisci il numeratore: ";
    cin >> numeratore;
    cout << "Inserisci il denominatore: ";
    cin >> denominatore;

    semplifica_frazione(numeratore, denominatore);

    cout << "La frazione semplificata ai minimi termini e': " << numeratore << "/" << denominatore << endl;
	
	
	cout << "Inserisci il numeratore: ";
    cin >> numeratore1;
    cout << "Inserisci il denominatore: ";
    cin >> denominatore1;

    semplifica_frazione(numeratore1, denominatore1);

    cout << "La frazione semplificata ai minimi termini e': " << numeratore1 << "/" << denominatore1 << endl;
    
    verificaDenominatore( denominatore, denominatore1);
	
    return 0;
}