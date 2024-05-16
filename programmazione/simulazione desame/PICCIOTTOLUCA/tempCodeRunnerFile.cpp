    do{
        cout << "Autore: ";
        cin.ignore();
        getline(cin, libri[i].autore);
    }while( libri[i].autore == "");
