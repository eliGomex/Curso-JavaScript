
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
const auxiliar = varA;

[varA, varB, varC] = [varB, varC, varA]
// varA = varB;
// varB = varC;
// varC = auxiliar;
console.log(varA,varB, varC);



