#include <iostream>
using namespace std;

// Secondo Esercizio
// Dopo aver letto e memorizzato N numeri reali in un array , N dato in input, calcolare la
// somma di quelli negativi e, successivamente, sovrascrivere il loro valore con zero.
// Stampare la somma calcolata e l’array modificato.

int richiediNumero();
void caricaArray(int[], int);
void stampaArray(int[], int);
int sommaNegativi(int[], int);


int main(){
    
    int n;
    int somma;
    

    n = richiediNumero();
    
    int array[n];
    
    caricaArray(array, n);

    // stampaArray(array, n);

    somma = sommaNegativi(array, n);
    stampaArray(array, n);

    return 0;
}

int richiediNumero(){
    int n;

    cout<<"Insescisci numero: ";
    cin >> n;

    return n;
}

void caricaArray(int a[], int n){
    int i;

    for(i = 0; i < n; i++){
        cout<<"Posizione " <<i + 1 <<": ";
        cin >> a[i];
    }
}

void stampaArray(int a[], int n){
    int i;

    for(i = 0; i < n; i++){
        cout<<"Posizione " <<i + 1 <<": " <<a[i] <<endl;
    }
}

int sommaNegativi(int a[], int n){
    int i;
    int somma; 

    somma = 0;

    for(i = 0; i < n; i++){
        if(a[i] < 0){
            somma += a[i];

            a[i] = 0;
        }
    }
    cout<< "Somma: " <<somma <<endl;
    return somma;
}