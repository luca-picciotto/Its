#include <iostream>
using namespace std;

// Terzo Esercizio
// Leggere un array di interi di N posizioni, N dato in input. Leggere un ulteriore numero intero
// M e dire quanti numeri memorizzati nell’array sono inferiori e quanti superiori di M

int richiediNumero();
void caricaArray(int[], int);
void stampaArray(int[], int);
int controlloInferiori(int[], int, int);

int main(){
    
    int n;
    int m;
    int inferiori;


    n = richiediNumero();

    m = richiediNumero();
    
    int array[n];
    
    caricaArray(array, n);

    inferiori = controlloInferiori(array, n, m);

    cout<<"Ci sono " <<inferiori <<" numeri inferiori a " <<m <<endl;

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

int controlloInferiori(int a[], int n, int m){
    int i;
    int contatore;
    contatore = 0;
    for(i = 0; i < n; i++){
        if(a[i] < m){
            contatore ++;
        }
    }

    return contatore;
}
