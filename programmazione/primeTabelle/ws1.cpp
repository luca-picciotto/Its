#include <iostream>
#include <string>
#define MAX 26

using namespace std;


// Primo Esercizio
// Si scriva un programma C++ che permetta di gestire le squadre di un campionato di calcio.
// Le squadre sono definite da queste informazioni:
// ● nome squadra,
// ● codice squadra,
// ● goal fatti,
// ● goal subiti.
// Costruire un programma che stampi un menu’ di scelta che presenti le seguenti opzioni:
// 1. Inserimento di N squadre di calcio
// 2. Stampa di tutte le squadre che hanno un numero di goal maggiore di quelli subiti
// 3. Dato un codice di una squadra stampare tutti i dati della stessa
// 4. Stampa di tutte le squadre in ordine alfabetico di nome
// 5. Esci


struct Squadra {    //struct per gli attribiti della squadra
    string nome;
    int codice;
    int goalFatti;
    int goalSubiti;
};



int  stampaMenu();      //firme
void inserimentoSquadre(Squadra[], int);
int richiestaN();
void stampaXgol(Squadra[], int);
void stampaXcodice(Squadra[], int);
void stampaAlfabetico(Squadra[], int);



int main(){
    int scelta = 0;
    int N;

    int conferma;       //variabili per l'uscita
    bool esci;      //variabili per l'uscita
    esci = false;       //variabili per l'uscita

    Squadra campionato[MAX];        //tabella con le squadre

    N = richiestaN();

    

    do{
        scelta = stampaMenu();      //funzione per la stampa del menu

        switch(scelta){     //smistamento in base alla scelta
            case 1:  
                inserimentoSquadre(campionato, N);      //richiamo funzione per inserire le squadre nel campionato (con un massimo di 26(MAX))
               cout<<endl; 
               break;
            case 2:
                stampaXgol(campionato, N);      //richiamo funzione per stampare in base si goal
                cout<<endl;
                break;
            case 3:
                stampaXcodice(campionato, N);       //richiamo funzione per stampare il base al codice
                cout<<endl;
                break;
            case 4:
                stampaAlfabetico(campionato, N);        //richiamo funzione per stampare il ordine alfabetico
                cout<<endl;
                break;
            case 5:
                cout<<"Sei sicuro di voler uscire? (0 per SI, 1 per NO): ";     //usicta dal ciclo del menu'
                cin>>conferma;
                    if (conferma == 0)
                        esci = true;
                break;
            default:
                break;
        }
    }while(!esci);
}




int richiestaN(){       //funzione per richiedere il numero di squadre da insirire
    int N;
    do{
        cout<<"Quante squadre vuoi inserire: ";
        cin >> N;
    }while(N <= 0 || N > MAX);

    return N;
}


void inserimentoSquadre(Squadra campionato[], int N){       //funzione per inserire N squadre nella tabella
    int i;
    int j;
    bool controllo;
    
    cout<<endl<<"Inserismento squadre." <<endl;
    for(i = 0; i < N; i++){     //i = singola squadra
        
        
        do{     //controllo
            controllo = false;
            cout<<"Squadra " <<i+1 <<" nome: ";
            cin >> campionato[i].nome;
            
            for(j = 0; j < i; j++){
                if(campionato[i].nome == campionato[j].nome ){
                    controllo = true;
                }
            }
        }while(controllo);
       
        do{     //controllo
            controllo = false;
             cout<<"Squadra " <<i+1 <<" codice: ";
             cin >> campionato[i].codice;
             
             for(j = 0; j < i; j++){
                 if(campionato[i].codice == campionato[j].codice ){
                     controllo = true;
                 }
             }
        }while(controllo);
        
        cout<<"Squadra " <<i+1 <<" goal fatti: ";       //inserimento
        cin >> campionato[i].goalFatti;
        cout<<"Squadra " <<i+1 <<" goal subiti: ";
        cin >> campionato[i].goalSubiti;
    }
}

int stampaMenu(){       //funzione per stampare il menu in modo autonomo
    int scelta;

    cout<<"1. Inserimento di N squadre di calcio" <<endl;
    cout<<"2. Stampa di tutte le squadre che hanno un numero di goal maggiore di quelli subiti" <<endl;
    cout<<"3. Dato un codice di una squadra stampare tutti i dati della stessa" <<endl;
    cout<<"4. Stampa di tutte le squadre in ordine alfabetico di nome" <<endl;
    cout<<"5. Esci" <<endl;

    cout<<"Scegli: ";
    cin>>scelta;

    return scelta;
}

void stampaXgol(Squadra campionato[], int N){       //funzione che controlla quali squadre hanno i g fatti > g subiti e stampa
    int i;
    cout<<endl <<"Le squadre con i goal fatti superiori ai goal subiti sono: " <<endl;
    for(i = 0; i < N; i++){
        if(campionato[i].goalFatti > campionato[i].goalSubiti){
            cout<<"Nome: " <<campionato[i].nome <<endl;
            cout<<"Codice: " <<campionato[i].codice <<endl;
            cout<<endl;
        }
    }
}

void stampaXcodice(Squadra campionato[], int N){        //funzione per stampare la squadra selezionata in base al codice
    int i;
    int j;
    int scelta;     //scelta dell'utente in base al codice
    bool controllo;
    cout<<endl <<"Inserisci il codice della squadra: "<<endl;
    for(i = 0; i < N; i++){
        cout<<"Codice: " <<campionato[i].codice <<" Nome: " <<campionato[i].nome <<endl;        //elenco delle possibili selezioni 
    }
    
    do{     //controllo codice inserito se esistente
        controllo = false;
        cout<<"Scegli un codice esistente: ";
        cin >> scelta;
        
        for(j = 0; j < N; j++){
            if(scelta == campionato[j].codice ){
                controllo = true;
            }
        }
        
    }while(!controllo);
    
    for(i = 0; i < N; i++){     //stampa della squadra selezionata
        if(scelta == campionato[i].codice ){
            cout<<"Nome: " <<campionato[i].nome <<endl;
            cout<<"Codice: " <<campionato[i].codice <<endl;
            cout<<"Goal Fatti: " <<campionato[i].goalFatti <<endl;
            cout<<"Codice: " <<campionato[i].goalSubiti <<endl;
        }
    }
    
}



void stampaAlfabetico(Squadra campionato[], int N) {        //funzione che ordina l'array in ordine alfabetico + stampa
    bool scambio;
    Squadra temp ;
    do {
        scambio = false;
        for (int i = 0; i < N - 1; i++) {
            if (campionato[i].nome > campionato[i + 1].nome) {      // Scambia le squadre
                temp = campionato[i];
                campionato[i] = campionato[i + 1];
                campionato[i + 1] = temp;
                scambio = true;
            }
        }
    } while (scambio);

    // Stampare le squadre ordinate
    cout << "Squadre ordinate in ordine alfabetico di nome:" << endl;
    for (int i = 0; i < N; ++i) {
        cout << "Nome: " << campionato[i].nome << ", Codice: " << campionato[i].codice << ", Goal Fatti: " << campionato[i].goalFatti << ", Goal Subiti: " << campionato[i].goalSubiti << endl;
    }
}