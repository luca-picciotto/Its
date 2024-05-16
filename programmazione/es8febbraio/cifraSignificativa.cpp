#include <iostream>
#include <string>

using namespace std;

// Creare una funzione che calcoli la cifra più significativa di un numero intero.
// Quindi nel programma principale leggere due numeri interi verificando se la cifra più
// significativa del prodotto dei due numeri è minore di quella della loro somma.
// Esempio: primo numero: 325 secondo numero 1216
// prodotto: 3*1= 3 Somma: 3+1=4 minore è il prodotto.

int richiestaNumero(){
    int n;

    cout<<"Inserisci numero: ";
    cin>>n;

    return n;
}
int verificaSignificativo(int n){
    string cifraNumero = to_string(n);
    int cifra = to_integer(cifraNumero[0]);
    return cifra;
}

int main(){
    int numero1, numero2;
    int cifra1, cifra2;

    numero1 = richiestaNumero();
    numero2 = richiestaNumero();

    cifra1 = verificaSignificativo(numero1);
    cifra2 = verificaSignificativo(numero2); 

    cout<<cifra1<<endl <<cifra2<<endl;  
}