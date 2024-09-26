// 1.DogSpeak
// Add a method to the String prototype called dogSpeak() that works as follows:
// let s = 'We like to learn';
// s.dogSpeak();
// 'Dogs are smart'.dogSpeak();
        // Console output
        // We like to learn Woof!
        // Dogs are smart Woof!

function dogSpeak() {
}

let s = 'ciao';
String.prototype.dogSpeak = function () {
    console.log(this + ' Woof');
}

s.dogSpeak();

// !! Attention !! NON AGGIUNGERE MEDOTI AI PROTOTYPE STANDARD


