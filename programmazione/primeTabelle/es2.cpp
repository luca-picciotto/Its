#include <iostream>
#include <string>


#define MAX 100

using namespace std;

// Secondo Esercizio
// Un negozio di alimentari ha un archivio (tabella) in cui vengono memorizzati i prodotti
// presenti in magazzino. Per ogni prodotto in magazzino, si dispone dei seguenti dati:
// ● la descrizione,
// ● la quantità disponibile in magazzino,
// ● la data di scadenza.
// Il programma deve memorizzare in un altra tabella tutti i prodotti che sono da cancellare
// dall'archivio perché scaduti (un prodotto è scaduto quando l'anno di scadenza è inferiore al
// 2024).

struct Info {       //strutture primitive per la struct prodotto
    int codice;
    string nome;
    string produttore;
    string origine;
};

struct Data{
    int gg;
    int mm;
    int aaaa;
};

struct Prodotto{           //struct Prodotto
    Info descrizione;
    int quantita;
    Data dataScadenza;
};

const Data dataAttuale = {5, 3, 2024};      //data odierna in formato data



int richiestaN();       //firme
void inserimentoProdotto(Prodotto[], int);
void stampaProdotto(Prodotto[], int);
void inserimentoProdottoFittizio(Prodotto[], int);
int controlloScadenza(Prodotto[], Prodotto[], int);
void stampaScaduti(Prodotto[], int);
void inserimentoScaduti(Prodotto[], Prodotto[], int , int);


int main(){

    int N;      //numero prodotti da inserire
    int conteggioScaduti;       //quanti sono scaduti   
    Prodotto archivio[MAX];     //magazzino merci 
    Prodotto scaduti[MAX];      //prodotti scaduti

    N = richiestaN();           // richiamo funzione per sapere quanti prodotti si desidera inserire

    inserimentoProdotto(archivio, N);       //richiamo funzione inserimento prodotto
    // inserimentoProdottoFittizio(archivio, N);

    stampaProdotto(archivio, N);

    conteggioScaduti = controlloScadenza(archivio, scaduti, N);     //riceca scaduti 


    stampaScaduti(scaduti, conteggioScaduti);       //stampa scaduti
}

int richiestaN(){       //funzione per richiedere il numero di prodotti da insirire
    int N;
    do{
        cout<<"Quanti prodotti vuoi inserire: ";
        cin >> N;
    }while(N <= 0 || N > MAX);

    return N;
}

void inserimentoProdotto(Prodotto archivio[], int N){       //funzione per l'inserimento prodotti 
    int i;

    for(i = 0; i < N; i++){
        cout<<"Inserisci il prodotto " <<i+1 <<": " <<endl;
        cout<<"Codice: ";
        cin >> archivio[i].descrizione.codice;
        cout<<"Nome: ";
        cin >> archivio[i].descrizione.nome;
        cout<<"Produttore: ";
        cin >> archivio[i].descrizione.produttore;
        cout<<"Origine: ";
        cin >> archivio[i].descrizione.origine;
        cout<<"Quantita': ";
        cin >> archivio[i].quantita;
        cout<<"Data di scadenza: " <<endl <<"Giorno: " ;
        cin >> archivio[i].dataScadenza.gg;
        cout<<"Mese: ";
        cin >> archivio[i].dataScadenza.mm;
        cout<<"Anno: ";
        cin >> archivio[i].dataScadenza.aaaa;
        cout<<endl;
    }
}

void stampaProdotto(Prodotto archivio[], int N ){       //funzione per la stampa del magazzino (non utilizzato)
    int i;
    
    for(i = 0; i < N; i++){
        cout<<"Prodotto" <<i+1 <<": " <<endl;
        cout<<"Codice: ";
        cout<<archivio[i].descrizione.codice <<endl;
        cout<<"Nome: ";
        cout<< archivio[i].descrizione.nome<<endl;
        cout<<"Produttore: ";
        cout<< archivio[i].descrizione.produttore<<endl;
        cout<<"Origine: ";
        cout<< archivio[i].descrizione.origine<<endl;
        cout<<"Quantita': ";
        cout<< archivio[i].quantita<<endl;
        cout<<"Data di scadenza: " <<endl <<"Giorno: " ;
        cout<< archivio[i].dataScadenza.gg<<endl;
        cout<<"Mese: ";
        cout<< archivio[i].dataScadenza.mm<<endl;
        cout<<"Anno: ";
        cout<< archivio[i].dataScadenza.aaaa<<endl;
        cout<<endl;
    }
}

