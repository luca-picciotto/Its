#include <iostream>
using namespace std;

// Quinto Esercizio
// Leggere un array di N posizioni, N dato in input. Dire se ogni valore memorizzato nell’array
// è minore del quadrato del numero nella cella precedente.

int richiediNumero();
void caricaArray(int[], int);
void stampaArray(int[], int);
bool controlloQuadrato(int[], int);


int main(){
    
    int n;
    bool controllo;

    n = richiediNumero();
  
    int array[n];
    
    caricaArray(array, n);

    controllo = controlloQuadrato(array, n);
    if(controllo == false){
        cout<<"Non tutti i numeri sono inferiori al quadrato del numero che precede"<<endl;
    }else {
        cout<<"Tutti i numeri sono inferiori al quadrato del numero che precede"<<endl;
    }

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

bool controlloQuadrato(int a[], int n){
    int i;
    bool controllo;

    controllo = true;

    for(i = 1; i < n && controllo == true; i++){
       if(a[i] >= (a[i-1] * a[i-1]))
        controllo = false;
    }

    return controllo;
}