/*
Autore: Luca Picciotto
Data: 25/03/2024
Titolo: Simulazione d'esame
*/
#include <iostream>
#include <string>
#define N_MAX 100
#define annoCorrente 2024
using namespace std;



//struct di tipo Data, include giorno-mese-anno
struct Data{
    int giorno;
    int mese;
    int anno;
};

// struct Persona{
//     string nome;
//     string cognome;
// };

//struct di tipo Libro, include tutte le informazione per identificare un libro correttamente
struct Libro{
    int codice;
    string titolo;
    // Persona autore;
    string autore;
    Data annoDiPubblicazione;
    string casaEditrice;
    // Persona nomeUtente;
    string nomeUtente;
    int giorniMancanti;
};

// Funzioni:
int sceltaVoceMenu();
void usictaCiclo(bool&);
int richiestaN();
void inserimentoLibri(Libro[],int&);
void inserimentoLibro(Libro[], int);
void stampaLibri(Libro[], int);
void stampaLibro(Libro[], int);
void stampaQuantitaPresenti();
void ordinaAlfabetico(Libro[], int&);





/* Funzione: fun
Template per costruire le funzioni
Parametri:
int Param1 -> descrizione Param1
float Param2 -> descrizione Param2
Valore di ritorno:
int -> descrizione valore di ritorno
*/









/* Programma principale
Descrizione sintetica funzionalità
del programma principale.
*/
int main() {

    Libro libri[N_MAX];
    int N;
    int scelta;
    bool esci;
    esci = false;
    do{ 
        scelta = sceltaVoceMenu();
        switch (scelta) {
            case 1:
                inserimentoLibri(libri, N);
                break;
            case 2:
                stampaQuantitaPresenti();
                break;
            case 3: 
                stampaLibri(libri, N);
                break;
            case 4: 
                ordinaAlfabetico(libri, N);
                stampaLibri(libri,N);
                break;
            case 5: 

                break;
            case 6:

                break;
            case 7: 
                usictaCiclo(esci);
                break;
            }
    }while(esci == false);


return 0;
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
        cout <<"1. Inserimento di N libri nella biblioteca" <<endl;
        cout <<"2. Stampa del numero totale di libri presenti" <<endl;
        cout <<"3. Stampa di tutti i libri presenti" <<endl;
        cout <<"4. Stampa di tutti i libri ordinati per autore" <<endl;
        cout <<"5. Stampa dei libri che non sono in prestito ordinati per codice" <<endl;
        
        cout <<"6. Stampa di tutti i libri in scadenza" <<endl;


        cout <<"7. Uscita " <<endl;

        cout <<"Scelta: ";
        cin >> scelta;
    // }while (scelta <= 0 || scelta > 7);
    }while ( scelta <= 0 || scelta > 8);
    
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




/* Funzione: richiestaN():
    Richiede in input il numero di libri.

    Nessun parametro passato;

    Valore di ritorno:
    int N -> numero di lattine che l'utente desidera caricare
*/
void richiestaN(int &N){

    do{
        cout<<"Quanti libri vuoi inserire: ";
        cin >> N;
    }while(N <= 0 || N >= N_MAX);       //controllo che sia > di 0 e < di N_MAX
    
}


/* Funzione: inserimentoLibri():
    Richiede in input il numero di libri, successivamente inserisce N libri.

    Libro libri[]   -> tabella che contiene libri;

    Valore di ritorno:
    Nessun valore di ritorno;
*/
void inserimentoLibri(Libro libri[], int &N){
    int i;
    richiestaN(N);

    for(i = 0; i < N; i++){
        cout << "Libro " <<i + 1 <<endl;
        inserimentoLibro(libri, i);
    }
        

}



