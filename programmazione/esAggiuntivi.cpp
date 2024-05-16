#include <iostream>
#include <ctime>

using namespace std;

int n = 100;
int k = 55;

void caricaArray(int[]);
void ordinaArrayCrescente(int[]);
void stampaArray(int[]);
int ricercaKLineare(int[]);
int trovaMassimo(int[]);
int trovaMinimo(int[]);
int ricercaKBinaria(int[]);


int main(){
    int a[n];
    int posizione; 
    int max, min;

    srand(time(NULL));

    caricaArray(a);
    stampaArray(a);

    max = trovaMassimo(a);
    cout<<"Il valore massimo e': " <<max <<endl;
    min = trovaMinimo(a);
    cout<<"Il valore minimo e': " <<min <<endl;
    
    posizione = ricercaKLineare(a);
    
    if(posizione > n){
        cout<<"K non trovata! " <<endl;
    } else {
        cout<<"K si trova in indice: " <<posizione <<endl;
    }
    
    ordinaArrayCrescente(a);
    stampaArray(a);

    ricercaKBinaria(a);

    
    
}

void caricaArray(int a[]){
    int i;
    for(i = 0; i < n; i++){
        a[i] = rand()%100;
    }
}

void ordinaArrayCrescente(int a[]){
    int i, j;
    int tmp;


    for(i = 0; i < n-1; i++){
        for(j = i +1; j < n; j++){
            if(a[i] > a[j]){
                tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
    }
}

void stampaArray(int a[]){
    int i;

    for(i = 0; i < n; i++){
        cout<<"Posizione " <<i <<": " <<a[i] <<endl;
    }
}

int ricercaKLineare(int a[]){
    int i;
    int p = 101;

    for(i = 0; i < n && p == 101; i++){
        if(a[i] == k){
            p = i;
        } else {
            p = 101;
        }
    }

    return p;
}

int trovaMassimo(int a[]){
    int i;
    int max;

    max = a[0];

    for(i = 1; i < n; i++){
        if(a[i] > max)
            max = a[i];
    }

    return max;
}

int trovaMinimo(int a[]){
    int i;
    int min;

    min = a[0];

    for(i = 1; i < n; i++){
        if(a[i] < min)
            min = a[i];
    }

    return min;
}

int ricercaKBinaria(int a[]){
    int t = 0;
    int u = n;

    int i;
   

    do{
        i = (t+u)/2;
        if(k != a[i]){
            if(k > a[i]){
                t = i + 1;
            } else {
                u = i - 1;
            }
        }
    }while(t <= u && k != a[i]);
    
    if( k != a[i]) {
        cout<<"Elemento non trovato!" <<endl;
    } else {
        cout<<"Elemento trovato in indice: " <<i <<"!" <<endl;
    }
}
