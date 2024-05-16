/*
Autore: Luca Picciotto
Data: 21/03/2024
Titolo: 
    Primo Esercizio
    Si scriva un programma per gestire una tabella che descrive un insieme di lattine
    cilindriche atte a contenere alimenti. In particolare, ogni record sarà composto da una
    stringa di descrizione del contenuto (p.e. “fagioli”), l’altezza della lattina (p.e. 12) e il raggio
    della lattina (p.e. 7) entrambi in centimetri. Dopo aver fatto popolare la tabella dall’utente,
    il programma richiede all’utente di scegliere le diverse elaborazioni indicate dalle seguenti
    opzioni:
        1. Stampa del numero di record totali inseriti
        2. Ricerca di una lattina data la descrizione. (La ricerca deve essere effettuata
            utilizzando l’algoritmo di ricerca dicotomico)
        3. Stampa dei soli record che presentano un’altezza della lattina maggiore di un valore
            inserito in input dall’utente.
        4. Stampa di tutti i record ordinati per volume decrescente (Formula volume del
            cilindro: 2*pigreco*raggio*altezza)
        5. Uscita (con conferma)
*/



#include <iostream>
#include <string>
using namespace std;
#define N_MAX 100

//Struct:

struct Lattina{
    string descrizione;
    int altezza;
    int raggio;
};

// Funzioni:

/* Funzione: richiestaN():
    Richiede in input il numero di lattine.

    Nessun parametro passato;

    Valore di ritorno:
    int N -> numero di lattine che l'utente desidera caricare
*/
int richiestaN(){
    int N;
    do{
        cout<<"Quante lattine vuoi inserire: ";
        cin >> N;
    }while(N <= 0 || N >= N_MAX);       //controllo che sia > di 0 e < di N_MAX
    
    return N;
}


/* Funzione: inserimentoLattine():
    Richiede in input N lattine

    Lattina lattine[]   ->  tabella che contiene le lattine
    int N   ->  numero di lattine da inserire

    Valore di ritorno:
    Nessun valore di ritorno
*/
void inserimentoLattine(Lattina lattine[], int N){
    int i;
    int j;
    bool controllo;
    for(i = 0; i < N; i++){
        
        do{
            controllo = false;
            cout <<"Descrizione "<<i+1 <<" lattina: ";
            cin.ignore();
            getline(cin, lattine[i].descrizione);       //ignoro lo spazio per permettere di inseire una descrizione composta da + parole
            for(j = 0; j < i; j++){
                if(lattine[j].descrizione == lattine[i].descrizione){
                    controllo = true;
                }
            }
        }while(controllo == true);
        
        do{
            cout <<"Altezza "<<i+1 <<" lattina: ";
            cin >> lattine[i].altezza;
        }while(lattine[i].altezza <= 0);        //controllo solo se è minore di 0 per permettere l'inserimento di lattine di fomato grande

        do{
            cout <<"Raggio "<<i+1 <<" lattina: ";
            cin >> lattine[i].raggio;
        }while(lattine[i].raggio <= 0);     //controllo solo se è minore di 0 per permettere l'inserimento di lattine di fomato grande
        cout <<endl;
    }
}



/* Funzione: sceltaVoceMenu():
    Funzione che stampa e fa selezionare la voce del menu

    Nessun parametro

    Valore di ritorno:
    int scelta  ->  voce selezionata
*/
int sceltaVoceMenu(){
    int scelta;
    cout <<endl;
    do{
        cout <<"1. Stampa del numero di record totali inseriti" <<endl;
        cout <<"2. Ricerca di una lattina data la descrizione" <<endl;
        cout <<"3. Stampa dei soli record che presentano un altezza della lattina maggiore di un valore" <<endl;
        cout <<"4. Stampa di tutti i record ordinati per volume decrescente" <<endl;
        cout <<"5. Uscita " <<endl;

        cout <<"Scelta: ";
        cin >> scelta;
    }while (scelta <= 0 || scelta > 5);
    
    return scelta;
}

/* Funzione: usictaCiclo():
    Funzione che permette allutente di uscire dal menu

    Parametri:
    bool esci   ->  passato per riferimento, voce di controllo per uscire

    Valore di ritorno:
    Nessun valore di ritorno
*/
void usictaCiclo(bool &esci){
    bool conferma;

    cout<<"Esci ..."<<endl;
    cout<<"     Sicuro di voler uscire?"<<endl<<"0 No;\n1 Si;"<<endl;
    //conferma uscita
    do{
        cin>>conferma;
    }while(conferma < 0 || conferma > 1);
    
    if(conferma == 1){
        esci = true;
    } else{
        esci = false;
    }
}


/* Funzione: stampaLattina():
    Funzione stampa una lattina in base alla posizion passata

    Lattina lattine[]   ->  tabella che contiene le lattine
    int N   ->  numero di lattine da inserire
    int i   ->  posizione da stampare

    Valore di ritorno:
    Nessun valore di ritorno
*/
void stampaLattina(Lattina lattine[], int N, int i, int controllo){
    if(controllo == 0){
        cout <<"========================================"<<endl;
        cout <<" Descrizione  ||  Altezza  ||  Raggio  " <<endl;
        cout <<"========================================"<<endl;
    }
    
    cout <<"  "<<lattine[i].descrizione <<"\t\t" <<lattine[i].altezza <<"\t\t" <<lattine[i].raggio <<endl;
    
}

