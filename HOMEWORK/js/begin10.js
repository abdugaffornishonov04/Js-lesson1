let A = +prompt("A ning qiymatini kiriting");
let B = +prompt("B ning qiymatini kiriting");
let C = +prompt("C ning qiymatini kiriting");

let X = A; // A ning qiymati ozgarib ketmasligi uchun X variable tayinlandi
A = B;
B = C;
C = A;

console.log("A ning yangi qiymati: ", A);
console.log("B ning yangi qiymati: ", B);
console.log("C ning yangi qiymati: ", X);