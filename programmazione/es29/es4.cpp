#include <iostream>
#include <string>

using namespace std;

int main() {
    string parola;
    int lunghezza;
    int i;
    cout << "Inserisci una stringa: ";
    cin >> parola;
    int vocali = 0;
    lunghezza = parola.size();



    for (i = 0; i < lunghezza; i++) {
        if(parola[i] == 'a'|| parola[i] == 'e'||parola[i] == 'i'||parola[i] == 'o'||parola[i] == 'u' ){
            vocali ++;
        }
    }

  cout<<"contiene: "<<vocali<<endl;

    return 0;
}
