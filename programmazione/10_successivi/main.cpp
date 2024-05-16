#include <iostream>

using namespace std;

int main() {
    int N;

    cout << "Inserisci un numero N: ";
    cin >> N;

    cout << "I dieci numeri pari successivi a " << N << " sono: ";
    for (int i = N + 2; i <= N + 20; i += 2) {
        cout << i << " ";
    }

    cout << endl;

    return 0;
}
