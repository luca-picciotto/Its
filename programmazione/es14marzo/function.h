#ifndef _RUBRICA_TELEFONICA_
#define _RUBRICA_TELEFONICA_

#include <iostream>
#include <string>

using namespace std;

struct Contatto{
    string nome;
    string cognome;
    string numeroTelefono;
    string categoria;
};


int inserimentoDato();

void inserimentoContatto(Contatto[]);
void inserimentoContatti(Contatto[], int);

void stampaContatto(Contatto[]);
void stampaContatti(Contatto[], int);

void eliminaContatto(Contatto[]);
void eliminaContatti(Contatto[], int, int);

void ordinaAlfabetico(Contatto[], int);



#endif 