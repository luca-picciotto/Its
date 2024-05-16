#include <iostream>
using namespace std;

// Si legga una sequenza di numeri. Terminare la lettura quando si incontra un numero
// dispari. In output si stampa quanti numeri sono stati letti e quanti fra essi sono risultati
// diversi da zero.

int sequenza();
bool controlloDispari(int);
int controlloDiversiZero(int, int);





int main(){
    int n;
    bool controllo;
    int contatore; 
    int contatoreZero;

    contatore = 0;
    contatoreZero = 0;
    do{
        n = sequenza();
        contatore ++;
        contatoreZero = controlloDiversiZero(n, contatoreZero);
    } while(controllo = controlloDispari(n) == false);

    cout<<"Hai inserito " <<contatore <<" di cui " <<contatoreZero <<" sono diversi da zero." <<endl;

}





int sequenza(){
    int n;

    cout<<"Inserisci numero: ";
    cin>>n;

    return n;
}

bool controlloDispari(int n){
    bool controllo = false;

    if(n%2 == 1){
        controllo = true;
    }

    return controllo;
}

int controlloDiversiZero(int n, int contatore){

    if(n != 0){
        contatore ++;
    }
    cout<<endl<<contatore<<endl;
    return contatore;
}