void stampaScaduti(Prodotto scaduti[], int j){      //funzione per la stampa dei prodotti scaduti 
    int i;
    cout<<"Prodotti scaduti da scartare: " <<endl;
    for(i = 0; i < j; i++){
        cout<<"Prodotto" <<i+1 <<": " <<endl;
        cout<<"Codice: ";
        cout<<scaduti[i].descrizione.codice <<endl;
        cout<<"Nome: ";
        cout<< scaduti[i].descrizione.nome<<endl;
        cout<<"Produttore: ";
        cout<< scaduti[i].descrizione.produttore<<endl;
        cout<<"Origine: ";
        cout<< scaduti[i].descrizione.origine<<endl;
        cout<<"Quantita': ";
        cout<< scaduti[i].quantita<<endl;
        cout<<"Data di scadenza: " <<endl <<"Giorno: " ;
        cout<< scaduti[i].dataScadenza.gg<<endl;
        cout<<"Mese: ";
        cout<< scaduti[i].dataScadenza.mm<<endl;
        cout<<"Anno: ";
        cout<< scaduti[i].dataScadenza.aaaa<<endl;
        cout<<endl;
    }
}


void inserimentoProdottoFittizio(Prodotto prodotti[], int N) {          // Inserimento dei prodotti fittizzi generata da chatGPT per agevolare i controlli delle funzioni successive (noon utilizzata)

    for (int i = 0; i < N; ++i) {
        prodotti[i].descrizione.codice = i + 1; // Codice sequenziale per ogni prodotto
        prodotti[i].descrizione.nome = "Prodotto " + to_string(i + 1);
        prodotti[i].descrizione.produttore = "Produttore " + to_string(i + 1);
        prodotti[i].descrizione.origine = "Origine " + to_string(i + 1);
        prodotti[i].quantita = 10 + i; // Quantità incrementata per ogni prodotto
        prodotti[i].dataScadenza.gg = 31;
        prodotti[i].dataScadenza.mm = 12;
        prodotti[i].dataScadenza.aaaa = 2025;
    }
}


int controlloScadenza(Prodotto archivio[], Prodotto scadenza[], int N){     //controllo data di scadenza: anno -> mese -> giorno
    int i;
    int j;
    j = 0;

    for(i = 0; i < N; i++){
        if(archivio[i].dataScadenza.aaaa < dataAttuale.aaaa){       //anno minore: scaduti
            inserimentoScaduti(archivio, scadenza, j, i );
            j++;


        } else if(archivio[i].dataScadenza.aaaa == dataAttuale.aaaa){       //anno uguale: incerto 
            if(archivio[i].dataScadenza.mm < dataAttuale.mm){           //mese minore: scaduto
                inserimentoScaduti(archivio, scadenza, j, i );
                j++;


            } else if(archivio[i].dataScadenza.mm == dataAttuale.mm){       //mese uguale: incerto 
                if(archivio[i].dataScadenza.gg < dataAttuale.gg){       //giorno inferiore: scaduto 
                    inserimentoScaduti(archivio, scadenza, j, i );
                    j++;
                }
            }           //se anno / mese / giorno  sono maggiori: no scaduto
                        
        }
    }

    return j;
}

void inserimentoScaduti(Prodotto archivio[], Prodotto scadenza[], int j, int i){
    scadenza[j].descrizione.codice = archivio[i].descrizione.codice;
    scadenza[j].descrizione.nome = archivio[i].descrizione.nome;
    scadenza[j].descrizione.produttore = archivio[i].descrizione.produttore;
    scadenza[j].descrizione.origine = archivio[i].descrizione.origine;
    scadenza[j].quantita = archivio[i].quantita;
    scadenza[j].dataScadenza.gg = archivio[i].dataScadenza.gg;
    scadenza[j].dataScadenza.mm = archivio[i].dataScadenza.mm;
    scadenza[j].dataScadenza.aaaa = archivio[i].dataScadenza.aaaa;
}