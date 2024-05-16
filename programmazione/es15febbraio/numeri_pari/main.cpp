#include <iostream>

using namespace std;

int main() {
    int N;
    cout << "Inserisci un numero N: ";
    cin >> N;

    cout << "Numeri pari minori di " << N << ": ";
    for (int i = 0; i < N; i += 2) {
        cout << i << " ";
    }

    cout << endl;

    return 0;
}
