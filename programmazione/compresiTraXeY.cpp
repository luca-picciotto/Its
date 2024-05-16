#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

// Scrivere una funzione che dati due numeri interi x e y, calcoli la somma di tutti i numeri
// dispari compresi tra x e y. Costruire un programma che richiami n volte la funzione su n
// differenti intervalli (n dato in input).
// Suggerimento: utilizzare la funzione di generazione di numeri pseudocausali.



int numeroCasuale();
int sommaDispari(int, int);
int richiediVolte();



int main(){
    int x;
    int y;
    int somma;
    int volte;
    int i;

    volte = richiediVolte();
    
    srand(time(NULL));

    for(i = 0; i < volte; i++) {


        x = numeroCasuale();
        y = numeroCasuale();

        somma = sommaDispari(x, y);
        cout<<somma<<endl;
    }

}


int numeroCasuale(){
    int num;
    // estrae numero casuale
    num = rand()%101;
    cout << "\n***** " << num<<endl;;
    return num;
}
int sommaDispari(int x, int y){
    int somma = 0;
    int i;
    if(x < y){
        for(i = x; i <= y; i++ ){
            if(i%2 == 1)
                somma += i;
        }
    } else if(x > y){
        for(i = y; i <= x; i++ ){
            if(i%2 == 1)
                somma += i;
        }
    }

    return somma;
}

int richiediVolte(){
    int n;

    do{
        cout<<"Quante coppie voui richiedere: ";
    cin>>n;
    }while(n <= 0);
    
    
    return n;
}
