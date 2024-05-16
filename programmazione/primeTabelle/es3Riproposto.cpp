/*
Autore: Luca Picciotto
Data: 07/03/2024
Titolo: 
    Terzo Esercizio

    il programma gestisce un sistema di inserimento manuale o automatico di pazienti dell'ambulatorio e 
    un sistema di prenotazioni per tutto l'anno.
    
    Un ambulatorio dentistico utilizza una tabella per memorizzare tutte le prenotazioni
    effettuate per il mese di Luglio. Le prenotazioni hanno il seguente tracciato record:
    cognome e data (numero compreso da 1 a 30).
    Si scriva una funzione che stampi sullo standard output quali siano i giorni liberi.     
    Si costruisca il programma che carichi la tabella e provi la funzione progettata.
*/
#include <iostream>
#include <string>
#define MAX 100     //numero massimo di pazienti / visite 

using namespace std;


struct Indirizzo {      //definizione attributi Indirizzo
    string via;
    int civico;     
    int cap;
    string comune;
};

struct Data{        //definizione attributi Data
    int gg;
    int mm;
    int aaaa;
};

struct Persona {        //definizione attributi Persona
    int id;
    string nome;
    string cognome;
    Indirizzo indirizzo;
    Data dataNascita;
    string codiceFiscale;
    bool isConiugato;
};

struct Prenotazioni {       //definizione attributi Prenotazioni 
    int codice;
    Persona datiPersonali;
    Data data;
};

// Funzioni:

int richiestaN(); //    fun richiesta del numero massimo di posti in tutte le tabelle
void inserimentoPersonaFittizio(Persona[], int);    //fun che carica un numero N di persone in automatico per agevolare i test 
void stampaPersone(Persona[], int);     //fun che stampa le persone registrate
void inserimentoPersonaInput(Persona[], int);   //fun che richiede in input un numero N di persone
void caricaPrenotazioni(Persona[], int, Prenotazioni[]);    //fun che richiede in input di caricare la tabella delle visite
// Fine funzioni;



/* Programma principale
    nel programma principale si carica il numero di persone per poi procedere ad inserire in modo automatico o in input un numero N di persone.
    Si stampa per controllare che sia andato tutto a buon fine e infine si carica la tabella visite.
*/
int main(){
    int N;  //quantita di pazienti da inserie
    Persona persona[MAX];   
    Prenotazioni visite[MAX];   //tabella che contiene le prenotazioni 

    N = richiestaN();      //caricamento da parte dell'utente di N

    inserimentoPersonaFittizio(persona, N);     //caricamento pazionti automatico
    // inserimentoPersonaInput(persona, N);     //caricamento pazionti in input

    stampaPersone(persona, N);      //stampa controllo pazienti
    caricaPrenotazioni(persona, N, visite);     //carica prenotazioni 
}


/* Funzione: richiestaN():
    Richiede in input il numero di persone.

    Nessun parametro passato;

    Valore di ritorno:
    int N -> numero di persone che l'utente desidera caricare
*/
int richiestaN(){   
    int N;  //valore di ritorno
    do{
        cout<<"Quante persone vuoi inserire: ";
        cin >> N;
    }while(N <= 0 || N > MAX);  //controllo 

    return N;
}

/* Funzione: inserimentoPersonaFittizio():
    Inserimento automatico di N persone fittizie per agevolare i test

    Persona p[] ->  tabella pazienti;
    int N   ->  numero persone da inserire;

    Valore di ritorno:
    non ritorno nessun valore (void).
*/
void inserimentoPersonaFittizio(Persona p[], int N) { 
    int i;  //contatore per il for
    for ( i = 0; i < N; i++) {      //assegna alla persona [i] il nome dell'attributo + [i+1] per ogni attributo del tipo Persona
        p[i].id = i + 1;        //auto-incremento del codice paziete
        p[i].nome = "Nome " + to_string(i + 1);     
        p[i].cognome = "Cognome " + to_string(i + 1);
        p[i].indirizzo.via = "Via " + to_string(i + 1);
        p[i].indirizzo.civico = i + 1;
        p[i].indirizzo.cap = 10000 + i; 
        p[i].indirizzo.comune = "Comune " + to_string(i + 1);
        p[i].dataNascita.gg = i + 1; 
        p[i].dataNascita.mm = 1; 
        p[i].dataNascita.aaaa = 2000 + i; 
        p[i].codiceFiscale = "CF" + to_string(i + 1);
        p[i].isConiugato = (i % 2 == 0); 
    }
}

