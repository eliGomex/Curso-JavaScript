//let umaString = "Um \Texto";
//console.log(umaString[4]); consegue verificar o indice dentro desse range 4
// console.log(umaString.charAt(6)); ""
// console.log(umaString.concat(' em um lindo dia')); = console.log(umaString + (' em um lindo dia')); =m console.log(`${umaString} em um lindo dia`)); vai concatenar
//console.log(umaString.indexOf('texto')); saber onde começa um texto
// console.log(umaString.indexOf('texto', 2)); saber onde começa um texto dando um lugar para verificar se começa lá
// console.log(umaString.lastIndexOf('m', 3)); faz o sentido contrario do indexOf
// console.log(umaString.match(/[a-z]/)); expressoes regulares, este exemplo retorna todas as letras minusculas
//console.log(umaString.search(/[a-z]/)); sempre retorna o indice
// console.log(umaString.replace(/Um/, 'Outra')); pode trocar uma palavra por outra: 
//OBS: FLAG 'g' nos de expressoes regulares
//console.log(umaString.length); retorna o tamanho da string
//console.log(umaString.slice(2, 6)); retorna o que esta nas posições dadas cpmo de 2 ate 6
//console.log(umaString.slice(-3)); retorna o tamanho da string menos o valor dado que ai é -3
//console.log(umaString.split(r)); divide nos locais pedidos
//console.log(umaString.toUpperCase()); deixa toda maiuscula
//console.log(umaString.toLowerCase()); deixa tudo minusculo

let umaString = "O rato roeu a roupa do rei de roma";

console.log(umaString.toLowerCase());