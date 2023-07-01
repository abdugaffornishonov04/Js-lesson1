let x = +prompt("Uch xonali son kiriting, men uni raqamlari yig'indisini chiqarib beraman");

let func = x % 10; //birlik
let func2 = ((x % 100) - func) / 10 ; //onlik
let func3 = (x - (x % 100)) / 100; //yuzlik
let func4 = func + func2 + func3;

console.log("Siz kiritgan sonning raqamlari yigindisi: ", func4);
