#include <iostream>
using namespace std;

// Creare una funzione che restituisca se un numero intero è naturale o no.
// Creare poi un programma che riceva un numero n (passato dall’utente). Nel caso questo
// sia naturale, richieda all’utente di inserire altri n numeri e alla fine stampi quanti di questi
// sono naturali.
// Ricorda i numeri naturali sono numeri interi N >= 0
// Es: 4 è un numero naturale, -5 non è un numero naturale.
int richiestaNumero(){
    int n;
    cout<<"Inserisci il numero: ";
    cin>>n;

    return n;
}
void verificaNaturale(int n){
    if(n >= 0){
        cout<<"Il numero e' naturale!"<<endl;
    } else {
        cout<<"Il numero non e' naturale!"<<endl;
    }
}
int conteggioNaturali(int n, int conteggio){


    if(n >= 0){
        conteggio ++;
    } 
    cout<<conteggio<<endl;
    return conteggio;
}

int main(){

    int numero;
    int conteggio;
    
    conteggio = 0;
    do{
        numero = richiestaNumero();

        verificaNaturale(numero);

        conteggio = conteggioNaturali(numero, conteggio);
    }while(numero >= 0);

    cout<<"Hai messo "<<conteggio <<" numeri naturali"<<endl;


    return 0;
}

