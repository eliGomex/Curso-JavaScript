/*
&& -> false && true -> false "o valor mesmo
|| -> true || false -> vi retornar "o valor verdadeiro"
FALSY
false
0
'' "" ``
null / undefined
NaN
*/
// console.log('Luiz' && undefined && 'Maria'); // retornar o primeiro valor avaliado em falso
// function falaOi () {
//     return 'Oi';

// }
// const vaiExecutar = NaN;
// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Elian Gomes' || true); retornando o primeiro valor verdadeiro

// const corUsuario = 'azul';
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // quando todas forem falsas a ultima false será retornada