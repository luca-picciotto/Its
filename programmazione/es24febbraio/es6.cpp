#include <iostream>
using namespace std;

// Sesto Esercizio
// Leggere un array di numeri reali di N posizioni, N dato in input. Stampare il numero che
// compare più volte all’interno dell’array, qualora ci siano più numeri che compaiono lo
// stesso numero di volte stampare quello che compare per primo.



int richiediNumero();
void caricaArray(int[], int);
void stampaArray(int[], int);
int conteggioUguali(int[], int);

int main(){
    
    int n;
    
    n = richiediNumero();
  
    int array[n];
    
    caricaArray(array, n);


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

int conteggioUguali(int a[], int n){
    int i;
    int ii;
    int uguale;

    for(i = 0; i < n; i++){
        for(ii = 0; ii < n; ii++){
            if(a[i] == a[ii]){
                uguale = a[i];
            }
        }
    }
}