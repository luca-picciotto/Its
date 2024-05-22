/**
 * An array representing the days of the week in English.
 * @type {Array<string>}
 */
const dayEn = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

/**
 * An array representing the days of the week in Italian.
 * @type {Array<string>}
 */
const dayIt = ['DO', 'LU', 'MA', 'ME', 'GIO', 'VE', 'SA'];

/**
 * An object mapping language codes to arrays of days of the week.
 * @type {Object<string, Array<string>>}
 */
const dayLang = {
    en: dayEn,
    it: dayIt
};

/**
 * Returns the day of the week for a given date and language.
 * @param {string} date - The date string in the format 'YYYY-MM-DD'.
 * @param {string} [lang='en'] - The language code ('en' for English, 'it' for Italian).
 * @returns {string} The day of the week in the specified language.
 */
let getWeekDay = (date, lang = 'en') => {
    let day = new Date(date).getDay();
    return dayLang[lang][day];
}


// Function calls
console.log(getWeekDay('2024-05-22', 'en')); 
console.log(getWeekDay('2024-05-22', 'it')); 