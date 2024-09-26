/*
 * Convert the score with the grade
 * @param {number} score score entered
 * @returns {string} a grade for the score
 */
function assignGrade (score) {
    if (score >= 90) {
        return 'A'; 
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(assignGrade(101));
console.log(assignGrade(78));
console.log(assignGrade(30));
console.log(assignGrade(88));
console.log(assignGrade(2));