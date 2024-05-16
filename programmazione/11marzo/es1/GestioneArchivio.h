#ifndef _GESTIONE_ARCHIVIO_
#define _GESTIONE_ARCHIVIO_

#include <iostream>
#include <string>
#define MAX 100
using namespace std;

struct Libro{
    int codice;
    float costo;
    int numeroPagine;
};

int richiestaN();

void inserimentoLibro(Libro);
void inserimentoLibri(Libro, int);
void stampaLibro(Libro);
void stampaLibri(Libro, int);

#endif