/* Funzione: inserimentoPersonaInput():
    Inserimento in input di N persone  registrate

    Persona p[] ->  tabella pazienti;
    int N   ->  numero persone da inserire;

    Valore di ritorno:
    non ritorno nessun valore (void).
*/
void inserimentoPersonaInput(Persona p[], int N) { 
    int i;

    cout<<endl;

    for (i = 0; i < N; i++) {
        p[i].id = i + 1;        //auto-incremento del codice paziete
        cout << "Inserisci il nome della persona " << i + 1 << ": ";
        cin >> p[i].nome;       
        cout << "Inserisci il cognome della persona " << i + 1 << ": ";
        cin >> p[i].cognome;
        cout << "Inserisci la via dell'indirizzo della persona " << i + 1 << ": ";
        cin.ignore(); 
        getline(cin, p[i].indirizzo.via);       //permette di inserire stringhe composti 
        cout << "Inserisci il numero civico dell'indirizzo della persona " << i + 1 << ": ";
        cin >> p[i].indirizzo.civico;
        cout << "Inserisci il CAP dell'indirizzo della persona " << i + 1 << ": ";
        cin >> p[i].indirizzo.cap;
        cout << "Inserisci il comune dell'indirizzo della persona " << i + 1 << ": ";
        cin.ignore(); 
        getline(cin, p[i].indirizzo.comune);        //permette di inserire stringhe composti
        cout << "Inserisci la data di nascita della persona: " << i + 1 << ": " <<endl;

        do {
            cout << "Inserisci il giorno di nascita della persona " << i + 1 << ": ";
            cin >> p[i].dataNascita.gg;
        } while (p[i].dataNascita.gg < 1 || p[i].dataNascita.gg > 31);      //controllo giorno 

        do {
            cout << "Inserisci il mese di nascita della persona " << i + 1 << ": ";
            cin >> p[i].dataNascita.mm;
        } while (p[i].dataNascita.mm < 1 || p[i].dataNascita.mm > 12);      //controllo mese

        do {
            cout << "Inserisci l'anno di nascita della persona " << i + 1 << ": ";
            cin >> p[i].dataNascita.aaaa;
        } while (p[i].dataNascita.aaaa < 1900 || p[i].dataNascita.aaaa > 2024);     //controllo anno di nascita 
        
        cout << "Inserisci il codice fiscale della persona " << i + 1 << ": ";
        cin >> p[i].codiceFiscale;      
        cout << "La persona " << i + 1 << " è coniugata? (1 per sì, 0 per no): ";
        cin >> p[i].isConiugato;

        cout<<endl;
    }
}


/* Funzione: stampaPersone():
    Stampa per controllare che l'inserimento sia andato a buon fine, può essere usata ogni volta per stampare 

    Persona p[] ->  tabella pazienti;
    int N   ->  numero persone da inserire;

    Valore di ritorno:
    non ritorno nessun valore (void).
*/
void stampaPersone(Persona p[], int N) { 
    int i;
    for ( i = 0; i < N; i++) {
        cout<<endl;
        cout << "Persona " << i+1 << ":" << endl;
        cout << "ID: " << p[i].id << endl;
        cout << "Nome: " << p[i].nome << endl;
        cout << "Cognome: " << p[i].cognome << endl;
        cout << "Indirizzo: " << p[i].indirizzo.via << ", " << p[i].indirizzo.civico << ", " << p[i].indirizzo.cap << ", " << p[i].indirizzo.comune << endl;      //unisco l'indirizzo   
        cout << "Data di nascita: " << p[i].dataNascita.gg << "/" << p[i].dataNascita.mm << "/" << p[i].dataNascita.aaaa << endl;       //unisco la data di nascita nel formato  gg/mm/aaaa
        cout << "Codice fiscale: " << p[i].codiceFiscale << endl;
        cout << "Coniugato: " ;
            if(p[i].isConiugato == true)        //rendo la stampa più leggibile
                cout<<"Si" <<endl;
            else
                cout<<"No" <<endl;
        cout << endl;
    }
}

