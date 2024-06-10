 /*
 Operadores lógicos
 && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
 || -> OR -> OU
 ! -> NOT -> NÃO
 */
// const expressaoAnd = true && false && true;
// const expressaoOr = false || false || false || true;

// console.log(expressaoAnd);
// console.log(expressaoOr);

const usuario = 'Elian';
const senha = '150123';

const vaiLogar = usuario === 'Elian' && senha === '150123';
console.log(vaiLogar);

const vaiLogar2 = usuario === 'Elian' || senha === '15012';
console.log(vaiLogar2);

const vaiLogar3 = usuario === 'Elian' && senha === !'150123';
console.log(vaiLogar3);