/* Funzione: inserimentoLibri():
    Inserisce un libro ad indice i;

    Libro libri[]   ->  tabella che contiene libri;
    int i   ->  posizione nella tabella;

    Valore di ritorno:
    Nessun valore di ritorno;
*/
void inserimentoLibro(Libro libri[], int i){
    libri[i].codice = i + 1;
    
    cin.ignore();
    do{
        cout << "Titolo: ";
        
        getline(cin, libri[i].titolo);
    }while( libri[i].titolo == "");

    // do{
    //     cout << "Autore: " <<endl;
    //     cout << "\tNome: ";
    //     cin >> libri[i].autore.nome;
    // }while( libri[i].autore.nome == " ");
    // do{
    //     cout << "Autore: " <<endl;
    //     cout << "\tCognome: ";
    //     cin >> libri[i].autore.cognome;
    // }while( libri[i].autore.cognome == " ");

    do{
        cout << "Autore: ";

        getline(cin, libri[i].autore);
    }while( libri[i].autore == "");

    
    cout << "Anno di pubblicazione: "<<endl;
    do{
        cout << "\tGiorno: ";
        cin >> libri[i].annoDiPubblicazione.giorno;
    }while(libri[i].annoDiPubblicazione.giorno <= 0 || libri[i].annoDiPubblicazione.giorno > 31);
    do{
        cout << "\tMese: ";
        cin >> libri[i].annoDiPubblicazione.mese;
    }while(libri[i].annoDiPubblicazione.mese <= 0 || libri[i].annoDiPubblicazione.mese > 12);
    do{
        cout << "\tAnno: ";
        cin >> libri[i].annoDiPubblicazione.anno;
    }while(libri[i].annoDiPubblicazione.anno <= 0 || libri[i].annoDiPubblicazione.anno > annoCorrente);

    do{
        cout << "Casa editrice: ";
 
        getline(cin, libri[i].casaEditrice);
    }while(libri[i].casaEditrice == "");


    cout << "Nome utente per il prestito: ";
   
    getline(cin, libri[i].nomeUtente);

}


/* Funzione: stampaLibri():
    stampa i libri presenti;

    Libro libri[]   ->  tabella che contiene libri;
    i   ->  quantità di libri presenti

    Valore di ritorno:
    Nessun valore di ritorno;
*/
void stampaLibri(Libro libri[], int N){
    int i;
    cout << "Libri presenti nella biblioteca: " <<endl;
    for(i = 0; i < N; i ++){
        
        stampaLibro(libri, i);

        cout <<endl;
    }
}
/* Funzione: stampaLibri():
    stampa un libro ad indice i;

    Libro libri[]   ->  tabella che contiene libri;
    i   ->  quantità di libri presenti

    Valore di ritorno:
    Nessun valore di ritorno;
*/
void stampaLibro(Libro libri[], int i){
    cout << "\tCodice: " <<libri[i].codice <<endl;
    cout << "\tTitolo: " <<libri[i].titolo <<endl;
    cout << "\tAutore: " <<libri[i].autore <<endl;
    cout << "\tAnno di Pubblicazione: " <<libri[i].annoDiPubblicazione.giorno <<"/" <<libri[i].annoDiPubblicazione.mese <<"/" <<libri[i].annoDiPubblicazione.anno <<endl;
    cout << "\tCasa editrice: " <<libri[i].casaEditrice <<endl;
    cout << "\tPreso in prestito da: " <<libri[i].nomeUtente <<endl;
}


/* Funzione: stampaQuantitaPresenti():
    stampa la quantita di libri presenti;

    Nessun valore passato;

    Valore di ritorno:
    Nessun valore di ritorno;
*/
void stampaQuantitaPresenti(){
    cout << "Sono presenti: " <<endl;
}


/* Funzione: ordinaAlfabetico():
    Funzione che ordina in ordine alfabetico l'elenco

    Libro libri[]   ->  tabella che contiene i libri
    i   ->  numero di libri totali

    Valore di ritorno:
    Nessun valore di ritorno
*/
void ordinaAlfabetico(Libro libri[], int &N){
    int i;
    int j;
    Libro tmp;


    for(i = 0; i < N; i++){
        bool scambio;
        do {
            scambio = false;
            for (i = 0; i - 1; i++) {
                if (libri[i].autore > libri[i + 1].autore) {      // Scambia i libri
                    tmp = libri[i];
                    libri[i] = libri[i + 1];
                    libri[i + 1] = tmp;
                    scambio = true;
                }
            }
        } while (scambio);
    }
}





//ho sbagliato analisi iniziale, completamente sbagliato