/*
Autore: Luca Picciotto
Data: 24/03/2024
Titolo: 
    Primo Esercizio

    Si scriva un programma per gestire una tabella che descrive un insieme di lattine
    cilindriche atte a contenere alimenti. In particolare, ogni record sarà composto da una
    stringa di descrizione del contenuto (p.e. “fagioli”), l’altezza della lattina (p.e. 12) e il raggio
    della lattina (p.e. 7) entrambi in centimetri. Dopo aver fatto popolare la tabella dall’utente,
    il programma richiede all’utente di scegliere le diverse elaborazioni indicate dalle seguenti opzioni:
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
#define N_MAX 100
using namespace std;


struct Lattina {        //struct per creare una tabella ti tipo Lattina
    string descrizione;     //descrizione della lattina
    float altezza;      //altezza della lattina
    float raggio;       //raggio della lattina
};


// firme delle funzioni
int richiestaN();       //in input il numero di lattine che si desidera inserire
void inserimentoLattina(Lattina[], int);    //funzione per inserire una lattina per volta
void inserimentoLattine(Lattina[], int);      //funzione per inserire un numero N di lattine
int sceltaVoceMenu();
void stampaNumeroRecord(int);
void ricercaKBinaria(Lattina[], int, string );
void ricercaLattineXDescrizioneDicotomico(Lattina[], int N);

int main(){
    int N;      
    Lattina lattine[N_MAX];

    int scelta;
	bool esci;
	int conferma;

    int i;

    N = richiestaN();

    // for(i = 0; i < N; i++){
    //     inserimentoLattina(lattine, i);
    // }

    inserimentoLattine(lattine, N);
    

    esci == false;
    do{
        scelta = sceltaVoceMenu();
        switch (scelta){
            case 1:
                stampaNumeroRecord(N);
                break;
            case 2:
                
                break;
            
            case 3: 

                break;
            case 4:

                break;
            case 5: 

                break;
        }
    }while(esci == false);
}


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


/* Funzione: inserimentoLattina():
    Richiede in input una sola lattina per volta

    Lattina lattine[]   ->  tabella che contiene le lattine
    int i   ->  posizione della tabella lattine[]

    Valore di ritorno:
    Nessun valore di ritorno
*/
void inserimentoLattina(Lattina lattine[], int i){
    int j;


    do{     //controllo
        controllo = false;

        cout <<"Descrizione "<<i+1 <<" lattina: ";
        cin.ignore();
        getline(cin, lattine[i].descrizione);       //ignoro lo spazio per permettere di inseire una descrizione composta da + parole
        
        for(j = 0; j < i; j++){
            if(lattine[i].descrizione == lattine[j].descrizione ){
                controllo = true;
            }
        }
    }while(controllo);


    do{
        cout <<"Altezza "<<i+1 <<" lattina: ";
        cin >> lattine[i].altezza;
    }while(lattine[i].altezza <= 0);        //controllo solo se è minore di 0 per permettere l'inserimento di lattine di fomato grande

    do{
        cout <<"Raggio "<<i+1 <<" lattina: ";
        cin >> lattine[i].raggio;
    }while(lattine[i].raggio <= 0);     //controllo solo se è minore di 0 per permettere l'inserimento di lattine di fomato grande
    
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
    for(i = 0; i < N; i++){
        cout <<"Descrizione "<<i+1 <<" lattina: ";
        cin.ignore();
        getline(cin, lattine[i].descrizione);       //ignoro lo spazio per permettere di inseire una descrizione composta da + parole

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

/* Funzione: stampaNumeroRecord():
    Funzione che stampa il numero di lattine presenti nella tabella lattine

    int N   ->  numero di lattine presenti

    Valore di ritorno:
    Nessun valore di ritorno
*/
void stampaNumeroRecord(int N){
    cout <<"La tabella lattine contiene al suo interno: " <<N <<" lattine/a" <<endl;
}

// void ricercaLattineXDescrizione(Lattina lattine[], int N){
//     int i;
//     string descrizione;
//     bool flag;


//     cout <<"Descrizione desiderata: ";
//     cin.ignore();
//     getline(cin, descrizione);

//     flag = false;
//     for(i = 0; i < N; i++){
//         if(lattine[i].descrizione == descrizione){
//             cout <<"Destrizione  ||   Altezza  ||   Raggio" <<endl;
//             cout <<lattine[i].descrizione <<"   " <<lattine[i].altezza <<"  " <<lattine[i].raggio
//             flag = true;
//         }
//     }
//     if(flag == false){
//         cout <<"Non è presente nessuna lattina con questa descrizone" <<endl;
//     }

// }

void ricercaLattineXDescrizioneDicotomico(Lattina lattine[], int N){
    int i;
    Lattina temp;
    for (i = 0; i < N - 1; i++) {
        if (lattine[i].descrizione > lattine[i+1].descrizione) {      // Scambia le squadre
            temp = lattine[i];
            lattine[i] = lattine[i + 1];
            lattine[i + 1] = temp;
        }
    }

    cout <<"Descrizione desiderata: ";
    cin.ignore();
    getline(cin, descrizione);

    ricercaKBinaria(lattine, N, descrizione);
}

void ricercaKBinaria(Lattina lattine[], int N, string descrizione){
    int t = 0;
    int u = N;

    int i;
   

    do{
        i = (t+u)/2;
        if(descrizione != lattine[i].descrizione){
            if(descrizione > lattine[i].descrizione){
                t = i + 1;
            } else {
                u = i - 1;
            }
        }
    }while(t <= u && descrizione != lattine[i].descrizione);
    
    if( descrizione != lattine[i].descrizione) {
        cout <<"Non è presente nessuna lattina con questa descrizone" <<endl;
    } else {
        cout <<"Destrizione  ||   Altezza  ||   Raggio" <<endl;
        cout <<lattine[i].descrizione <<"   " <<lattine[i].altezza <<"  " <<lattine[i].raggio
    }
}

void ordinaAlfabetico


