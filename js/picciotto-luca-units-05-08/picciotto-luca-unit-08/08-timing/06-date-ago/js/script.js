/*
    * Return on console the passed date;
    * @param {Data} date - the first date
    * @param {number} day - the day to substruction 
    * @returns {Date} dateAgo- the passed date;
    */
const getDateAgo = (date, day) => {
    let dateAgo = date;
    dateAgo.setDate(date.getDate() - day)
    console.log(dateAgo.toDateString());
    
    return dateAgo.toDateString();
}

getDateAgo(new Date(), 2);
getDateAgo(new Date(), (-2));
getDateAgo(new Date(), 10);
getDateAgo(new Date(), 100);
getDateAgo(new Date('2024-06-23'), 2);
getDateAgo(new Date('2024-06-23'), 30);
