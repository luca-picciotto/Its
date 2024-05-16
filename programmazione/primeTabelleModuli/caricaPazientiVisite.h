#ifndef _CARICA_PAZIENTI_VISITE_
#define _CARICA_PAZIENTI_VISITE_

    #include <iostream>
    #include <string>
    #define MAX 100
    using namespace std;

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
    int id;      //codice di identificazione semplificat per non urare il CF
    string nome;
    string cognome;
    Indirizzo indirizzo;
    Data dataNascita;
    string codiceFiscale;
    bool isConiugato;
};

struct Prenotazioni {
    int codice;     //codice prenotazione
    Persona datiPersonali;      //ogni cognome appartiene ad una persona
    Data data;
};

int richiestaN();       //firme
void inserimentoPersonaFittizio(Persona[], int);
void stampaPersone(Persona[], int);
void inserimentoPersonaInput(Persona[], int); 
void caricaPrenotazioni(Persona[], int, Prenotazioni[]);

#endif