/* Funzione: caricaPrenotazioni():
    Carica le prenotazioni in base al codice del pazinte.

    Persona p[] ->  tabella pazienti;
    int N   ->  numero persone da inserire;
    Prenotazioni v[]    ->  tabella prenotazioni 

    Valore di ritorno:
    non ritorno nessun valore (void).
*/
void caricaPrenotazioni(Persona p[], int N, Prenotazioni v[]){ 
    int i,j, ii;        //indici per cicli 

    int ii = 0;     //inndice prenotazioni, parte da 0

    bool controllo;     //controllo codice
    int scelta;     //scelta del codice paziente

    int conferma;       //variabili di controllo/uscita dal menu di scelta
    bool esci; 
    esci = false;       //fine variabili di controllo

do{ 
    cout<<endl;
    cout<<"Inserimento prenotazione: "<<endl;       //inizio stampa elenco dei codici paziente registrati in struttura

    for(i = 0; i < N; i++){ 
        cout<<"Codice: " <<p[i].id <<" Cognome: " <<p[i].cognome <<endl;        //elenco
    }
    cout<<endl;

    do{         //inizio controllo dell' input 
        controllo = false;      
        cout<<"Scegli un codice esistente: ";
        cin >> scelta;
        
        for(j = 0; j < N; j++){     //ricerca del codice scelto
            if(scelta == p[j].id ){
                controllo = true;
            }
        }     
    }while(!controllo);

        //ricerca binaria di scelta
    int t = 0;      //numero minimo 
    int u = N;      //numero massimo

    int o;      // l'indice persona  
   

    do{
        o = (t+u)/2;
        if(scelta != p[o].id){
            if(scelta > p[o].id){
                t = o + 1;
            } else {
                u = o - 1;
            }
        }
    }while(t <= u && scelta != p[o].id);
    
    if( scelta != p[o].id) {
        cout<<"Elemento non trovato!" <<endl;
    } else {
        v[ii].datiPersonali.cognome = p[o].cognome;         //caricamento del cognome del paziente desiderato 
    }

    
    cout<<"Insersci data : "<<endl; 
    do {
            cout << "Inserisci il giorno della visita: "  << ": ";
            cin >> v[ii].data.gg;
        } while (v[ii].data.gg < 1 || v[ii].data.gg > 31);      //controllo giorno

        do {
            cout << "Inserisci il mese della visita: "  << ": ";    
            cin >> v[ii].data.mm;
        } while (v[ii].data.mm < 1 || v[ii].data.mm > 12);      //controllo mese

        do {
            cout << "Inserisci l'anno della visita: " << ": ";
            cin >> v[ii].data.aaaa;
        } while (v[ii].data.aaaa < 1900 );      //controllo anno

        v[ii].codice = ii + 1;      //assegnazione automatica del codice prenotazione 

        ii++; 

        cout<<"Vuoi uscire? (0 per SI, 1 per NO): "; 
                cin>>conferma;
                    if (conferma == 0)
                        esci = true;        //richiesta di continuo / uscita
}while(!esci);

    cout<<endl; 
    for(i = 0; i < ii; i++){
        cout<<"Codice visita: " <<v[i].codice <<" Cognome: " <<v[i].datiPersonali.cognome <<" Data: " <<v[i].data.gg <<"/" <<v[i].data.mm <<"/" <<v[i].data.aaaa <<endl; 
    }      //stampa di controllo delle prenotazioni inserite

}




