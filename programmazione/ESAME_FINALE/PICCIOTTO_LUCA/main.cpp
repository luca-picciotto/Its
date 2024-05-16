#include "function.h"

/* Programma principale
Contine la struttura del menu di selezione, che a sua volta conterrà le chiamate per utilizzare le funzioni selezionate
*/
int main(){
    AutoVetture concessionario[N_MAX];
    int N;
    N = 0;
    int scelta;
    bool esci;
    esci = false;
    do{ 
        scelta = sceltaVoceMenu();
        switch (scelta) {
            case 1:
                inserimentoAutovetture(concessionario, N);
                break;
            case 2:
                cout <<"Sono presenti " <<N <<" autovetture." <<endl;
                break;
            case 3: 
                stampaAutoNonVendute(concessionario, N);
                break;
            case 4: 
                stampaAutoAlfabetico(concessionario, N);
                break;
            case 5: 
                stampaXcilindrataMaggiore(concessionario, N);
                break;
            case 6:
                eliminaXanno(concessionario, N);
                break;
            case 7: 
                usictaCiclo(esci);
                break;
            }
    }while(esci == false);


    return 0;
}
