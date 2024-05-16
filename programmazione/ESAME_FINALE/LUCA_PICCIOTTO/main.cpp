/*
Autore: Luca Picciotto
Data: 25/03/2024
Titolo: Prova d'esame
Testo:
    Si vuole gestire il parco vetture di un concessionario di automobili mediante un applicativo scritto in linguaggio c++.

    E’ necessario definire una struttura dati per descrivere un’automobile in base alla marca, cilindrata, anno di immatricolazione, anno di vendita e acquirente con nome e cognome. 

    L’applicativo deve permettere di eseguire le seguenti operazioni mediante un menu’ di scelta:

        Inserimento di N autovetture
        Stampa del numero di tutte le auto gestite dal concessionario (quelle in vendita e quelle vendute)
        Stampa di tutte le auto presenti nel concessionario (non vendute)
        Stampa di tutte le auto vendute ordinate per marca (ordine alfabetico cresecente)
        Stampa di tutte le auto presenti nel concessionario (non vendute) che hanno una cilindrata maggiore di un valore chiesto in input 
        Cancellazione di tutte le auto vendute prima dell’anno inserito in input
        Uscita
*/
#include <iostream>
#include <string>
using namespace std;
#define N_MAX 100
#define ANNO_ATTUALE 2024

// struct persona per identificare il proprietario dell'auto
struct Persona{
    string nome;        //nome proprietario
    string cognome;     //cognome proprietario
};


//struct che contiene i dati delle autovetture
struct AutoVetture{
    string marca;       //marca auto
    int cilindrata;     //potenza motore 
    int annoMatricola;      //anno di produzione
    bool venduta;       //serve per controllare se è presente nel concessonario
    int annoVendita;        
    Persona acquirente;     //proprietario, caratterizzato dalla struct Persona
};


//Firme delle funzioni: 
void usictaCiclo(bool&);
int sceltaVoceMenu();
void inserimentoAutovetture(AutoVetture[], int&);
int richiestaN();
void stampaAutoNonVendute(AutoVetture[], int);
void stampaAuto(AutoVetture[], int);
void ordinaAlfabetico(AutoVetture[], int);
void stampaAutoAlfabetico(AutoVetture[], int);
void stampaXcilindrataMaggiore(AutoVetture[], int);



/* Programma principale
Contine la struttura del menu di selezione, che a sua volta conterrà le chiamate per utilizzare le funzioni selezionate
*/
int main(){
    AutoVetture concessionario[N_MAX];
    int N;
    N = 0;

    bool inserimento;
    inserimento = false;
    int scelta;
    bool esci;
    esci = false;
    do{ 
        scelta = sceltaVoceMenu();
        switch (scelta) {
            case 1:
                inserimentoAutovetture(concessionario, N);
                inserimento = true;
                break;
            case 2:
                cout <<"Sono presenti " <<N <<" autovetture." <<endl;
                break;
            case 3:
                if(inserimento == false){       //controllo per far si che l'utente inserisca prima il punto 1
					cout<<"Inserisci prima i numeri!"<<endl;
					break;
				} 
                stampaAutoNonVendute(concessionario, N);
                break;
            case 4: 
                if(inserimento == false){       //controllo per far si che l'utente inserisca prima il punto 1
					cout<<"Inserisci prima i numeri!"<<endl;
					break;
				}
                stampaAutoAlfabetico(concessionario, N);
                break;
            case 5:
                if(inserimento == false){       //controllo per far si che l'utente inserisca prima il punto 1
					cout<<"Inserisci prima i numeri!"<<endl;
					break;
				} 
                stampaXcilindrataMaggiore(concessionario, N);
                break;
            case 6:
                if(inserimento == false){       //controllo per far si che l'utente inserisca prima il punto 1
					cout<<"Inserisci prima i numeri!"<<endl;
					break;
				}
                // eliminaXanno(concessionario, N);
                break;
            case 7: 
                usictaCiclo(esci);
                break;
            }
    }while(esci == false);


    return 0;
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
        cout <<"1. Inserimento di N autovetture" <<endl;
        cout <<"2. Stampa del numero di tutte le auto gestite dal concessionario" <<endl;
        cout <<"3. Stampa di tutte le auto presenti nel concessionario" <<endl;
        cout <<"4. Stampa di tutte le auto vendute ordinate per marca" <<endl;
        cout <<"5. Stampa di tutte le auto presenti nel concessionario (non vendute) che hanno una cilindrata maggiore di un valore chiesto in input" <<endl;
        
        cout <<"6. Cancellazione di tutte le auto vendute prima dell'anno inserito in input" <<endl;


        cout <<"7. Uscita " <<endl;

        cout <<"Scelta: ";
        cin >> scelta;
    }while (scelta <= 0 || scelta > 7);
    // }while ( scelta <= 0 || scelta > 8);
    
    return scelta;
}



