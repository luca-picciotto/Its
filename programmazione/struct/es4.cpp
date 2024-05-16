#include <iostream>
#include <string>
using namespace std;

// Quarto Esercizio
// Rappresentare con una struttura le informazioni di una città: nome, numero di abitanti
// attuale e numero di abitanti dello scorso anno. Costruire una funzione che permetta di
// calcolare l’incremento (o decremento) degli abitanti. Scrivere un programma che permetta
// di testare la funzione progettata, comprensivo di inserimento dati.

struct Citta {
    string nome;
    int numeroAbitantiAttuale;
    int numeroAbitantiPassato;
};

int calcoloPopolazione(Citta);
void stampaStruct(Citta);
void inserimentoCitta(Citta);
