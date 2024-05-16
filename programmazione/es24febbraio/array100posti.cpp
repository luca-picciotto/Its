#include <iostream>
#include <windows.h>

const int MAX = 100;

// Primo Esercizio
// Memorizzare in un array di 100 posti i primi cento numeri naturali in ordine inverso.

void caricaArray(int[]);
void stampaArray(int[]);


using namespace std;

int main(){

    int array[MAX];

    caricaArray(array);

    stampaArray(array);

    return 0;
}

void caricaArray(int a[]){
    int i;

    for(i = 0; i < MAX; i++){
        a[i] = MAX - i;
    }
}

void stampaArray(int a[]){
    int i;

    for(i = 0; i < MAX; i++){
       cout<<"Posizione " <<i+1 <<": " <<a[i] <<endl;
    }
}