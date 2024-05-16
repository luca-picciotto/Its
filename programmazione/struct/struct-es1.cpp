#include <iostream>
#include <string>
using namespace std;


// Primo Esercizio
// Data la seguente definizione di dati:
// struct Persona {
// int matricola;
// string nome;
// string indirizzo;
// string dataNascita;
// string codiceFiscale;
// bool isConiugato;
// };
// Persona dipendente;
// Modificare la struttura Persona per rappresentare l’indirizzo come una struttura formata
// dai campi: via, CAP, Comune.


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
    int matricola;
    string nome;
    string cognome;
    Indirizzo indirizzo;
    Data dataNascita;
    string codiceFiscale;
    bool isConiugato;
};

void stampaPersona(Persona);

int main() {

    Persona dipendente;
    dipendente.matricola = 1;
    dipendente.nome = "Luca";
    dipendente.cognome = "Picciotto";
    dipendente.indirizzo.via = "Via Botticelli";
    dipendente.indirizzo.civico = 2;
    dipendente.indirizzo.cap = 10154;
    dipendente.indirizzo.comune = "Torino";
    dipendente.dataNascita.gg = 21;
    dipendente.dataNascita.mm = 2;
    dipendente.dataNascita.aaaa = 2004;
    dipendente.codiceFiscale = "AAAAAAAAAAAAAA";
    dipendente.isConiugato = false;

    stampaPersona(dipendente);

    return 0;
}

void stampaPersona(Persona dipendente){
    cout<<"Matricola: " <<dipendente.matricola <<endl;
    cout<<"Nome: " <<dipendente.nome <<endl;
    cout<<"Cognome: " <<dipendente.cognome <<endl;
    cout<<"Indirizzo: " <<dipendente.indirizzo.via <<" " <<dipendente.indirizzo.civico <<" " <<dipendente.indirizzo.cap <<" " <<dipendente.indirizzo.comune <<endl;
    cout<<"Data di nascita: " <<dipendente.dataNascita.gg <<" " <<dipendente.dataNascita.mm <<" " <<dipendente.dataNascita.aaaa <<endl;
    cout<<"Codice Fiscale: " <<dipendente.codiceFiscale <<endl;
    if(dipendente.isConiugato == false)
        cout<<"Coniugato: No" <<endl;
    else
        cout<<"Coniugato: Si" <<endl;
}