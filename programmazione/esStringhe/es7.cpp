#include <iostream>
#include <string>
using namespace std;

int main() {

    string s1;
    string s2;
    int lunghezzas1;
    int lunghezzas2;
    int i;
    int contatore = 0;
    
    cout<<"Inserisci la prima stringa: ";
    cin>>s1;
    
    cout<<"Inserisci la seconda stringa: ";
    cin>>s2;
    
    lunghezzas1 = s1.length();
    lunghezzas2 = s2.length();
    
    for (i = 0; i < lunghezzas1 - lunghezzas2; i++) {
        if (s1.substr(i, lunghezzas2) == s2) {
            contatore++;
        }
    }

    cout<<"La seconda stringa è contenuta nella prima "<<contatore<<" volte";

    return 0;
}