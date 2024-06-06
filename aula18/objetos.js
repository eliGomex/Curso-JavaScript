// argumento é o valor passado para o parametro

// const pessoa1 =  {
//     nome: 'Elian',
//     Sobrenome: 'Gomes',
//     idade: 25
// };

// console.log(pessoa1)

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = criaPessoa('Elian', 'Gomes', 23);
// const pessoa2 = criaPessoa('Sara', 'Santos', 21);
// const pessoa3 = criaPessoa('Maria', 'Carvalho', 62);
// const pessoa4 = criaPessoa('Jose', 'Aristeu', 71);

// console.log(pessoa1)
// console.log(pessoa2)
// console.log(pessoa3)
// console.log(pessoa4)

const pessoa1 =  {
    nome: 'Elian',
    Sobrenome: 'Gomes',
    idade: 25,

    fala() { // é um metodo
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
