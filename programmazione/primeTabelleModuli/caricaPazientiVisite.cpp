#include "caricaPazientiVisite.h"
#include <iostream>

using namespace std;

// #define MAX 100



int richiestaN(){       //funzione per richiedere il numero di prodotti da insirire
    int N;
    do{
        cout<<"Quante persone vuoi inserire: ";
        cin >> N;
    }while(N <= 0 || N > MAX);

    return N;
}


void inserimentoPersonaFittizio(Persona p[], int N) {       // Inserimento dei prodotti fittizzi generata da chatGPT per agevolare i controlli delle funzioni successive (noon utilizzata)
    for (int i = 0; i < N; i++) {
        p[i].id = i + 1; // Codice sequenziale per ogni persona
        p[i].nome = "Nome " + to_string(i + 1);
        p[i].cognome = "Cognome " + to_string(i + 1);
        p[i].indirizzo.via = "Via " + to_string(i + 1);
        p[i].indirizzo.civico = i + 1;
        p[i].indirizzo.cap = 10000 + i; // CAP incrementato per ogni persona
        p[i].indirizzo.comune = "Comune " + to_string(i + 1);
        p[i].dataNascita.gg = i + 1; // Giorno di nascita incrementato per ogni persona
        p[i].dataNascita.mm = 1; // Mese di nascita (gennaio)
        p[i].dataNascita.aaaa = 2000 + i; // Anno di nascita incrementato per ogni persona
        p[i].codiceFiscale = "CF" + to_string(i + 1);
        p[i].isConiugato = (i % 2 == 0); // Alternanza tra coniugati e non coniugati
    }
}


void inserimentoPersonaInput(Persona p[], int N) { 

    cout<<endl;
    for (int i = 0; i < N; i++) {
        p[i].id = i + 1; // Codice sequenziale per ogni persona
        cout << "Inserisci il nome della persona " << i + 1 << ": ";
        cin >> p[i].nome;
        cout << "Inserisci il cognome della persona " << i + 1 << ": ";
        cin >> p[i].cognome;
        cout << "Inserisci la via dell'indirizzo della persona " << i + 1 << ": ";
        cin.ignore(); // evita gli spazzi di input
        getline(cin, p[i].indirizzo.via);
        cout << "Inserisci il numero civico dell'indirizzo della persona " << i + 1 << ": ";
        cin >> p[i].indirizzo.civico;
        cout << "Inserisci il CAP dell'indirizzo della persona " << i + 1 << ": ";
        cin >> p[i].indirizzo.cap;
        cout << "Inserisci il comune dell'indirizzo della persona " << i + 1 << ": ";
        cin.ignore(); // evita gli spazzi di input
        getline(cin, p[i].indirizzo.comune);
        cout << "Inserisci la data di nascita della persona: " << i + 1 << ": " <<endl;
        // Controllo per il giorno di nascita
        do {
            cout << "Inserisci il giorno di nascita della persona " << i + 1 << ": ";
            cin >> p[i].dataNascita.gg;
        } while (p[i].dataNascita.gg < 1 || p[i].dataNascita.gg > 31);

        // Controllo per il mese di nascita
        do {
            cout << "Inserisci il mese di nascita della persona " << i + 1 << ": ";
            cin >> p[i].dataNascita.mm;
        } while (p[i].dataNascita.mm < 1 || p[i].dataNascita.mm > 12);

        // Controllo per l'anno di nascita
        do {
            cout << "Inserisci l'anno di nascita della persona " << i + 1 << ": ";
            cin >> p[i].dataNascita.aaaa;
        } while (p[i].dataNascita.aaaa < 1900 || p[i].dataNascita.aaaa > 2024);
        
        cout << "Inserisci il codice fiscale della persona " << i + 1 << ": ";
        cin >> p[i].codiceFiscale;
        cout << "La persona " << i + 1 << " è coniugata? (1 per sì, 0 per no): ";
        cin >> p[i].isConiugato;

        cout<<endl;
    }
}



void stampaPersone(Persona p[], int N) {        //stampa di controllo per le persone registrate (non utilizzata)
    for (int i = 0; i < N; i++) {
        cout<<endl;
        cout << "Persona " << i+1 << ":" << endl;
        cout << "ID: " << p[i].id << endl;
        cout << "Nome: " << p[i].nome << endl;
        
        cout << "Cognome: " << p[i].cognome << endl;
        cout << "Indirizzo: " << p[i].indirizzo.via << ", " << p[i].indirizzo.civico << ", " << p[i].indirizzo.cap << ", " << p[i].indirizzo.comune << endl;
        cout << "Data di nascita: " << p[i].dataNascita.gg << "/" << p[i].dataNascita.mm << "/" << p[i].dataNascita.aaaa << endl;
        cout << "Codice fiscale: " << p[i].codiceFiscale << endl;
        cout << "Coniugato: " ;
            if(p[i].isConiugato == true)
                cout<<"Si" <<endl;
            else
                cout<<"No" <<endl;
        cout << endl;
    }
}


void caricaPrenotazioni(Persona p[], int N, Prenotazioni v[]){      //funzione per caricare le prenotazioni
    int i,j, ii = 0;
    bool controllo;
    int scelta;

    int conferma;       //variabili per l'uscita
    bool esci;      //variabili per l'uscita
    esci = false;       //variabili per l'uscita




do{     //inizio ciclo per continuare a registrare visite, si puo uscire ad ogni inserimento (completo)
    cout<<endl;
    cout<<"Inserimento prenotazione: "<<endl;

    for(i = 0; i < N; i++){     //stampa dei cognomi e relativi codici personali delle persone registrate
        cout<<"Codice: " <<p[i].id <<" Cognome: " <<p[i].cognome <<endl;        //elenco delle possibili selezioni 
    }
    cout<<endl;

    do{     //controllo codice inserito se esistente
        controllo = false;
        cout<<"Scegli un codice esistente: ";
        cin >> scelta;
        
        for(j = 0; j < N; j++){
            if(scelta == p[j].id ){
                controllo = true;
            }
        }     
    }while(!controllo);

    int t = 0;      //inizio ricerca binaria
    int u = N;

    int o;
   

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
        v[ii].datiPersonali.cognome = p[o].cognome;     //fine ricerca binaria
    }

    
    cout<<"Insersci data : "<<endl;     //inizio inserimento data con relativi controlli 
    do {
            cout << "Inserisci il giorno della visita: "  << ": ";
            cin >> v[ii].data.gg;
        } while (v[ii].data.gg < 1 || v[ii].data.gg > 31);

        // Controllo per il mese di nascita
        do {
            cout << "Inserisci il mese della visita: "  << ": ";
            cin >> v[ii].data.mm;
        } while (v[ii].data.mm < 1 || v[ii].data.mm > 12);

        // Controllo per l'anno di nascita
        do {
            cout << "Inserisci l'anno della visita: " << ": ";
            cin >> v[ii].data.aaaa;
        } while (v[ii].data.aaaa < 1900 );

        v[ii].codice = ii + 1;      //caricamento visita[]

        ii++;       //incremento indice visita

        cout<<"Vuoi uscire? (0 per SI, 1 per NO): ";     //usicta dal ciclo 
                cin>>conferma;
                    if (conferma == 0)
                        esci = true;
}while(!esci);

    cout<<endl;         //stampa delle visite prenotate
    for(i = 0; i < ii; i++){
        cout<<"Codice visita: " <<v[i].codice <<" Cognome: " <<v[i].datiPersonali.cognome <<" Data: " <<v[i].data.gg <<"/" <<v[i].data.mm <<"/" <<v[i].data.aaaa <<endl; 
    }

}