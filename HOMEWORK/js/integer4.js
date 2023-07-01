let x = +prompt("Uch xonali son kiriting, uning o'nliklar xonasidagi raqam bilan yuzliklar honasidagi raqam almashtirishdan hosil bo'lgan sonni chiqarib beraman");

let func = x % 10; //birlik
let func2 = ((x % 100) - func) / 10 ; //onlik
let func3 = (x - (x % 100)) / 100; //yuzlik

console.log("Natija: ", func2, func3, func);