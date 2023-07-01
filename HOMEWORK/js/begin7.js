let r1 = +prompt("Birinchi aylana radiusini kiriting, birinchi aylana ikkinchi aylanadan katta bo'lsin");
let r2 = +prompt("Ikkinchi aylana radiusini kiriting");

const Pi = 3.14;

let S1 = Pi * r1;
let S2 = Pi * r2;
let S = Pi * (r1 - r2);

console.log("Birinchi aylana yuzasi: ", S1);
console.log("Ikkinchi aylana yuzasi: ", S2);
console.log("Ularning ayirmasi: ", S);