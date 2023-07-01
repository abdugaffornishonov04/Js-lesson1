let x = +prompt("999 dan katta son kiriting, men uni mingliklar honasidagi sonni chiqarib beraman");

let a = x % 10000; //1234
let y = a % 1000; //234
let b = a / 1000; //1.234
let z = a - y; //1234 - 234 = 1000
let d = z / 1000; //1000 / 1000 = 1


// console.log(a);
// console.log(b);
// console.log(y);
// console.log(z);
console.log("Bu raqamning mingliklar honasidagi son: ", d);