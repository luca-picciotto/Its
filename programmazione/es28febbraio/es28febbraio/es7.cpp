#include <iostream>
using namespace std;

// Leggere un array di N interi, N dato in input. Stampare solo i numeri che appaiono nell’array
// una volta soltanto.
// Esempio: se l’array contiene 1, 2, 3, 1, 2, 4 il programma stamperà 3, 4 .

int richiediNumero();
void caricaArray(int[], int);
void stampaArray(int[], int);

int main() {
    int n;
    bool ordinati;

    n = richiediNumero();

    int array[n];

    caricaArray(array, n);
    
    stampaArray(array, n);
    
    return 0;
}

int richiediNumero() {
    int n;

    cout << "Inserisci il numero di elementi: ";
    cin >> n;

    return n;
}

void caricaArray(int a[], int n) {
    for (int i = 0; i < n; i++) {
        cout << "Posizione " << i + 1 << ": ";
        cin >> a[i];
    }
    cout<<endl; 
}

// void stampaArray(int a[], int n) {
    
//     for (int i = 0; i < n; i++) {
//         bool trovato = false;
//         for(int j = i + 1 ; j < n; j++){
//             if( a[i] == a[j]){
//                 trovato = true;
                
//             }
            
//         }
//       if(trovato == false){
//                     cout<< "Posizione " << i + 1 << ": " << a[i] << endl;
//         } 
        
//     }
// }

void stampaArray(int a[], int n) {
    
    for (int i = 0; i < n; i++) {
        int conteggio = 0;
        for(int j = 0 ; j < n; j++){
            if( i != j && a[i] == a[j]){
                conteggio ++;
                
            }
            
        }
        if(conteggio == 0){
            cout<< "Posizione " << i + 1 << ": " << a[i] << endl;
        } 
        
    }
}