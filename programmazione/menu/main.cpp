#include <iostream>
using namespace std;

int main(int argc, char** argv) {
	//variabili per il do-while;
	int selezione;
	bool esci;
	int conferma;
	//variabili per il controllo di inserimento;
	bool inserimentoNumeri = false;
	//variabili per il case 1, 2;
	int numero1 = 0;
	int numero2 = 0;
	int numero3 = 0;
	//variabile per il case 3
	int maggiore;
	//variabile per il case 4	
	int minore;
	//variabile per il case 5	
	int somma;
	//variabile per il case 6, 7	
	int dec; //utilizzo sia per il crescente sia per il decrescente;

	esci = false;
	
	//menu
	do{
		cout<<"\nSeleziona voce menu:"<<endl<<"1 Inserimento tripletta;"<<endl<<"2 Stampa tripletta;"<<endl<<"3 Stampa massimo;"<<endl<<"4 Stampa minimo;"<<endl<<"5 Stampa media;"<<endl<<"6 Stampa ordine crescente;"<<endl<<"7 Stampa ordine decrescente;"<<endl<<"8 Esci"<<endl;
		cin >>selezione;
		//selezione
		switch(selezione){
			case 1:
				cout<<"Inserimento tripletta: "<<endl;	
				cout<<"Primo numero: ";
				cin>>numero1;
				cout<<"Secondo numero: ";
				cin>>numero2;
				cout<<"Terzo numero: ";
				cin>>numero3;
				
				inserimentoNumeri = true;				
				break;
			case 2:
				if(inserimentoNumeri == false){
					cout<<"Inserisci prima i numeri!"<<endl;
					break;
				}
				cout<<"Stampa tripletta: "<<endl;
				cout<<"Primo numero: "<<numero1 <<endl;
				cout<<"Secondo numero: "<<numero2<<endl;
				cout<<"Terzo numero: "<<numero3<<endl;
				
				break;
			case 3: 
				if(inserimentoNumeri == false){
					cout<<"Inserisci prima i numeri!"<<endl;
					break;
				}
				cout<<"Stampa massimo"<<endl;
				maggiore = numero1;

    			if (numero2 > maggiore) {
        			maggiore = numero2;
    			}

    			if (numero3 > maggiore) {
        			maggiore = numero3;
   				}

				cout<<"Il numero maggiore e': "<<maggiore<<endl;
				
				break;
			case 4:
				if(inserimentoNumeri == false){
					cout<<"Inserisci prima i numeri!"<<endl;
					break;
				}
				minore = numero1;

    			if (numero2 < minore) {
        			minore = numero2;
    			}

    			if (numero3 < minore) {
        			minore = numero3;
    			}
				cout<<"Il numero minore e': "<<minore<<endl;

				break;
			case 5:
				if(inserimentoNumeri == false){
					cout<<"Inserisci prima i numeri!"<<endl;
					break;
				}
				cout<<"Stampa media"<<endl;
				somma = numero1 + numero2 + numero3;
				cout<<"La media vale: "<<somma/3<<endl;
				break;
			case 6:
				if(inserimentoNumeri == false){
					cout<<"Inserisci prima i numeri!"<<endl;
					break;
				}
				cout<<"Stampa ordine crescente"<<endl;
				if (numero1 > numero2) {
			        dec = numero1;
			        numero1 = numero2;
			        numero2 = dec;
			    }
			
			    if (numero2 > numero3) {
			        dec = numero2;
			        numero2 = numero3;
			        numero3 = dec;
			    }
			
			    if (numero1 > numero2) {
			        dec = numero1;
			        numero1 = numero2;
			        numero2 = dec;
			    }
			    cout<<"Stampa tripletta: "<<endl;
				cout<<"Primo numero: "<<numero1 <<endl;
				cout<<"Secondo numero: "<<numero2<<endl;
				cout<<"Terzo numero: "<<numero3<<endl;
				break;
			case 7:
				if(inserimentoNumeri == false){
					cout<<"Inserisci prima i numeri!"<<endl;
					break;
				}
				cout<<"Stampa ordine decrescente"<<endl;

			    if (numero1 < numero2) {
			        dec = numero1;
			        numero1 = numero2;
			        numero2 = dec;
			    }
			
			    if (numero2 < numero3) {
			        dec = numero2;
			        numero2 = numero3;
			        numero3 = dec;
			    }
			
			    if (numero1 < numero2) {
			        dec = numero1;
			        numero1 = numero2;
			        numero2 = dec;
			    }
				cout<<"Primo numero: "<<numero1 <<endl;
				cout<<"Secondo numero: "<<numero2<<endl;
				cout<<"Terzo numero: "<<numero3<<endl;
				
				break;
			case 8:
				cout<<"Esci"<<endl;
				cout<<"Sicuro di voler uscire?"<<endl<<"0 No;\n1 Si;"<<endl;
				//conferma uscita
				do{
					cin>>conferma;
				}while(conferma < 0 || conferma > 1);
				
				if(conferma == 1){
					esci = true;
				} else{
					esci = false;
				}
				break;
			default:
				cout<<"inserisci una voce del menu!"<<endl;
		}
	}while(esci == false);
	
	return 0;
}