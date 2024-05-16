#include <iostream>
#include <string>
#define MAX 10
using namespace std;


// Secondo Esercizio
// Codificare una struttura che possa contenere i dati relativi al docente di una scuola


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
    
    string nome;
    string cognome;
    Indirizzo indirizzo;
    Data dataNascita;
    string codiceFiscale;
    bool isConiugato;
};


struct Docente{
    Persona datiPersonali; 
    string matricola;
    string corsi[MAX];
    string materia[MAX];
};

int main(){
    Docente d1;
    d1.matricola = 1;
    d1.datiPersonali.nome = "Luca";
    d1.datiPersonali.cognome = "Picciotto";
    d1.datiPersonali.indirizzo.via = "Via Botticelli";
    d1.datiPersonali.indirizzo.civico = 2;
    d1.datiPersonali.indirizzo.cap = 10154;
    d1.datiPersonali.indirizzo.comune = "Torino";
    d1.datiPersonali.dataNascita.gg = 21;
    d1.datiPersonali.dataNascita.mm = 2;
    d1.datiPersonali.dataNascita.aaaa = 2004;
    d1.datiPersonali.codiceFiscale = "AAAAAAAAAAAAAA";
    d1.datiPersonali.isConiugato = false;
    d1.corsi[0] = "Web";
    d1.corsi[1] = "Cyber";
    d1.corsi[2] = "Mobile";
    d1.materia[0] = "Principi";
    d1.materia[1] = "Fondamenti";
    d1.materia[2] = "Programmazione";
 
}

