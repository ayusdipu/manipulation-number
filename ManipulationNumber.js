// Manipulation of Number

// Data awal
var A = 10
let B = 0.99
const C = 0.02

// Level 1 Calculation
console.log(A+B);
console.log(A*B);
console.log(B*C);
console.log(A/B);
console.log(A%B);

// Level 2 Mix with String and Boolean
console.log("String test" + " " + A);
console.log(A>B);

// Level 3 
var X = [A,B,C];
X.push(5);
X.push(7);
console.log(X);


for (i = 0; i < X.length; i++) { 
    var text = X[i];
    console.log(text);
}
