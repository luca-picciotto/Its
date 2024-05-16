#include <iostream>
using namespace std;

// Settimo Esercizio
// Leggere un array di N interi, N dato in input. Stampare solo i numeri che appaiono nell’array
// una volta soltanto.
// Esempio: se l’array contiene 1, 2, 3, 1, 2, 4 il programma stamperà 3, 4 .

int richiediNumero();
void caricaArray(int[], int);
void stampaArray(int[], int);

int main(){
    int n;
    
    n = richiediNumero();
  
    int array[n];
    
    caricaArray(array, n);


    return 0;
}


int richiediNumero(){
    int n;
    cout <<"Inserici grandezza array: ";
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