#include <iostream>

using namespace std;

int main() {
    int A, N;
	
    cout << "Inserisci due numeri interi, A e N: ";
    cin >> A >> N;

    cout << "Multipli di " << A << " minori di " << N << ": ";
    for (int i = A; i < N; i += A) {
        cout << i << " ";
    }

    cout << endl;

    return 0;
}
