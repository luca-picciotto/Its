// Calculate properties of a circle, using the definitions here.
// ● Store a radius into a variable.
// ● Calculate the circumference based on the radius, and output "The circumference is NN".
// ● Calculate the area based on the radius, and output "The area is NN".


let radius = 14;
const pi =  3.14;
let circumference;
let area;

circumference = 2 * radius * pi;

area = pi * (radius*radius);

document.getElementById("circonferenza").innerHTML = "The circumference is " + circumference;
document.getElementById("area").innerHTML = "The area is " + area;

