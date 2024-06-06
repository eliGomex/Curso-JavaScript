// geralmente usa-se function
// function saudacao(nome isso é um parametro)
// qualquer função criada retorna undefined quando não se tem o return definido
// return delimita onde o interpretador deve para, nada mais faz abaixo dele dentro da função
// const vari = saudacao('Eli');
// console.log(vari);

// function saudacao(nome){

//     console.log(`Bom dia ${nome}`);

//     return `Bom dia ${nome}`
// }

// const vari = saudacao('Eli');
// console.log(vari);
//---------------------------------------------------------------------------------------------------------------------
// function soma(x, y) {
//     const resultado = x + y;
//     return resultado
// }

// const resultado = soma(2, 2);
// console.log(resultado);
// console.log(soma(2, 2))
//-----------------------------------------------------------------------------------------------------------------------
// OUTRA FORMA DE CRIAR FUNÇÕES
// const raiz = function (n) {
//     return n ** 0.5;
// };

// console.log(raiz(9));
//-----------------------------------------------------------------------------------------------------------------------
// OUTRA FORMA DE CRIAR FUNÇÕES: ARROW FUNCTION
const raiz = n => n ** 0.5;

console.log(raiz(9));