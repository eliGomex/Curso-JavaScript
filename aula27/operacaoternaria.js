// (condição) ? 'Valor verdadeiro : 'Valor Falso';

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP': 'Usuário Normal';
console.log(nivelUsuario);

const corUsuario = 'Azul';
const corSistema = corUsuario || 'preto';
console.log(corSistema)

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// }else{
//     console.log('Usuário Normal');
// };