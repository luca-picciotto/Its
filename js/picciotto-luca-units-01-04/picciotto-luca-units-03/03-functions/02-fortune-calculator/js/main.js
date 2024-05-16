// 2.Fortune calculator
// ● Write a function named tellFortune that:
//      ○ Takes 4 arguments: number of children, partner's name, 
    //    geographic location, job title.
//      ○ outputs your fortune to the screen like so: "You will 
    //    be a X in Y, and married to Z with N kids."
// ● Call that function 3 times with 3 different values for the arguments
let id = 0;

/*
 * Return the auto-increment of p's id;
 * @returns {number} id - id ++;
 */
function addId(){
    id++;

    return id;
}

/*
 * Return on screen the fortune of person passed like argmuents
 * @param {number} numberOfChildren - number of son
 * @param {number} partnerName - partner's name
 * @param {number} geographicLocatio - country where word
 * @param {number} jobTitle - work to do
 * @returns {string} the concatenation of argument passed;
 */
function tellFortune(numberOfChildren, partnerName, geographicLocatio, jobTitle){
    document.getElementById(addId()).innerHTML = "You will be a " + jobTitle + " in " + geographicLocatio + ", and married to " + partnerName + " whit " + numberOfChildren + " kid";
}

tellFortune(4, "Gian Francesca", "Italy", "Poor");
tellFortune(null, "Pier Chicco", "Burundi", "Rich");
tellFortune(3 + 7, "Adelaide", "Iraq", "Terrorist");