/* Funzione: richiestaN():
    Richiede in input il numero di libri.

    Nessun parametro passato;

    Valore di ritorno:
    int N -> numero di lattine che l'utente desidera caricare
*/
int richiestaN(){
    int N;
    do{
        cout<<"Quante autovetture vuoi inserire: ";
        cin >> N;
    }while(N <= 0 || N >= N_MAX);       //controllo che sia > di 0 e < di N_MAX
    
    return N;
}


/* Funzione: inserimentoAutovetture():
    Inserisce un numero N di autovetture.

    Parametri:
    Autovetturea  concessionario[]   ->  tabella che contiene le autovetture

    Nussun ritorno;

*/
void inserimentoAutovetture(AutoVetture concessionario[], int &N){
    int controllo_venduta;
    int i;
    cout <<endl;
    N  = richiestaN();
    // cout <<N;

    for(i = 0; i < N; i++){
        cout <<"Inserisci marca: ";         //non faccio nessun controllo sulla marca perchè ALMENO PER QUANTO NE SO i nomi sono singoli;
        cin >> concessionario[i].marca;
        // cout <<"\t " <<concessionario[i].marca <<endl;

        do{     //controllo che sia maggiore di 0, nessun limite di potenza perche ignoro quanto potrebbe essere
            cout <<"Inserisci cilindrata: ";
            cin >> concessionario[i].cilindrata;
            // cout <<"\t " <<concessionario[i].cilindrata <<endl;
        }while(concessionario[i].cilindrata <= 0);

        do{         //minore di anno attuale e maggiore del 1900 (non so quando possano risalere le prime auto)
            cout <<"Inserisci anno di matricolazione del veicolo: ";        
            cin >> concessionario[i].annoMatricola;
            // cout <<"\t " <<concessionario[i].annoMatricola <<endl;           
        }while(concessionario[i].annoMatricola > ANNO_ATTUALE || concessionario[i].annoMatricola < 1900);

        do{     //chiedo se è stata venduta, se è venduta proseguo con linserimento dei dati di vendita
            cout <<"E' stata venduta: " <<endl;
            cout <<"\t 0 -> No; \t 1 -> Si";
            cin >> controllo_venduta;
        }while(controllo_venduta != 0 && controllo_venduta != 1);

        if(controllo_venduta == 0){
            concessionario[i].venduta = false;
        }else if(controllo_venduta == 1){
            concessionario[i].venduta = true;
        }

        if(concessionario[i].venduta == true){
            do{     //minore di anno attuale e maggiore del 1900 (non so quando possano risalere le prime auto)
                cout <<"Inserisci anno di vendita del veicolo: ";
                cin >> concessionario[i].annoVendita;
                // cout <<"\t " <<concessionario[i].annoVendita <<endl;
            }while(concessionario[i].annoVendita > ANNO_ATTUALE || concessionario[i].annoVendita < 1900);

            //nessun controllo sui nomi dell'acquirente
            cout <<"Inserisci nome acquirente: ";
            cin >> concessionario[i].acquirente.nome;

            cout <<"Inserisci cognome acquirente: ";
            cin >> concessionario[i].acquirente.cognome;
            
        }     
    }

}


