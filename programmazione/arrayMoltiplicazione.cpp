#include <iostream>
using namespace std;


void caricaArray(int[]);
void stampaArray(int[]);
int moltiplicaArray(int[]);

int main(){
    int array[10];
    int moltipicazione;
    caricaArray(array);
    stampaArray(array);

    moltipicazione = moltiplicaArray(array);
    cout<<"La moltiplicazione vale: " <<moltipicazione <<endl;
}

void caricaArray(int a[]){
    for(int i = 0; i < 10; i++){
        cout<<"Inserisci il valore " <<i+1 <<": ";
        cin>>a[i];
    }


}
void stampaArray(int a[]){
      for(int i = 0; i < 10; i++){
        cout<<"Valore in posizione " <<i+1 <<": "<<a[i] <<endl;

    }
}

int moltiplicaArray(int a[]){
    int moltiplicazione;
    moltiplicazione = 1;

    for(int i = 0; i < 10; i++){
        moltiplicazione *= a[i];
    }

    return moltiplicazione;
}