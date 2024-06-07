/*
Primitivos (imutáveis)- string, number, boolean, undefinid, null (bigint, symbol) dado -> valor

 let nome = 'Elian';
 nome[0] = 'T'
 console.log(nome[0], nome); imutavel o valor

let a = 'A';
let b = a; // Copia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
*/
/*
Referência (mutaveis) - array, object, function  
*/
// let a = [1, 2, 3];
// let b = [...a]; // copiado para b, b fica totalmente independente;
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// console.log(c);
 const a ={
    nome: 'Luiz',
    sobrenome: 'Gomes'
 };
 const b = {...a};

 a.nome = 'Elian';
 console.log(a);
 console.log(b);
