// classe padre -> Person, classe figlio (o estesa)-> Teacher
class Person {                                          //questa è la funzione costruttrice, solo che la sintassi nasconde il funzionamento, ma è uguale a scrivere 'function Person(){...}'
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'My name is ' + this.name;
    }
}

class Teacher extends Person{
    speak() {        
        return super.speak() + ', I am a teacher';      //super.method si riferisce al metodo della classe padre e va ad aggiungere una parte specifica della classe figlio 
    }
}

let guy = new Teacher('James');
console.log(guy.speak());
console.log('------------------');


// usare le classi
class Book {
    constructor(title, author, numPages){
        this.title = title || 'Unknown';
        this.author = author || 'Unknown';
        this.numPages = numPages || 'Unknown';
        this.currentPage = 0;
    }
    read() {
        this.currentPage = this.numPages;
        return 'You read ' + this.numPages + ' pages of ' + this.title + '! ';  
    }
}
let book = new Book('Robot Dreams', 'Isaac Asimov', 320);
book.read();

// ora la estendiamo e creamo la classe figlio PaparBack
class PaparBack extends Book {
    constructor(title, author, numPages, cover){
        super(title, author, numPages);
        this.cover = cover;
    }
    burn() {
        console.log('Omg, you burnt all ' + this.numPages + ' pages');
        this.numPages = 0;
    }
    read() {
        console.log(super.read() + ' in paperback format!');  
    }
}

let paperback = new PaparBack('1984', 'George Orwell', 250, 'cover.jpg');
paperback.read();
paperback.burn();
console.log('------------------');


// metodi e proprietà statiche vengono assegnati alla funzione della classe stessa, non al suo "prototipo"
class Car {
    constructor(color){
        this.color = color;                         // 'this' si riferisce alle nuove istanze
        Car.istances += 1;
    }
    
    static istances = 0;

    static getIstances = function () {              // 'this' si riferisce a Car restituisce Car.instances; // avrei potuto usare Car invece di 'this'
        return this.istances;
    };
}

const cars = [new Car('red'), new Car('green'), new Car('black'), new Car('blue')];
console.log(Car.getIstances());
// console.log(cars.getIstances());                   // Uncaught TypeError: cars.getIstances is not a function 
console.log('------------------');



// proprietà e metodi privati
class BankAccount {
    #widthdrawLimit = 500;

    #limiteWithdraw(amount) {
        if(amount < 0) return 0;
        if(amount > this.#widthdrawLimit) return this.#widthdrawLimit;
        return amount;
    }
    withdraw(amount) {
        return this.#limiteWithdraw(amount);
    }
}

let account = new BankAccount();

// account.#limiteWithdraw(123);                    //error
// account.#widthdrawLimit = 1000;                  //error
console.log(account.withdraw(-40));
console.log(account.withdraw(40));
console.log(account.withdraw(600));
console.log('------------------');



// Dynamic properties
const getStatus = function () {
    return 'employee';
};
const person = {
    name: 'adam',
    [getStatus() + '_' + 'number']: 13324           //crea una proprietà formata dall'output di getStatus + i valori aggiunti dopo
};
console.log(person.employee_number); // 13324
console.log('------------------');



// metodi get e set, get serve per accedere e set per modificare (ovviamente accede anche)
class Bank {
    #money;

    constructor(money) {
        this.#money = money;
    }

    get money() {
        return this.#money < 1000 ? this.#money : 'you are rich';
    }
    set money(newMoney) {
        this.#money = newMoney < 0 ? 0 : newMoney;
    }
}

const bank = new Bank(80);
console.log(bank.money);
bank.money = 30;                                //questo è il metodo set, all'utente sembra di accedere ad una normale proprietà, mentre il lavoro viene eseguito 'di nascosto'
console.log(bank.money);                        // stessa cosa per il medoto get
bank.money = -100;
console.log(bank.money);
bank.money = 1300;
console.log(bank.money);
console.log('------------------');
