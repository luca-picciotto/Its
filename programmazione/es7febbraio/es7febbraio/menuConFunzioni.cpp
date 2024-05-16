#include <iostream>
using namespace std;

int inserimentoTripletta(int n1) {
	cout<<"Inserimento tripletta: "<<endl;
	cout<<"Inserisci numero: ";
	cin>>n1;
	
	return n1;
}

void stampaTripletta( int n1, int n2, int n3) {
	cout<<endl;

	cout<<endl;
	cout<<"Stampa tripletta: "<<endl;
	cout<<"Primo numero: "<<n1 <<endl;
	cout<<"Secondo numero: "<<n2<<endl;
	cout<<"Terzo numero: "<<n3<<endl;

	system("pause");

}

int stampaMaggiore(int n1, int n2, int n3) {
	int maggiore;
		cout<<endl;

	cout<<"Stampa massimo"<<endl;
	maggiore = n1;

	if (n2 > maggiore) {
		maggiore = n2;
	}

	if (n3 > maggiore) {
		maggiore = n3;
	}

	cout<<"Il numero maggiore e': "<<maggiore<<endl;
	system("pause");
	return maggiore;
}

int stampaMinore(int n1, int n2, int n3) {
	int minore;
	cout<<endl;

	minore = n1;

	if (n2 < minore) {
		minore = n2;
	}

	if (n3 < minore) {
		minore = n3;
	}
	cout<<"Il numero minore e': "<<minore<<endl;
	system("pause");
	return minore;
}

float stampaMedia( int n1, int n2, int n3) {
	int somma;
	float media;
	cout<<endl;

	cout<<"Stampa media"<<endl;
	somma = n1 + n2 + n3;
	media = somma/3;
	cout<<"La media vale: "<<media<<endl;
	system("pause");
	return media;
}

void ordineCrescente(int n1, int n2, int n3) {
	int dec;
	cout<<endl;

	cout<<"Stampa ordine crescente"<<endl;
	if (n1 > n2) {
		dec = n1;
		n1 = n2;
		n2 = dec;
	}

	if (n2 > n3) {
		dec = n2;
		n2 = n3;
		n3 = dec;
	}

	if (n1 > n2) {
		dec = n1;
		n1 = n2;
		n2 = dec;
	}
	cout<<"Stampa tripletta: "<<endl;
	cout<<"Primo numero: "<<n1 <<endl;
	cout<<"Secondo numero: "<<n2<<endl;
	cout<<"Terzo numero: "<<n3<<endl;
	system("pause");
}

void ordineDecrescente(int n1, int n2, int n3) {
	int dec;
	cout<<endl;

	cout<<"Stampa ordine crescente"<<endl;
	if (n1 < n2) {
		dec = n1;
		n1 = n2;
		n2 = dec;
	}

	if (n2 < n3) {
		dec = n2;
		n2 = n3;
		n3 = dec;
	}

	if (n1 < n2) {
		dec = n1;
		n1 = n2;
		n2 = dec;
	}
	cout<<"Stampa tripletta: "<<endl;
	cout<<"Primo numero: "<<n1 <<endl;
	cout<<"Secondo numero: "<<n2<<endl;
	cout<<"Terzo numero: "<<n3<<endl;
	system("pause");
}
int main() {

	int scelta; //voce del menu
	bool esci = false; //consizione di uscita nel menu
	int conferma; //conferma uscita, se conferma 0 esco se 1 o altro allora non esco

	int numero1, numero2, numero3;
	int massimo, minimo; 
	float media;

//loop del menu
	do {
		cout<<"1. Inserimento tripletta numeri"<<endl;
		cout<<"2. Stampa tripletta"<<endl;
		cout<<"3. Stampa massimo"<<endl;
		cout<<"4. Stampa minimo"<<endl;
		cout<<"5. Stampa media"<<endl;
		cout<<"6. Stampa ordine crescente"<<endl;
		cout<<"7. Stampa ordine decrescente"<<endl;
		cout<<"8. Esci"<<endl;

		cout<<"Scegli: ";
		cin>>scelta;
		switch (scelta) {
			case 1:
//				cout<<"Inserimento tripletta numeri:"<<endl;
				numero1 = inserimentoTripletta(numero1);
				numero2 = inserimentoTripletta(numero2);
				numero3 = inserimentoTripletta(numero3);

				break;
			case 2:
//				cout<<"Stampa tripletta"<<endl;
				stampaTripletta(numero1, numero2, numero3);
				
				break;
			case 3:
//				cout<<"Stampa massimo:"<<endl;
				massimo = stampaMaggiore(numero1, numero2, numero3);
				
				break;
			case 4:
//				cout<<"Stampa minimo"<<endl;
				minimo = stampaMinore(numero1, numero2, numero3);
				
				break;
			case 5:
//				cout<<"Stampa media"<<endl;
				media = stampaMedia(numero1, numero2, numero3);
				break;
			case 6:
//				cout<<"Stampa ordine crescente"<<endl;
				ordineCrescente(numero1, numero2, numero3);
				
				break;
			case 7:
//				cout<<"Stampa ordine decrescente"<<endl;

				ordineDecrescente(numero1, numero2, numero3);
				break;
			case 8:
				cout<<"Sei sicuro di voler uscire? (0 per SI, 1 per NO): ";
				cin>>conferma;
				if (conferma == 0)
					esci = true;
				break;
			default:
				cout<<"ERRORE, inserisci un valore compreso tra 1 e 8.";
		}
	} while (!esci);



	return 0;
}