/* Funzione: stampaAutoNonVendute():
    Stampa le auto non vendute 

    Parametri:
    Autovetturea  concessionario[]   ->  tabella che contiene le autovetture
    int N   ->  quantità presente nel concessionario;

    Valore di ritorno:
    Nessun valore di ritorno;
*/
void stampaAutoNonVendute(AutoVetture concessionario[], int N){
    int i;
    for(i = 0; i < N; i++){
        if(concessionario[i].venduta == false){
            stampaAuto(concessionario, i);      //richiamo la funzione per stampare singola auto
        }
    }
}



/* Funzione: stampaAuto():
    Funzione da richiamare oer stampare auto

    Parametri:
    Autovetturea  concessionario[]   ->  tabella che contiene le autovetture
    int i   ->  auto da stampare;

    Valore di ritorno:
    Nessun valore di ritorno;
*/
void stampaAuto(AutoVetture concessionario[], int i){
    cout <<endl;
    cout <<"Marca: " <<concessionario[i].marca <<endl;
    cout <<"Cilindrata: " <<concessionario[i].cilindrata <<endl;
    cout <<"Anno di matricolazione: " <<concessionario[i].annoMatricola <<endl;
    if(concessionario[i].venduta == true){      //se non è venduta non stamperà
        cout <<"Anno di vendita: " <<concessionario[i].annoVendita <<endl;
        cout <<"Nome proprietario: " <<concessionario[i].acquirente.nome <<endl;
        cout <<"Cognome proprietario: " <<concessionario[i].acquirente.cognome <<endl;
    } else{
        cout <<"Stato: In vendita"<<endl;
    }
}






/* Funzione: ordinaAlfabetico():
    Funzione che ordina in ordine alfabetico l'elenco

    Autovetturea  concessionario[]   ->  tabella che contiene le autovetture
    int i   ->  auto da stampare;

    Valore di ritorno:
    Nessun valore di ritorno
*/
void ordinaAlfabetico(AutoVetture concessionario[], int N){
    int i;
    // int j;
    bool scambio;
    AutoVetture tmp;


    do {
        scambio = false;
        for (i = 0; i - 1; i++) {
            if (concessionario[i].marca > concessionario[i + 1].marca) {      // Scambia le auto
                tmp = concessionario[i];
                concessionario[i] = concessionario[i + 1];
                concessionario[i + 1] = tmp;
                scambio = true;
            }
        }
    } while (scambio);
}



/* Funzione: stampaAutoAlfabetico():
    Funzione che stampa in ordine alfabetico l'elenco

    Autovetturea  concessionario[]   ->  tabella che contiene le autovetture
    int N   ->  quantita di auto presenti;

    Valore di ritorno:
    Nessun valore di ritorno
*/
void stampaAutoAlfabetico(AutoVetture concessionario[], int N){
    int i;
    ordinaAlfabetico(concessionario, N);        //richiamo funzione che ordina alfabeticamente
    for(i = 0; i < N; i++){
        if(concessionario[i].venduta == true)       //controllo che sia stata venduta
            stampaAuto(concessionario, i);
    }
}


/* Funzione: stampaAutoAlfabetico():
    Funzione che stampa le auto non vendute con la cilindrata maggiore richiesta in input

    Autovetturea  concessionario[]   ->  tabella che contiene le autovetture
    int N   ->  quantita di auto presenti;

    Valore di ritorno:
    Nessun valore di ritorno
*/
void stampaXcilindrataMaggiore(AutoVetture concessionario[], int N){
    int cilindrata;
    int i;
    do{
        cout <<"Inserire la cilindrata da cui partire per la ricerca: ";        //cilindrata da cui parte la ricerca
        cin >> cilindrata;
    }while(cilindrata <= 0);        //controllo che sia maggiore di 0
    

    for(i = 0; i < N; i++){
        if(concessionario[i].cilindrata >= cilindrata && concessionario[i].venduta == false){       //controllo che la cilindrat sia maggiore e/o uguale e che sia ancora in vendita
            stampaAuto(concessionario, i);
        }
    }
}

