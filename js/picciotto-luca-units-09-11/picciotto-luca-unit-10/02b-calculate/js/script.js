const pattern = /\d+|[+\-*/^=<>≠≤≥≈∑∏√∞∫∇⊂⊃⊆⊇⊕⊗⊥⋅]/g;
let result = 0;
let divCalc = 0;
let a = '';
let calc = [];
let addiction = function (a, b){
    for(let i = 0; i < calc.length; i++){
        result += calc.charAt(i);
    }
    let divSolution = document.getElementById('solution').textContent = result;
}
let moltiplication = function (a,b ) {
    result += a * b;
}
let division = function (a, b) {
    result += a / b;
}
let subtraction = function (a, b) {
    result += a - b;
}

let onClick = function (){
    a += this.textContent;  

// Usa match per trovare tutti i numeri e i simboli
     calc = a.match(pattern);
    divCalc = document.getElementById('calc').textContent = calc;
}

let btn_1 = document.getElementById('btn-1').addEventListener('click', onClick);
let btn_2 = document.getElementById('btn-2').addEventListener('click', onClick);
let btn_3 = document.getElementById('btn-3').addEventListener('click', onClick);
let btn_plus = document.getElementById('btn-plus').addEventListener('click', onClick);
    btn_plus = document.getElementById('btn-plus').addEventListener('click', addiction);
let btn_4 = document.getElementById('btn-4').addEventListener('click', onClick);
let btn_5 = document.getElementById('btn-5').addEventListener('click', onClick);
let btn_6 = document.getElementById('btn-6').addEventListener('click', onClick);
let btn_minus = document.getElementById('btn-minus').addEventListener('click', onClick);
    btn_minus = document.getElementById('btn-minus').addEventListener('click', onClick);
let btn_7 = document.getElementById('btn-7').addEventListener('click', onClick);
let btn_8 = document.getElementById('btn-8').addEventListener('click', onClick);
let btn_9 = document.getElementById('btn-9').addEventListener('click', onClick);
let btn_molt = document.getElementById('btn-molt').addEventListener('click', onClick);
    btn_molt = document.getElementById('btn-molt').addEventListener('click', onClick);
let btn_0 = document.getElementById('btn-0').addEventListener('click', onClick);
let btn_division = document.getElementById('btn-division').addEventListener('click', onClick);
    btn_division = document.getElementById('btn-division').addEventListener('click', onClick);
let btn_result = document.getElementById('btn-result').addEventListener('click', onClick);