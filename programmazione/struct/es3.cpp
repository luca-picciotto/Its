#include <iostream>
#include <string>
using namespace std;


// Terzo Esercizio
// Codificare la struttura che possa contenere i dati relativi al giocatore tesserato in una
// squadra di calcio.



struct Indirizzo {
    string via;
    int civico;
    int cap;
    string comune;
};
struct Data{
    int gg;
    int mm;
    int aaaa;
};

struct Persona {
    // int matricola;
    string nome;
    string cognome;
    Indirizzo indirizzo;
    Data dataNascita;
    string codiceFiscale;
    bool isConiugato;
};

struct Giocatore {
    int numTessera;
    Persona datiPersonali;
    string squadra;
    float altezza;
    float peso;
    string ruolo;
    int maglia;
    int goal;
};

void stampaPersona(Giocatore);

int main() {

    Giocatore calciatore;
    // calciatore.datiPersonali.matricola = 1;
    calciatore.datiPersonali.nome = "Luca";
    calciatore.datiPersonali.cognome = "Picciotto";
    calciatore.datiPersonali.indirizzo.via = "Via Botticelli";
    calciatore.datiPersonali.indirizzo.civico = 2;
    calciatore.datiPersonali.indirizzo.cap = 10154;
    calciatore.datiPersonali.indirizzo.comune = "Torino";
    calciatore.datiPersonali.dataNascita.gg = 21;
    calciatore.datiPersonali.dataNascita.mm = 2;
    calciatore.datiPersonali.dataNascita.aaaa = 2004;
    calciatore.datiPersonali.codiceFiscale = "AAAAAAAAAAAAAA";
    calciatore.datiPersonali.isConiugato = false;
    calciatore.numTessera = 1;
    calciatore.squadra = "Juventus";
    calciatore.altezza = 1.7;
    calciatore.peso = 62;
    calciatore.ruolo = "Bo";
    calciatore.maglia = 10;
    calciatore. goal = 1000;

    stampaPersona(calciatore);

    return 0;
}

// void stampaPersona(Persona dipendente){
//     cout<<"Matricola: " <<dipendente.matricola <<endl;
//     cout<<"Nome: " <<dipendente.nome <<endl;
//     cout<<"Cognome: " <<dipendente.cognome <<endl;
//     cout<<"Indirizzo: " <<dipendente.indirizzo.via <<" " <<dipendente.indirizzo.civico <<" " <<dipendente.indirizzo.cap <<" " <<dipendente.indirizzo.comune <<endl;
//     cout<<"Data di nascita: " <<dipendente.dataNascita.gg <<" " <<dipendente.dataNascita.mm <<" " <<dipendente.dataNascita.aaaa <<endl;
//     cout<<"Codice Fiscale: " <<dipendente.codiceFiscale <<endl;
//     if(dipendente.isConiugato == false)
//         cout<<"Coniugato: No" <<endl;
//     else
//         cout<<"Coniugato: Si" <<endl;
// }