/* Funzione: ordinaAlfabetico():
    Funzione che ordina in ordine alfabetico l'elenco

    Lattina lattine[]   ->  tabella che contiene le lattine
    int N   ->  numero di lattine da inserire

    Valore di ritorno:
    Nessun valore di ritorno
*/
void ordinaAlfabetico(Lattina lattine[], int N){
    int i;
    int j;
    Lattina tmp;


    for(i = 0; i < N; i++){
        bool scambio;
        do {
            scambio = false;
            for (i = 0; i < N - 1; i++) {
                if (lattine[i].descrizione > lattine[i + 1].descrizione) {      // Scambia le lattine
                    tmp = lattine[i];
                    lattine[i] = lattine[i + 1];
                    lattine[i + 1] = tmp;
                    scambio = true;
                }
            }
        } while (scambio);
    }

    
}

/* Funzione: algoritmoRicerca():
    Funzione che applica la ricerca binaria in modo tale d trovale l'elemento desiderato

    Lattina a[]   ->  tabella che contiene le lattine
    int N   ->  numero di lattine da inserire
    string k    ->  descrizione da ricercare

    Valore di ritorno:
    Nessun valore di ritorno
*/
int algoritmoRicerca(Lattina a[], int N, string k){
    int t = 0;
    int u = N;

    int i;
   

    do{
        i = (t+u)/2;
        if(k != a[i].descrizione){
            if(k > a[i].descrizione){
                t = i + 1;
            } else {
                u = i - 1;
            }
        }
    }while(t <= u && k != a[i].descrizione);
    
    if( k != a[i].descrizione) {
        i = N_MAX + 1;
    } 

    return i;
}


/* Funzione: ricercaLattina():
    Funzione che ricerca l'elemento desiderato, prima ordina, riceca e infine stampa se trovato o meno

    Lattina a[]   ->  tabella che contiene le lattine
    int N   ->  numero di lattine da inserire

    Valore di ritorno:
    Nessun valore di ritorno
*/
void ricercaLattina(Lattina lattine[], int N){
    string descrizione;
    int posizione;
    int controlloStampa;
    controlloStampa = 0;

    ordinaAlfabetico(lattine, N);
    cout <<"Inserisci descrizione da cercare: ";
    cin.ignore();
    getline(cin, descrizione);

    posizione = algoritmoRicerca(lattine, N, descrizione);

    if(posizione > N_MAX){
        cout <<"Elemento non trovato!" <<endl;
    } else {
        stampaLattina(lattine, N, posizione, controlloStampa);
    }
}

/* Funzione: stampaNumeroRecord():
    Funzione che stampa il numero di lattine presenti nella tabella lattine

    int N   ->  numero di lattine presenti

    Valore di ritorno:
    Nessun valore di ritorno
*/
void stampaNumeroRecord(int N){
    cout <<"La tabella lattine contiene al suo interno: " <<N <<" lattine/a" <<endl;
}



/* Funzione: ricercaXAltezza():
    Funzione che ricerca le lattine con l'altezz superiore al numero inserito dall'utente
    Lattina lattine[]   ->  lattine registrate
    int N   ->  numero di lattine presenti

    Valore di ritorno:
    Nessun valore di ritorno
*/
void ricercaXAltezza(Lattina lattine[], int N){
    int altezza;
    int i;
    int controlloStampa;
    controlloStampa = 0;

    cout <<"Trova altezza maggiore di: ";
    cin >> altezza;

    for(i = 0; i < N; i++){
        if(lattine[i].altezza > altezza){
            stampaLattina(lattine, N, i, controlloStampa);
            controlloStampa ++;
        }
    }
}


/* Funzione: ricercaXAltezza():
    Funzione Stampa di tutti i record ordinati per volume decrescente
    Lattina lattine[]   ->  lattine registrate
    int N   ->  numero di lattine presenti

    Valore di ritorno:
    Nessun valore di ritorno
*/





// DA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIRE
void ordinaXVolume(Lattina lattine[], int N){
    int i;
    int j;
    Lattina tmp;


    for(i = 0; i < N; i++){
        bool scambio;
        do {
            scambio = false;
            // for (i = 0; i < N - 1; i++) {
            //     if (lattine[i].descrizione > lattine[i + 1].descrizione) {      // Scambia le lattine
            //         tmp = lattine[i];
            //         lattine[i] = lattine[i + 1];
            //         lattine[i + 1] = tmp;
            //         scambio = true;
            //     }
            // }
        } while (scambio);
    }

}
//DA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIREDA FINIRE



/* Programma principale
Descrizione sintetica funzionalità
del programma principale.
*/
int main() {
    int N;

    int scelta;
    bool esci;


    Lattina lattine[N_MAX];

    N = richiestaN();
    inserimentoLattine(lattine, N);

    esci = false;
    do{ 
        scelta = sceltaVoceMenu();
        switch (scelta) {
            case 1:
                stampaNumeroRecord(N);
                break;
            case 2:
                ricercaLattina(lattine, N);
                break;
            case 3: 
                ricercaXAltezza(lattine, N);
                break;
            case 4: 

                break;
            case 5: 
                usictaCiclo(esci);
                break;
            }
    }while(esci == false);

return 0;
}





