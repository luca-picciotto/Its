#include <iostream>
#include <string>

using namespace std;

int main() {
    string parola, parola2;
  

    int ricerca;
    cout << "Inserisci una stringa: ";
    cin >> parola;
    cout << "Inserisci una stringa: ";
    cin >> parola2;

    

    ricerca = parola.find(parola2);
    if(ricerca > 0)
        cout<<"contiene";
    else 
        cout<<"non contiene";

    ricerca = parola2.find(parola);
    if(ricerca > 0)
        cout<<"contiene";
    else 
        cout<<"non contiene";
   

    return 0;
}
