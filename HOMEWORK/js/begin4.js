let a = +prompt("Parallelipedning birinchi tomonini kiriting");
let b = +prompt("Parallelipedning ikkinchi tomonini kiriting");
let c = +prompt("Parallelipedning uchinchi tomonini kiriting");

let v = a * b * c;
let s = 2 * (a * b + b * c + a * c);

console.log("Parallelipedning hajmi: ", v);
console.log("Parallelipedning to'la sirti: ", s);