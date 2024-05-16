void inserimentoPersonaFittizio(Persona p[], int N) { 
    for (int i = 0; i < N; i++) {
        p[i].id = i + 1; // Codice sequenziale per ogni persona
        p[i].nome = "Nome " + to_string(i + 1);
        p[i].cognome = "Cognome " + to_string(i + 1);
        p[i].indirizzo.via = "Via " + to_string(i + 1);
        p[i].indirizzo.civico = i + 1;
        p[i].indirizzo.cap = 10000 + i; // CAP incrementato per ogni persona
        p[i].indirizzo.comune = "Comune " + to_string(i + 1);
        p[i].dataNascita.gg = i + 1; // Giorno di nascita incrementato per ogni persona
        p[i].dataNascita.mm = 1; // Mese di nascita (gennaio)
        p[i].dataNascita.aaaa = 2000 + i; // Anno di nascita incrementato per ogni persona
        p[i].codiceFiscale = "CF" + to_string(i + 1);
        p[i].isConiugato = (i % 2 == 0); // Alternanza tra coniugati e non coniugati
    }
}