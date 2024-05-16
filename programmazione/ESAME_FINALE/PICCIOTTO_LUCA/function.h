#ifndef _AUTO_SALOON_
#define _AUTO_SALOON_

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


    void usictaCiclo(bool&);
    int sceltaVoceMenu();
    void inserimentoAutovetture(AutoVetture[], int&);
    int richiestaN();
    void stampaAutoNonVendute(AutoVetture[], int);
    void stampaAuto(AutoVetture[], int);
    void ordinaAlfabetico(AutoVetture[], int);
    void stampaAutoAlfabetico(AutoVetture[], int);
    void stampaXcilindrataMaggiore(AutoVetture[], int);
    void eliminaXanno( AutoVetture[], int&);
#endif