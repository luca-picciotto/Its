// Add a method to the String prototype called toStrangeKebab() that transforms strings to kebab-case
// Given the followinùg array
//! const source = [
//!  'MyNameIsMyPassportVerifyMe',
//!  'My Name Is My Passport Verify Me MMM',
//!  ' -- -My?Name&*is**my$$Passport???p??',
//!  'mY--name--- is- - 2023---',
//!  'mynameismypassport',
//!  '2022 my name is',
//! '2024-my-name-is'
//! ];
//! source.forEach(item => console.log(item.toStrangeKebab()));

// The output should exactly match this:
// my-name-is-my-passport-verify-me
// my-name-is-my-passport-verify-me-m-m-m
// my-name-is-my-passport-p
// m-y-name-is-2023
// mynameismypassport
// my-name-is
// my-name-is

const source = [
 'MyNameIsMyPassportVerifyMe',
 'My Name Is My Passport Verify Me MMM',
 ' -- -My?Name&*is**my$$Passport???p??',
 'mY--name--- is- - 2023---',
 'mynameismypassport',
 '2022 my name is',
'2024-my-name-is'
];


String.prototype.toStrangeKebab = function () {

    const result = this
    .replace(/^\s+/, '')                      // Rimuovi spazi iniziali
    .replace(/^\d+/, '')                      // Rimuovi numeri iniziali
    .replace(/[^a-zA-Z0-9\s]/g, '')           // Rimuovi simboli tranne lettere, numeri e spazi
    .replace(/[A-Z]/g, (match) => match.toLowerCase())  // Converti maiuscole in minuscole
    .replace(/\s+/g, '-')                     // Sostituisci spazi con '-'
    .replace(/^-+|-+$/g, '');                 // Rimuovi eventuali trattini iniziali o finali
  
    
    console.log(result);
}

source.forEach(element => {
    element.toStrangeKebab();
});
